import { useLoaderData, Link, NavLink, Outlet } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Button from "../components/common/Button";

function HostVanDetail() {
  const van = useLoaderData();

  return (
    <section>
      <div className="px-4 sm:px-8">
        <Link
          to=".."
          relative="path"
          className="font-inter flex items-center gap-1 text-night text-base hover:underline"
        >
          <IoMdArrowRoundBack />
          Back to all vans
        </Link>

        <div className="bg-white p-8 rounded mt-3 mb-8">
          <article className="mb-4 flex gap-4">
            <img
              src={van.imageUrl}
              alt={`A ${van.name}`}
              className="w-32 h-32 md:w-40 md:h-40 rounded object-cover"
            />
            <div>
              <Button moreStyles={`bg-darkOrange font-bold`}>{van.type}</Button>

              <h3 className="text-xl sm:text-2xl text-black font-inter font-bold my-1">
                {van.name}
              </h3>
              <p className="text-night text-base sm:text-lg font-inter font-bold">
                ${van.price}
                <span className="font-normal text-sm sm:text-base">/day</span>
              </p>
            </div>
          </article>

          <div>
            <nav className="flex gap-5 my-2">
              <NavLink
                to="."
                end
                className={({ isActive }) => {
                  return isActive
                    ? "text-black font-bold font-inter underline text-base sm:text-lg tracking-wide"
                    : "text-night hover:text-black no-underline hover:underline text-base font-inter hover:font-bold sm:text-lg tracking-wide";
                }}
              >
                Details
              </NavLink>
              <NavLink
                to="pricing"
                className={({ isActive }) => {
                  return isActive
                    ? "text-black font-bold font-inter underline text-base sm:text-lg tracking-wide"
                    : "text-night hover:text-black no-underline hover:underline text-base font-inter hover:font-bold sm:text-lg tracking-wide";
                }}
              >
                Pricing
              </NavLink>
              <NavLink
                to="photos"
                className={({ isActive }) => {
                  return isActive
                    ? "text-black font-bold font-inter underline text-base sm:text-lg tracking-wide"
                    : "text-night hover:text-black no-underline hover:underline text-base font-inter hover:font-bold sm:text-lg tracking-wide";
                }}
              >
                Photos
              </NavLink>
            </nav>

            <div>
              <Outlet context={van}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HostVanDetail;
