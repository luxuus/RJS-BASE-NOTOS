/* Global Imports */
import React, { FC } from "react";

/* Application Level Imports */
import * as Hooks from "@/hooks";

/* Local Imports */
import { ImageWrapper } from "./Image.styled";

interface ImageProps {
  url: string;
  description: string;
  width?: number;
  height?: number;
  aspectRactio?: string;
}

const Image: FC<ImageProps> = ({
  url,
  description,
  width,
  height,
  aspectRactio,
}) => {
  return (
    <ImageWrapper data-testid="Image">
      <img
        src={url}
        alt={description}
        width={width}
        height={height}
        style={{ aspectRatio: aspectRactio }}
      />
    </ImageWrapper>
  );
};

/**
 * USAGE: Image description to complete.
 * @example
 * <Image />
 */
const ImageMemo = React.memo(Image, (prevProps, nextProps) => {
  /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
  console.log(prevProps, nextProps);
  return true;
});
ImageMemo.displayName = "Image Memoized";

export default ImageMemo;
