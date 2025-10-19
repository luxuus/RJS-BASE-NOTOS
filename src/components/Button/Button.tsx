/* Global Imports */
import React, { FC, PropsWithChildren } from "react";

/* Application Level Imports */

/* Local Imports */
import { ButtonWrapper } from "./Button.styled";
import { UIActionnable, UILevel, UISize } from "@/core/types/ui.types";

interface ButtonProps
  extends PropsWithChildren,
    UISize,
    UIActionnable,
    UILevel {
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  return <ButtonWrapper data-testid="Button" {...props} />;
};

/**
 * USAGE: Button description to complete.
 * @example
 * <Button />
 */
const ButtonMemo = React.memo(Button, (prevProps, nextProps) => {
  /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
  console.log(prevProps, nextProps);
  return false;
});
ButtonMemo.displayName = "Button Memoized";

export default ButtonMemo;
