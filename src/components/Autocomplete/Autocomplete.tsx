/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { AutocompleteWrapper } from './Autocomplete.styled';


interface AutocompleteProps { }


const Autocomplete: FC<AutocompleteProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <AutocompleteWrapper data-testid="Autocomplete">
      Autocomplete Component
   </AutocompleteWrapper>
   );

}

/**
 * USAGE: Autocomplete description to complete.
 * @example
 * <Autocomplete /> 
 */
const AutocompleteMemo = React.memo(Autocomplete, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
AutocompleteMemo.displayName = 'Autocomplete Memoized';

export default AutocompleteMemo;
