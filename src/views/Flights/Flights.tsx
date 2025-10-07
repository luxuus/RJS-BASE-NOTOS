/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Flights.style.css';


interface FlightsProps {}

const Flights: FC<FlightsProps> = () => {

   Hooks.useDocumentTitle('Flights View');

   return (
   <div className="Flights" data-testid="Flights">
      <UI.Main>Flights Content</UI.Main>
   </div>
   )
};

export default Flights;
