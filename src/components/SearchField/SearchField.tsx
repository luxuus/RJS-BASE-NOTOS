/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { SearchFieldWrapper } from './SearchField.styled';


interface SearchFieldProps { }


const SearchField: FC<SearchFieldProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <SearchFieldWrapper data-testid="SearchField">
      SearchField Component
   </SearchFieldWrapper>
   );

}

/**
 * USAGE: SearchField description to complete.
 * @example
 * <SearchField /> 
 */
const SearchFieldMemo = React.memo(SearchField, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
SearchFieldMemo.displayName = 'SearchField Memoized';

export default SearchFieldMemo;
