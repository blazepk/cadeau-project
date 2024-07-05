import { Link, NavLink } from "react-router-dom";
import Dlogo from "../../assets/Logo.jpeg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer1 = () => {
  return (
    <footer className="bg-brown-900 text-white py-6 ">
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-4  md:gap-y-0 md:flex-row gap-0 md:justify-between ">
        <div className="flex items-center justify-center md:justify-start">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Dlogo} className="h-8" alt="Navbar Logo" />

            <span className="self-center text-2xl font-semibold whitespace-nowrap  text-blue">
              ParkhaVentures
            </span>
          </Link>
        </div>
        <div className="flex space-x-6 text-center text-4xl text-blue">
          <a
            href="https://www.facebook.com/profile.php?id=61561580347706&mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/parkhaventure?igsh=MWgxN3R3Z3VvNnU4OA=="
            target="_blank"
          >
            <FaInstagramSquare />
          </a>

          <a
            href="https://wa.me/918369141810?text=Hello,How can I help You?"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>

        <div className="flex space-x-6 text-center">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border px-24 py-6 border-gray-300 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-bold block py-2 px-3 rounded ${
                    isActive ? "text-orange" : "text-blue"
                  } bg-gray-300 rounded md:bg-transparent md:p-0 "
               aria-current="page"`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `font-bold block py-2 px-3 text-blue rounded ${
                    isActive ? "text-orange" : "text-blue"
                  } hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 `
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Policies"
                className={({ isActive }) =>
                  `font-bold block py-2 px-3 text-blue rounded ${
                    isActive ? "text-orange" : "text-blue"
                  } hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 `
                }
              >
                Policies
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `font-bold block py-2 px-3 text-blue rounded ${
                    isActive ? "text-orange" : "text-blue"
                  } hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 `
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center text-blue">
        &copy; {new Date().getFullYear()} Parkha Ventures. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer1;
