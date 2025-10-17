/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { InputWrapper } from './Input.styled';


interface InputProps { }


const Input: FC<InputProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <InputWrapper data-testid="Input">
      Input Component
   </InputWrapper>
   );

}

/**
 * USAGE: Input description to complete.
 * @example
 * <Input /> 
 */
const InputMemo = React.memo(Input, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
InputMemo.displayName = 'Input Memoized';

export default InputMemo;
