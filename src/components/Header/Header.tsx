/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { HeaderWrapper } from './Header.styled';
import { NavLink } from 'react-router';


interface NavItemProps {
   to: `/${'' | 'home' | 'products' | 'flights' | 'users'}`;
   label: Capitalize<string>;
   css: 'yellow';
}

const NavItem: FC<NavItemProps> = ({ to, label, css }) => (
   <li aria-roledescription='Navigation Item'>
      <NavLink to={to} className={({ isActive }) => isActive ? css : ""}>{label}</NavLink>
   </li>
);

interface HeaderProps { }


const Header: FC<HeaderProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <HeaderWrapper data-testid="Header">
      <h3>Header Component</h3>

      <nav aria-roledescription='Navigation Menu'>
         <ul>
            <NavItem to='/' label='Home' css='yellow' />
            <NavItem to='/products' label='Products' css='yellow' />
            <NavItem to='/flights' label='Flights' css='yellow' />
            <NavItem to='/users' label='Users' css='yellow' />
         </ul>
      </nav>

   </HeaderWrapper>
   );

}

/**
 * USAGE: Header description to complete.
 * @example
 * <Header /> 
 */
const HeaderMemo = React.memo(Header, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
HeaderMemo.displayName = 'Header Memoized';

export default HeaderMemo;
