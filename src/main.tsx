import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout.tsx';
import SectionTwo from './components/content/SectionTwo.tsx'
import About from './components/About/About.tsx'
import Contact from './components/Contact/Contact.tsx'
import App from './App.tsx';

const router= createBrowserRouter(
  createRoutesFromElements(
    
  <Route path= '/' element={<Layout />}>
    <Route path= '' element={<App />} />
    <Route path= 'About' element={<About />} />
    <Route path= 'Contact' element={<Contact />} />
    </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
