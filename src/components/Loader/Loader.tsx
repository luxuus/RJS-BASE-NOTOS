/* Global Imports */
import React, { FC, useMemo } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks'; // préservé même si non utilisé

/* Local Imports */
import { LoaderWrapper, Spinner, BarTrack, BarThumb, Label } from './Loader.styled';

type LoaderVariant = 'spinner' | 'bar';

export interface LoaderProps {
  /** Choix du rendu visuel */
  variant?: LoaderVariant;
  /** Valeur du chargement (0-100). Si omise => indéterminé */
  value?: number;
  /** Spinner: diamètre en px (défaut 20) */
  size?: number;
  /** Spinner: épaisseur du trait en px (défaut 3) */
  thickness?: number;
  /** ProgressBar: largeur/hauteur en px (défaut 240x8) */
  barWidth?: number;
  barHeight?: number;
  /** ProgressBar: coins arrondis (défaut true) */
  rounded?: boolean;
  /** Texte facultatif (affiché à droite) */
  label?: string;
  /** Force le mode indéterminé (ignore value) */
  indeterminate?: boolean;
  /** Affichage inline (sinon flex block) */
  inline?: boolean;
  /** data-testid passthrough pour les tests */
  'data-testid'?: string;
}

const Loader: FC<LoaderProps> = ({
  variant = 'spinner',
  value,
  size = 20,
  thickness = 3,
  barWidth = 240,
  barHeight = 8,
  rounded = true,
  label,
  indeterminate,
  inline,
  'data-testid': testId = 'Loader',
}) => {
  // --- Préserve l'import des hooks, sans l'utiliser réellement
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const __preserveHooksImport = Hooks;

  const isIndeterminate = indeterminate ?? (value == null);

  const ariaProps = useMemo(() => {
    // Accessibilité :
    // - role="progressbar" + aria-valuenow/min/max si déterminé
    // - aria-busy / aria-live pour spinner indéterminé
    if (variant === 'bar') {
      return isIndeterminate
        ? { role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-busy': true }
        : {
            role: 'progressbar',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': Math.min(100, Math.max(0, value ?? 0)),
          };
    } else {
      return isIndeterminate
        ? { role: 'status', 'aria-live': 'polite', 'aria-busy': true }
        : {
            role: 'progressbar',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': Math.min(100, Math.max(0, value ?? 0)),
          };
    }
  }, [variant, isIndeterminate, value]);

  return (
    <LoaderWrapper data-testid={testId} inline={inline} aria-label={label}>
      {variant === 'spinner' ? (
        <Spinner size={size} thickness={thickness} {...ariaProps} />
      ) : (
        <BarTrack width={barWidth} height={barHeight} rounded={rounded} {...ariaProps}>
          <BarThumb value={value} indeterminate={isIndeterminate} />
        </BarTrack>
      )}
      {label ? <Label>{label}{!isIndeterminate && variant !== 'spinner' && typeof value === 'number' ? ` — ${value}%` : ''}</Label> : null}
    </LoaderWrapper>
  );
};

/**
 * USAGE:
 * <Loader variant="spinner" label="Chargement..." />
 * <Loader variant="bar" value={42} label="Import des données" />
 */
const LoaderMemo = React.memo(Loader, (prev, next) => {
  // mémoisation simple : si les props sont strictement égales
  // (shallow), on évite le re-render
  return (
    prev.variant === next.variant &&
    prev.value === next.value &&
    prev.size === next.size &&
    prev.thickness === next.thickness &&
    prev.barWidth === next.barWidth &&
    prev.barHeight === next.barHeight &&
    prev.rounded === next.rounded &&
    prev.label === next.label &&
    prev.indeterminate === next.indeterminate &&
    prev.inline === next.inline
  );
});
LoaderMemo.displayName = 'Loader';

export default LoaderMemo;
