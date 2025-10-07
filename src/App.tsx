/* Global Imports */
import { BrowserRouter, Route, Routes } from 'react-router'
import { CacheProvider } from '@emotion/react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Views from '@/views';


function App() {

  return (
    <CacheProvider value={cache}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Views.Home />} />
          {
          /* 
          <Route path="/products" element={<Views.Products />} />
          <Route path="/flights" element={<Views.Flights />} />
          <Route path="/users" element={<Views.Users />} /> 
          */
          }
        </Routes>
      </BrowserRouter>
    </CacheProvider>
  )
}

export default App
