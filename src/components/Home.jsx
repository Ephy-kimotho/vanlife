import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex-grow flex  items-center justify-center bg-mountain shadow-overlay bg-no-repeat bg-cover bg-center px-2">
      <div className="font-inter text-white text-center">
        <h1 className="text-3xl sm:text-5xl font-bold">
          You got the travel plans, we got the travel vans.
        </h1>

        <p className="mt-6 mb-8 text-base text-balance sm:text-2xl sm:w-4/5 mx-auto">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <Link
          to="vans"
          className="px-20 py-3 text-base sm:text-xl bg-pantone hover:bg-orange-500 rounded cursor-pointer"
        >
          Find your van.
        </Link>
      </div>
    </section>
  );
}

export default Home;
