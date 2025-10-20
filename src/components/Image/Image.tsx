/* Global Imports */
import React, { FC, useCallback, useMemo, useState } from "react";

/* Local Imports */
import { ImageWrapper, ImgEl, Overlay } from "./Image.styled";

export interface ImageProps extends React.ComponentPropsWithoutRef<"img"> {
  /** Source de l’image principale */
  src: string;
  /** Source affichée si l’image principale échoue */
  fallbackSrc?: string;
  /** Description sémantique (sert d’alt si alt non fourni) */
  description?: string;
  /** Affiche l’overlay (par défaut true si description) */
  showOverlay?: boolean;
  /** Position de l’overlay */
  overlayPosition?: "bottom" | "top" | "center";
  /** Object-fit (cover/contain/fill/none/scale-down) */
  fit?: React.CSSProperties["objectFit"];
  /** Contrainte d’aspect ratio (ex: "16/9", "1/1", "4/3") */
  aspectRatio?: string;
  /** Rayons (px, rem, etc.) */
  radius?: string;
  /** Largeur/hauteur du conteneur */
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  /** data-testid pour tests */
  "data-testid"?: string;
}

const Image: FC<ImageProps> = ({
  src,
  fallbackSrc,
  alt,
  description,
  showOverlay,
  overlayPosition = "bottom",
  fit = "cover",
  aspectRatio,
  radius = "12px",
  width = "100%",
  height,
  style,
  className,
  onError,
  "data-testid": dataTestId = "Image",
  ...imgProps
}) => {
  const [failed, setFailed] = useState(false);

  const realAlt = alt ?? description ?? "";
  const shouldShowOverlay = showOverlay ?? Boolean(description);

  const actualSrc = useMemo(() => {
    return failed && fallbackSrc ? fallbackSrc : src;
  }, [failed, fallbackSrc, src]);

  const handleError = useCallback<
    NonNullable<React.ImgHTMLAttributes<HTMLImageElement>["onError"]>
  >(
    (e) => {
      if (!failed && fallbackSrc) {
        setFailed(true);
        return;
      }
      onError?.(e);
    },
    [failed, fallbackSrc, onError]
  );

  return (
    <ImageWrapper
      className={className}
      style={{
        ...style,
        width,
        height,
        ["--img-radius" as any]: radius,
        ["--img-fit" as any]: fit,
        ["--img-ratio" as any]: aspectRatio ?? "auto",
      }}
      data-testid={dataTestId}
      data-overlay-pos={overlayPosition}
    >
      <ImgEl
        src={actualSrc}
        alt={realAlt}
        onError={handleError}
        {...imgProps}
      />
      {shouldShowOverlay && description && (
        <Overlay role="note" aria-label="Description de l'image">
          {description}
        </Overlay>
      )}
    </ImageWrapper>
  );
};

const ImageMemo = React.memo(Image);
ImageMemo.displayName = "Image";

export default ImageMemo;
