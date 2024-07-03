import React from 'react'
import { useState ,useEffect} from 'react';
import Dlogo from '../../assets/Logo.jpeg';
import { Link, NavLink } from 'react-router-dom'

const FlowbiteNav1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const closeMenu = () => {
      setIsOpen(false);
    };

  return (
    <nav className="sticky w-full px-4 py-2 top-0  bg-brown-900 border-gray-300  z-50 shadow-lg ">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
      <Link to ="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Dlogo} className="h-8" alt="Navbar Logo" />
          
          
          <span className="self-center text-3xl font-semibold whitespace-nowrap  text-blue">
            Parkha Ventures
          </span>
        </Link>
      </div>
      <div className="hidden w-full md:block md:w-auto " id="navbar-default">

          <ul className="  flex flex-col p-4 md:p-0 mt-4 border border-gray-300 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
           
            <li>
              <NavLink to ="/"
                className={({isActive}) => 
                  { console.log("home",isActive)
                    return ` font-bold block py-2 px-3 rounded ${isActive ? "text-orange" : "text-blue"} bg-gray-300 rounded md:bg-transparent md:p-0`
                
                  }} >
                
              
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to ="/About"
                
                className={({isActive}) => {
                  console.log("about",isActive)
                  return `font-bold block py-2 px-3 rounded ${isActive ? "text-orange" : "text-blue"} hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 `}
                }

              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to  ="/Services"
                className={({isActive}) => `font-bold block py-2 px-3 rounded ${isActive ? "text-orange" : "text-blue"} hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 `}
              >
                Services
              </NavLink>
            </li>
            
            <li>
              <NavLink to ="/Contact"
                className= {({isActive})=> {
                  console.log("contact",isActive)
                  return ` font-bold block py-2 px-3 rounded ${isActive ? "text-orange" : "text-blue"} hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0`}}
              >
                Contact
              </NavLink>
            </li>
            </ul>
          </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
    </div>
    {isOpen && (
      
        
        <div className="md:hidden mt-2 basis-full">

          <NavLink to ="/" className="block text-white py-2 px-4 hover:bg-gray-700" onClick={closeMenu}>Home</NavLink>
          <NavLink to ="/About"className="block text-white py-2 px-4 hover:bg-gray-700" onClick={closeMenu}>About Us</NavLink>
          <NavLink to  ="/Services" className="block text-white py-2 px-4 hover:bg-gray-700" onClick={closeMenu}>Services</NavLink>
           <NavLink to ="/Contact" className="block text-white py-2 px-4 hover:bg-gray-700" onClick={closeMenu}>Contact</NavLink>
        </div>
      )}

 
  
  </nav>
);
};
  


export default FlowbiteNav1