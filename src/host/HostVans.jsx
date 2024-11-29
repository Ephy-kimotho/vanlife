import { useLoaderData, Link } from "react-router-dom";

function HostVans() {
  const vans = useLoaderData();

  const vanElements = vans.map((van) => (
    <Link key={van.id} to={van.id}>
      <article className="bg-white p-4 rounded font-inter flex justify-between items-center">
        <div className="flex gap-3">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="w-20 h-20 md:w-36 md:h-36 rounded object-cover"
          />
          <div className="self-center">
            <p className="text-night font-bold font-inter text-lg md:text-2xl">
              {van.name}
            </p>
            <p className="text-gray-200 md:text-lg">
              $60/<span className="text-sm md:text-base">day</span>
            </p>
          </div>
        </div>
      </article>
    </Link>
  ));

  return (
    <section>
      <div className="px-4 sm:px-8">
        <h2 className="font-inter text-night text-xl sm:text-2xl md:text-3xl font-bold">
          Your listed vans
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 mb-8">
          {vanElements}
        </div>
      </div>
    </section>
  );
}

export default HostVans;
