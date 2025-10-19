/* Global Imports */
import React, { FC } from "react";

/* Application Level Imports */
import * as Hooks from "@/hooks";

/* Local Imports */
import { LoaderWrapper, SpinnerWrapper } from "./Loader.styled";

interface LoaderProps {
  spinner: boolean;
  progress?: number;
  max?: number;
}

const Loader: FC<LoaderProps> = ({ progress, max, spinner }) => {
  return spinner ? (
    <SpinnerWrapper />
  ) : (
    <LoaderWrapper>
      <progress value={progress} max={max}></progress>
    </LoaderWrapper>
  );
};

/**
 * USAGE: Loader description to complete.
 * @example
 * <Loader />
 */
const LoaderMemo = React.memo(Loader, (prevProps, nextProps) => {
  /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
  console.log(prevProps, nextProps);
  return true;
});
LoaderMemo.displayName = "Loader Memoized";

export default LoaderMemo;
