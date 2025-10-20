/* Global Imports */
import React, {
  FC,
  useCallback,
  useMemo,
  useRef,
  useState,
  KeyboardEvent,
} from 'react';

/* Local Imports */
import {
  SearchfieldWrapper,
  SearchIcon,
  InputEl,
  ChipsRow,
  Chip,
  RemoveBtn,
  LastSearchRow,
  LastSearchTag,
} from './Searchfield.styled';

export interface SearchfieldProps {
  /** Placeholder de l’input */
  placeholder?: string;
  /** Valeur initiale des termes */
  defaultTerms?: string[];
  /** Séparateur de validation (par défaut la virgule) */
  separator?: string;
  /** Callback lorsque la liste de termes change */
  onTermsChange?: (terms: string[]) => void;
  /** Désactiver l’édition */
  disabled?: boolean;

  className?: string;
  style?: React.CSSProperties;
  'data-testid'?: string;
}

/**
 * Règles UX :
 * - Taper un terme puis `,` **ou** `Enter` => ajoute un tag.
 * - `Backspace` quand l’input est vide => supprime le dernier tag.
 * - On mémorise la **dernière valeur validée** et on l’affiche en tag cliquable.
 * - Cliquer le tag “Dernière recherche” remet cette valeur dans l’input.
 */
const Searchfield: FC<SearchfieldProps> = ({
  placeholder = 'Rechercher…',
  defaultTerms = [],
  separator = ',',
  onTermsChange,
  disabled = false,
  className,
  style,
  'data-testid': dataTestId = 'Searchfield',
}) => {
  const [terms, setTerms] = useState<string[]>(
    defaultTerms.map((t) => t.trim()).filter(Boolean)
  );
  const [value, setValue] = useState('');
  const [lastSearch, setLastSearch] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const commit = useCallback(
    (raw: string) => {
      const token = raw.trim();
      if (!token) return;
      // autoriser multi-saisie collée "a,b,c"
      const pieces = token.split(separator).map((t) => t.trim()).filter(Boolean);
      if (!pieces.length) return;

      const next = [...terms];
      for (const p of pieces) {
        if (!next.includes(p)) next.push(p);
        setLastSearch(p); // la dernière valeur validée devient la "dernière recherche"
      }
      setTerms(next);
      setValue('');
      onTermsChange?.(next);
    },
    [separator, terms, onTermsChange]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (disabled) return;

      if (e.key === 'Enter') {
        e.preventDefault();
        commit(value);
        return;
      }
      if (e.key === separator || (separator === ',' && e.key === ',')) {
        e.preventDefault();
        commit(value);
        return;
      }
      if (e.key === 'Backspace' && value === '' && terms.length > 0) {
        const next = terms.slice(0, -1);
        setTerms(next);
        onTermsChange?.(next);
      }
    },
    [commit, disabled, separator, terms, value, onTermsChange]
  );

  const removeAt = useCallback(
    (idx: number) => {
      const next = terms.filter((_, i) => i !== idx);
      setTerms(next);
      onTermsChange?.(next);
    },
    [terms, onTermsChange]
  );

  const onBlur = useCallback(() => {
    // Valide à la sortie du champ si l’utilisateur a laissé une valeur non vide
    if (value.trim()) commit(value);
  }, [commit, value]);

  const chips = useMemo(
    () =>
      terms.map((t, i) => (
        <Chip key={`${t}-${i}`} data-testid={`chip-${i}`} aria-label={`terme ${t}`}>
          <span>{t}</span>
          <RemoveBtn
            type="button"
            aria-label={`Retirer ${t}`}
            onClick={() => removeAt(i)}
          >
            ×
          </RemoveBtn>
        </Chip>
      )),
    [terms, removeAt]
  );

  const putLastBack = useCallback(() => {
    if (!lastSearch) return;
    setValue(lastSearch);
    // focus en fin de texte
    requestAnimationFrame(() => {
      const el = inputRef.current;
      if (el) {
        el.focus();
        const len = lastSearch.length;
        el.setSelectionRange(len, len);
      }
    });
  }, [lastSearch]);

  return (
    <SearchfieldWrapper className={className} style={style} data-testid={dataTestId}>
      <SearchIcon aria-hidden="true" focusable="false" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27a6 6 0 1 0-1.41 1.41l.27.28v.79L20 20.5 21.5 19 15.5 14Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z" />
      </SearchIcon>

      <InputEl
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        disabled={disabled}
        aria-label="Champ de recherche"
      />

      {terms.length > 0 && <ChipsRow role="list">{chips}</ChipsRow>}

      {lastSearch && (
        <LastSearchRow>
          <span>Dernière recherche :</span>
          <LastSearchTag
            type="button"
            onClick={putLastBack}
            data-testid="last-search-tag"
            title="Remettre dans le champ"
          >
            {lastSearch}
          </LastSearchTag>
        </LastSearchRow>
      )}
    </SearchfieldWrapper>
  );
};

const SearchfieldMemo = React.memo(Searchfield);
SearchfieldMemo.displayName = 'Searchfield';

export default SearchfieldMemo;
