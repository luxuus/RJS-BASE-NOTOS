/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Home.style.css';


interface HomeProps {}

const Home: FC<HomeProps> = () => {

   Hooks.useDocumentTitle('Home View');

   return (
   <div className="Home" data-testid="Home">
      <UI.Main>
         <h2>Home Content</h2>
         <hr />
         <UI.Button level="optional" size="large" action={() => alert('Button clicked!')} disabled>Click Me</UI.Button>
         <UI.Button level="primary" size="medium" action={() => alert('Button clicked!')}>Click Me</UI.Button>
         <UI.Button level="critical" size="small" action={() => alert('Button clicked!')}>Click Me</UI.Button>
      </UI.Main>
   </div>
   )
};

export default Home;
