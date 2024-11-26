import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <section className="flex-grow bg-cream">
      <header className="my-2">
        <nav className="flex gap-3 sm:gap-8 py-3 px-4 sm:px-8 ">
          <NavLink
            to="."
            end
            className={({ isActive }) => {
              return isActive
                ? "text-night font-bold underline font-inter text-base md:text-xl"
                : "text-gray-200 hover:text-night no-underline hover:underline font-inter hover:font-bold text-base md:text-xl";
            }}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="income"
            className={({ isActive }) => {
              return isActive
                ? "text-night font-bold underline font-inter text-base md:text-xl"
                : "text-gray-200 hover:text-night no-underline hover:underline font-inter hover:font-bold text-base md:text-xl";
            }}
          >
            Income
          </NavLink>
          <NavLink
            to="vans"
            className={({ isActive }) => {
              return isActive
                ? "text-night font-bold underline font-inter text-base md:text-xl"
                : "text-gray-200 hover:text-night no-underline hover:underline font-inter hover:font-bold text-base md:text-xl";
            }}
          >
            Vans
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) => {
              return isActive
                ? "text-night font-bold underline font-inter text-base md:text-xl"
                : "text-gray-200 hover:text-night no-underline hover:underline font-inter hover:font-bold text-base md:text-xl";
            }}
          >
            Reviews
          </NavLink>
        </nav>
      </header>
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default HostLayout;
