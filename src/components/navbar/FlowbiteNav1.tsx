import { useState } from "react";
import Dlogo from "../../assets/Logo.jpeg";



  const FlowbiteNav1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    

    return (
      <nav className="w-full flex items-center justify-between flex-wrap  bg-brown-900 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
              <img src={Dlogo} alt="Logo" className="h-8 w-8 mr-2"/>
              <span className="sm:text-l font-semibold md:font-semibold text-3xl text-blue tracking-tight">Parkha Ventures</span>
          </div>
          <div className="block lg:hidden">
              <button onClick={toggleMenu} className="flex items-center px-2 py-2 border rounded text-blue border-white hover:text-brown-400 hover:border-brown-400">
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
              </button>
          </div>
          <div className={`w-full block flex-row lg:flex lg:items-center justify-between font-semibold lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
              <div className="text-lg lg:flex-row ">
                  <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-blue hover:text-orange mr-4">
                      Home
                  </a>
                  <a href="/About" className="block mt-4 lg:inline-block lg:mt-0 text-blue hover:text-orange mr-4">
                      About
                  </a>
                  <a href="/Services" className="block mt-4 lg:inline-block lg:mt-0 text-blue hover:text-orange mr-4">
                      Services
                  </a>
                  <a href="/Policies" className="block mt-4 lg:inline-block lg:mt-0 text-blue hover:text-orange mr-4">
                      Policies
                  </a>
                  <a href="/Contact" className="block mt-4 lg:inline-block lg:mt-0 text-blue hover:text-orange mr-4">
                      Contact
                  </a>
              </div>
          </div>
      </nav>
  );
};
  
  export default FlowbiteNav1;
  