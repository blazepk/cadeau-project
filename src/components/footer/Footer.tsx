import Dlogo from '../../assets/Logo.jpeg';
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-brown-900 mt-0 sticky ">
      <div className="sticky w-full  bottom-0.5 h-2 flex flex-wrap items-center justify-between mx-auto p-4">
      <Link to ="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Dlogo} className="h-8" alt="Navbar Logo" />
          
          
          <span className="self-center text-2xl font-semibold whitespace-nowrap  text-blue">
            ParkhaVentures
          </span>
        </Link>
        < div className="flex items-center lg:order-2">
                        
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 "
          aria-controls="navbar-default"
         
         
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">

          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-300 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
           
            <li>
              <NavLink to ="/"
                className={({isActive}) => 
                  `font-bold block py-2 px-3 rounded ${isActive ? "text-orange" : "text-blue"} bg-gray-300 rounded md:bg-transparent md:p-0 "
                aria-current="page"`} >
                
              
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to ="/About"
                
                className={({isActive}) => `font-bold block py-2 px-3 text-blue rounded ${isActive ? "text-orange" : "text-blue"} hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 `}

              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to  ="/Policies"
                className={({isActive}) => `font-bold block py-2 px-3 text-blue rounded ${isActive ? "text-orange" : "text-blue"} hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 `}
              >
                Policies
              </NavLink>
            </li>
            
            <li>
              <NavLink to ="/Contact"
                className= {({isActive})=> `font-bold block py-2 px-3 text-blue rounded ${isActive ? "text-orange" : "text-blue"} hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 `}
              >
                Contact
              </NavLink>
            </li>
            </ul>
          
          
         </div>
        </div>
        </div>
        
        < div className="my-6 border-gray-300 sm:mx-auto lg:my-8 h-full" >
        <span className="block text-sm text-blue sm:text-center">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Parkhaventures
          </a>
          . All Rights Reserved.
        </span>
          
      </div>
    </footer>
  );
}

export default Footer;
