/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { SkeletonWrapper } from './Skeleton.styled';


interface SkeletonProps { }


const Skeleton: FC<SkeletonProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <SkeletonWrapper data-testid="Skeleton">
      Skeleton Component
   </SkeletonWrapper>
   );

}

/**
 * USAGE: Skeleton description to complete.
 * @example
 * <Skeleton /> 
 */
const SkeletonMemo = React.memo(Skeleton, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
SkeletonMemo.displayName = 'Skeleton Memoized';

export default SkeletonMemo;
