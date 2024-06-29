import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout.tsx';
import Services from './pages/Services/Services.tsx'
import About from './pages/About/About.tsx'
import Contact from './pages/Contact/Contact.tsx'
import App from './App.tsx';
import Privacy from './pages/Privacy/Privacy.tsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    
  <Route path= '/' element={<Layout />}>
    <Route path= '' element={<App />} />
    <Route path= 'About' element={<About />} />
    <Route path= 'Services' element={<Services />} />
    <Route path= 'Contact' element={<Contact />} />
    <Route path= 'Policies' element={<Privacy />} />
    </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
