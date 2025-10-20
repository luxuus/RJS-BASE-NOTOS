/* Global Imports */
import React, { FC, PropsWithChildren } from "react";

/* Application Level Imports */
import * as Hooks from "@/hooks";

/* Local Imports */
import { SkeletonWrapper, SkeletonHelperWrapper } from "./Skeleton.styled";

interface SkeletonProps extends PropsWithChildren {
  'data-testid'?: string;
}
interface SkeletonHelperProps extends PropsWithChildren {
  width: number;
  height: number;
  rows?: number;
}
interface ImageSkeletonProps extends PropsWithChildren {
  width: number;
  height: number;
}
interface CardSkeletonProps extends PropsWithChildren {
  width: number;
  height: number;
}
interface TextSkeletonProps extends PropsWithChildren {
  width: number;
  height: number;
  rows: number;
}
interface ParagraphSkeletonProps extends PropsWithChildren {
  width: number;
  height: number;
  rows: number;
}
interface ButtonSkeletonProps extends PropsWithChildren {
  width: number;
  height: number;
}

const Skeleton: FC<SkeletonProps> & {
  Image: FC<ImageSkeletonProps>;
  Card: FC<CardSkeletonProps>;
  Text: FC<TextSkeletonProps>;
  Paragraph: FC<ParagraphSkeletonProps>;
  Button: FC<ButtonSkeletonProps>;
} = ({ children, 'data-testid': dataTestId = 'Skeleton' }) => {
  return <SkeletonWrapper data-testid={dataTestId}>{children}</SkeletonWrapper>;
};

const SkeletonHelper: FC<SkeletonHelperProps> = ({
  width,
  height,
  rows = 1,
}) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, index) => (
        <SkeletonHelperWrapper
          key={index}
          width={width}
          height={height}
          data-skeleton="block"
          data-width={width}
          data-height={height}
          data-idx={index}
        />
      ))}
    </>
  );
};

const Image: FC<ImageSkeletonProps> = ({ width, height }) => {
  return <SkeletonHelper width={width} height={height} />;
};

const Card: FC<ImageSkeletonProps> = ({ width, height }) => {
  return <SkeletonHelper width={width} height={height} />;
};
const Text: FC<TextSkeletonProps> = ({ width, height, rows }) => {
  return <SkeletonHelper width={width} height={height} rows={rows} />;
};
const Paragraph: FC<ParagraphSkeletonProps> = ({ width, height }) => {
  return <SkeletonHelper width={width} height={height} />;
};

const Button: FC<ButtonSkeletonProps> = ({ width, height }) => {
  return <SkeletonHelper width={width} height={height} />;
};

Skeleton.Image = Image;
Skeleton.Card = Card;
Skeleton.Text = Text;
Skeleton.Paragraph = Paragraph;
Skeleton.Button = Button;
/**
 * USAGE: Skeleton description to complete.
 * @example
 * <Skeleton />
 */
const SkeletonMemo = React.memo(Skeleton) as unknown as FC<SkeletonProps> & {
  Image: FC<ImageSkeletonProps>;
  Card: FC<CardSkeletonProps>;
  Text: FC<TextSkeletonProps>;
  Paragraph: FC<ParagraphSkeletonProps>;
  Button: FC<ButtonSkeletonProps>;
};
SkeletonMemo.Image = React.memo(Image);
SkeletonMemo.Card = React.memo(Card);
SkeletonMemo.Text = React.memo(Text);
SkeletonMemo.Paragraph = React.memo(Paragraph);
SkeletonMemo.Button = React.memo(Button);

SkeletonMemo.displayName = "Skeleton Memoized";

export default SkeletonMemo;