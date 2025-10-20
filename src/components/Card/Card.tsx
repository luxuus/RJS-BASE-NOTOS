/* Global Imports */
import React, { FC, ReactNode, useId, useMemo, useState, useCallback } from 'react';

/* Local Imports */
import {
  CardWrapper,
  CardHeader,
  CardTitle,
  CardActions,
  CardToggle,
  CardBody,
  CardFooter,
} from './Card.styled';

export type CardAction = {
  key?: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  title?: string; // tooltip
};

export interface CardProps {
  /** Titre affiché dans l’en-tête */
  title?: ReactNode;
  /** Contenu principal (visible si ouvert) */
  children?: ReactNode;
  /** Boutons d’action alignés à droite dans l’en-tête */
  actions?: CardAction[];
  /** Pied de carte optionnel */
  footer?: ReactNode;

  /** Si fourni, la carte devient contrôlée (ignore internal state) */
  open?: boolean;
  /** État initial si non contrôlé */
  defaultOpen?: boolean;
  /** Callback à chaque bascule */
  onToggle?: (open: boolean) => void;

  /** Désactive la possibilité d’ouvrir/fermer */
  collapsible?: boolean;
  /** Texte accessible pour le bouton de toggling */
  toggleAriaLabel?: string;

  /** Style/props pass-through */
  className?: string;
  style?: React.CSSProperties;
  /** Data-testid pour les tests */
  'data-testid'?: string;
}

const Card: FC<CardProps> = ({
  title,
  children,
  actions,
  footer,
  open,
  defaultOpen = true,
  onToggle,
  collapsible = true,
  toggleAriaLabel = 'Afficher/masquer le contenu',
  className,
  style,
  'data-testid': dataTestId = 'Card',
}) => {
  const isControlled = typeof open === 'boolean';
  const [innerOpen, setInnerOpen] = useState<boolean>(defaultOpen);
  const actualOpen = isControlled ? (open as boolean) : innerOpen;

  const titleId = useId();
  const bodyId = useId();

  const handleToggle = useCallback(() => {
    if (!collapsible) return;
    const next = !actualOpen;
    if (!isControlled) setInnerOpen(next);
    onToggle?.(next);
  }, [actualOpen, collapsible, isControlled, onToggle]);

  const hasHeaderActions = (actions?.length ?? 0) > 0;

  const actionButtons = useMemo(
    () =>
      (actions ?? []).map((a, idx) => (
        <button
          key={a.key ?? `action-${idx}`}
          type="button"
          onClick={a.onClick}
          disabled={a.disabled}
          title={a.title}
          className="card-action"
        >
          {a.label}
        </button>
      )),
    [actions]
  );

  return (
    <CardWrapper
      className={className}
      style={style}
      data-testid={dataTestId}
      data-open={actualOpen ? 'true' : 'false'}
    >
      {(title || collapsible || hasHeaderActions) && (
        <CardHeader>
          {title && <CardTitle id={titleId}>{title}</CardTitle>}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginLeft: 'auto' }}>
            {hasHeaderActions && <CardActions aria-label="Actions de la carte">{actionButtons}</CardActions>}
            {collapsible && (
              <CardToggle
                type="button"
                aria-expanded={actualOpen}
                aria-controls={bodyId}
                aria-label={toggleAriaLabel}
                onClick={handleToggle}
              >
                {actualOpen ? '▾' : '▸'}
              </CardToggle>
            )}
          </div>
        </CardHeader>
      )}

      <CardBody
        id={bodyId}
        role="region"
        aria-labelledby={title ? titleId : undefined}
        hidden={!actualOpen}
        data-open={actualOpen ? 'true' : 'false'}
      >
        {children}
      </CardBody>

      {footer && <CardFooter>{footer}</CardFooter>}
    </CardWrapper>
  );
};

const CardMemo = React.memo(Card);
CardMemo.displayName = 'Card';

export default CardMemo;
