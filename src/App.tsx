/* Global Imports */
import { BrowserRouter, Route, Routes } from 'react-router'

/* Application Level Imports */
import * as UI from '@/components';
import * as Views from '@/views';


function App() {

  return (
      <BrowserRouter>
        <UI.Header />
        <Routes>
          <Route path="/" element={<Views.Home />} />
          <Route path="/products" element={<Views.Products />} />
          <Route path="/flights" element={<Views.Flights />} />
          <Route path="/users" element={<Views.Users />} /> 
        </Routes>
        <UI.Footer />
      </BrowserRouter>
  )
}

export default App
