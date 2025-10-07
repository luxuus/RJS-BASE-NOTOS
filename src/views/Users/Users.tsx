/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Users.style.css';


interface UsersProps {}

const Users: FC<UsersProps> = () => {

   Hooks.useDocumentTitle('Users View');

   return (
   <div className="Users" data-testid="Users">
      <UI.Main>Users Content</UI.Main>
   </div>
   )
};

export default Users;
