/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { LoaderWrapper } from './Loader.styled';


interface LoaderProps { }


const Loader: FC<LoaderProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <LoaderWrapper data-testid="Loader">
      Loader Component
   </LoaderWrapper>
   );

}

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
   console.log(prevProps, nextProps)
   return true;
});
LoaderMemo.displayName = 'Loader Memoized';

export default LoaderMemo;
