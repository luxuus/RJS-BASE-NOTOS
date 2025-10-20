import styled from '@emotion/styled';

export const ImageWrapper = styled.figure`

  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;

  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: var(--img-radius, 12px);

  /* Gestion optionnelle du ratio (native CSS aspect-ratio) */
  aspect-ratio: var(--img-ratio, auto);
  background: #f1f5f9; /* slate-100 */
  box-shadow: 0 1px 2px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.08);
`;

export const ImgEl = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: var(--img-fit, cover);
  border-radius: inherit;
  user-select: none;
`;

export const Overlay = styled.figcaption`
  position: absolute;
  left: 0; right: 0;
  padding: 8px 10px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #0f172a;           /* slate-900 */
  background: rgba(255,255,255,.85);
  backdrop-filter: blur(2px);
  border-top: 1px solid rgba(0,0,0,.06);

  /* Positionnement via data-attr du wrapper */
  bottom: 0;
  &[data-pos="top"] { top: 0; bottom: auto; border-top: 0; border-bottom: 1px solid rgba(0,0,0,.06); }
  &[data-pos="center"] {
    top: 50%; bottom: auto; transform: translateY(-50%);
    border: 1px solid rgba(0,0,0,.06);
    width: max-content; max-width: calc(100% - 16px); margin: 0 auto; border-radius: 999px; padding: 6px 10px;
  }
`;

/* Applique l’attribut de position depuis le parent */
(ImageWrapper as any).defaultProps = {
  children: undefined,
};

