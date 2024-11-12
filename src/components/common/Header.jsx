import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="bg-cream py-6 px-2 sm:px-8 flex justify-between items-center">
      <Link to="/">
        <img src={Logo} alt="vanlife logo" className="w-32 sm:w-40" />
      </Link>

      <nav className="flex gap-8 mr-8">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive
              ? "text-xl text-night underline"
              : "text-xl text-gray-200 hover:text-night hover:underline"
          }
        >
          About
        </NavLink>

        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive
              ? "text-xl text-night underline"
              : "text-xl text-gray-200 hover:text-night hover:underline"
          }
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
