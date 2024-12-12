import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";

function Header() {
  const [isOpen, setIsopen] = useState(false);
  return (
    <header className="bg-cream py-6 px-2 sm:px-8 flex flex-wrap justify-between items-center">
      <Link to="/">
        <img src={Logo} alt="vanlife logo" className="w-32 sm:w-40" />
      </Link>

      <button
        onClick={() => setIsopen((prev) => !prev)}
        className="text-2xl font-bold p-2 mr-1 sm:hidden"
      >
        {isOpen ? (
          <FaXmark className="text-appleRed" />
        ) : (
          <RxHamburgerMenu className="text-night" />
        )}
      </button>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-min mr-2 sm:mr-8`}
      >
        <NavLink
          to="host"
          className={({ isActive }) =>
            isActive
              ? "text-base sm:text-xl text-night underline font-bold"
              : "text-base sm:text-xl text-gray-200 hover:text-night hover:underline"
          }
          onClick={() => setIsopen(false)}
        >
          Host
        </NavLink>

        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive
              ? "text-base sm:text-xl text-night underline font-bold"
              : "text-base sm:text-xl text-gray-200 hover:text-night hover:underline"
          }
          onClick={() => setIsopen(false)}
        >
          About
        </NavLink>

        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive
              ? "text-base sm:text-xl text-night underline font-bold"
              : "text-base sm:text-xl text-gray-200 hover:text-night hover:underline"
          }
          onClick={() => setIsopen(false)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
