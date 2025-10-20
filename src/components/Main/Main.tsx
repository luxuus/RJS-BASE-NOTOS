/* Global Imports */
import React, { FC, PropsWithChildren } from "react";

/* Application Level Imports */
import * as Hooks from "@/hooks";

/* Local Imports */
import { MainWrapper } from "./Main.styled";

interface MainProps extends PropsWithChildren {}

const Main: FC<MainProps> = ({ children }) => {
  // Hooks.useGloblaEvent('click',()=> console.log('click event'));

  return <MainWrapper data-testid="Main">{children}</MainWrapper>;
};

/**
 * USAGE: Main description to complete.
 * @example
 * <Main /> 
      Main Component
   </MainWrapper>
   );

}

/**
 * USAGE: Main description to complete.
 * @example
 * <Main /> 
 */
const MainMemo = React.memo(Main, (prevProps, nextProps) => {
  /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
  console.log(prevProps, nextProps);
  return false;
});
MainMemo.displayName = "Main Memoized";

export default MainMemo;
