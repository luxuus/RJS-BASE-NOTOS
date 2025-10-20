/* Global Imports */
import React, {
  FC,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from 'react';

/* Local Imports */
import {
  AutoCompleteWrapper,
  InputEl,
  ListBox,
  OptionEl,
  NoResult,
} from './AutoComplete.styled';

export type AutoCompleteOption = string | { label: string; value: string };

export interface AutoCompleteProps {
  /** Liste d’options suggérées (chaînes simples ou {label,value}) */
  options: AutoCompleteOption[];

  /** Valeur contrôlée (sinon composant non-contrôlé) */
  value?: string;
  /** Valeur initiale si non-contrôlé */
  defaultValue?: string;
  /** Callback à chaque changement de valeur de l’input */
  onChange?: (value: string) => void;
  /** Callback lors de la sélection d’une option */
  onSelect?: (value: string, option: AutoCompleteOption) => void;

  /** Délai de debounce (ms) pour le filtrage */
  debounceMs?: number;
  /** Nombre mini de caractères avant d’afficher des suggestions */
  minChars?: number;
  /** Limiter le nombre de suggestions affichées */
  maxSuggestions?: number;

  /** Filtrage personnalisé (reçoit la query et l’option normalisée {label,value}) */
  filterFn?: (query: string, opt: { label: string; value: string }) => boolean;
  /** Rendu personnalisé d’une option */
  renderOption?: (opt: { label: string; value: string }, active: boolean) => ReactNode;

  placeholder?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;

  /** data-testid pour les tests */
  'data-testid'?: string;
}

function normalize(opt: AutoCompleteOption): { label: string; value: string } {
  if (typeof opt === 'string') return { label: opt, value: opt };
  return opt;
}

const DEFAULT_FILTER = (q: string, o: { label: string; value: string }) =>
  o.label.toLowerCase().includes(q.toLowerCase()) ||
  o.value.toLowerCase().includes(q.toLowerCase());

const AutoComplete: FC<AutoCompleteProps> = ({
  options,
  value,
  defaultValue = '',
  onChange,
  onSelect,
  debounceMs = 200,
  minChars = 0,
  maxSuggestions = 10,
  filterFn = DEFAULT_FILTER,
  renderOption,
  placeholder = 'Commencez à saisir…',
  disabled = false,
  className,
  style,
  'data-testid': dataTestId = 'AutoComplete',
}) => {
  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = useState<string>(defaultValue);
  const query = isControlled ? value! : innerValue;

  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const listId = useId();

  // Debounce de la query
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), debounceMs);
    return () => clearTimeout(t);
  }, [query, debounceMs]);

  const normalized = useMemo(() => options.map(normalize), [options]);

  const filtered = useMemo(() => {
    if (debouncedQuery.length < minChars) return [];
    const arr = normalized.filter((o) => filterFn(debouncedQuery, o));
    return arr.slice(0, maxSuggestions);
  }, [normalized, filterFn, debouncedQuery, minChars, maxSuggestions]);

  // Ouvrir/fermer en fonction de la query + focus
  useEffect(() => {
    if (disabled) {
      setOpen(false);
      return;
    }
    setOpen(filtered.length > 0);
    setActiveIndex(filtered.length ? 0 : -1);
  }, [filtered, disabled]);

  // Click extérieur -> fermer
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const setValue = useCallback(
    (v: string) => {
      if (!isControlled) setInnerValue(v);
      onChange?.(v);
    },
    [isControlled, onChange]
  );

  const commitSelection = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= filtered.length) return;
      const chosen = filtered[idx];
      setValue(chosen.label);
      onSelect?.(chosen.value, chosen);
      setOpen(false);
      // repositionne le curseur à la fin
      requestAnimationFrame(() => inputRef.current?.setSelectionRange(chosen.label.length, chosen.label.length));
    },
    [filtered, onSelect, setValue]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        setOpen(true);
        return;
      }
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex((i) => (filtered.length ? (i + 1) % filtered.length : -1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : -1));
          break;
        case 'Enter':
          if (open && activeIndex >= 0) {
            e.preventDefault();
            commitSelection(activeIndex);
          }
          break;
        case 'Escape':
          setOpen(false);
          break;
      }
    },
    [open, filtered.length, activeIndex, commitSelection]
  );

  const onInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const onOptionMouseEnter = useCallback((idx: number) => setActiveIndex(idx), []);
  const onOptionClick = useCallback((idx: number) => commitSelection(idx), [commitSelection]);

  return (
    <AutoCompleteWrapper
      ref={wrapperRef}
      className={className}
      style={style}
      data-testid={dataTestId}
    >
      <InputEl
        ref={inputRef}
        type="text"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={open && activeIndex >= 0 ? `${listId}-opt-${activeIndex}` : undefined}
        placeholder={placeholder}
        value={query}
        onChange={onInput}
        onKeyDown={onKeyDown}
        onFocus={() => filtered.length && setOpen(true)}
        disabled={disabled}
        data-ison={open ? '1' : '0'}
      />

      {open && (
        <ListBox id={listId} role="listbox">
          {filtered.length === 0 ? (
            <NoResult>Aucun résultat</NoResult>
          ) : (
            filtered.map((opt, idx) => {
              const active = idx === activeIndex;
              return (
                <OptionEl
                  id={`${listId}-opt-${idx}`}
                  key={`${opt.value}-${idx}`}
                  role="option"
                  aria-selected={active}
                  data-active={active ? '1' : '0'}
                  onMouseEnter={() => onOptionMouseEnter(idx)}
                  onMouseDown={(e) => e.preventDefault()} // évite blur avant click
                  onClick={() => onOptionClick(idx)}
                >
                  {renderOption ? renderOption(opt, active) : opt.label}
                </OptionEl>
              );
            })
          )}
        </ListBox>
      )}
    </AutoCompleteWrapper>
  );
};

/**
 * USAGE:
 * <AutoComplete
 *   options={['Paris','Berlin','Lisbonne']}
 *   onSelect={(value,opt)=>console.log(value,opt)}
 * />
 */
const AutoCompleteMemo = React.memo(AutoComplete);
AutoCompleteMemo.displayName = 'AutoComplete';

export default AutoCompleteMemo;
