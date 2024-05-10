import Dlogo from '../../assets/AbstractWaves.png';
import { Link, NavLink } from 'react-router-dom'

import { BsSearch } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri"

function NavComponent() {
 
  return (
    <nav className="bg-yellow-100 border-gray-200 dark:bg-gray-900">
      < div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to ="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Dlogo} className="h-8" alt="Navbar Logo" />
          
          
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-yellow-600">
            ParkhaVentures
          </span>
        </Link>
        < div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <div className='flex justify-between items-center pt-8'>
                            <div className='relative w-full max-w-[500px]'>
                            <input
                            
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            type='text'
                            placeholder='Search Product' />
                            <BsSearch
                                className='absolute top-0 right-0 mt-4 mr-5 text-grey-500'
                                size={20}
                            />
                        </div>
                    </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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

          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
           
            <li>
              <NavLink to ="/"
                className={({isActive}) => 
                  `block py-2 px-3 text-white ${isActive ? "text-orange-700" : "text-gray-700"} bg-yellow-700 rounded md:bg-transparent md:text-yellow-700 md:p-0 dark:text-white md:dark:text-yellow-500"
                aria-current="page"`} >
                
              
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to ="/About"
                
                className={({isActive}) => `block py-2 px-3 text-gray-900 rounded ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}

              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to  ="/Services"
                className={({isActive}) => `block py-2 px-3 text-gray-900 rounded ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to ="/Pricing"
                className= {({isActive}) => `block py-2 px-3 text-gray-900 rounded ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to ="/Contact"
                className= {({isActive})=> `block py-2 px-3 text-gray-900 rounded ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Contact
              </NavLink>
            </li>
            </ul>
          
          
         </div>
        </div>
         
      </div>
              

            
           
          
    </nav>
  );
}

export default NavComponent;
