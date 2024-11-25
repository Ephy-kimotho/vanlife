import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <section className="flex-grow bg-cream">
      <header className="my-2">
        <nav className="flex gap-3 sm:gap-8 py-3 w-[96%] mx-auto">
          <NavLink
            to="."
            end
            className={({ isActive }) => {
              return isActive
                ? "text-night font-bold underline font-inter text-base"
                : "text-gray-200 hover:text-night no-underline hover:underline font-inter hover:font-bold text-base";
            }}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="income"
            className={({ isActive }) => {
              return isActive
                ? "text-night font-bold underline font-inter text-base"
                : "text-gray-200 hover:text-night no-underline hover:underline font-inter hover:font-bold text-base";
            }}
          >
            Income
          </NavLink>
          <NavLink
            to="vans"
            className={({ isActive }) => {
              return isActive
                ? "text-night font-bold underline font-inter text-base"
                : "text-gray-200 hover:text-night no-underline hover:underline font-inter hover:font-bold text-base";
            }}
          >
            Vans
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) => {
              return isActive
                ? "text-night font-bold underline font-inter text-base"
                : "text-gray-200 hover:text-night no-underline hover:underline font-inter hover:font-bold text-base";
            }}
          >
            Reviews
          </NavLink>
        </nav>
      </header>
      <div>
        <div className="w-[96%] mx-auto">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default HostLayout;
