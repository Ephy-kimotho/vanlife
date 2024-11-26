import { useLoaderData } from "react-router-dom";
import Star from "../assets/Star.png";

function Dashboard() {
  const vans = useLoaderData();

  const vanElements = vans.map((van) => (
    <article
      key={van.id}
      className="bg-white p-4 rounded font-inter flex justify-between items-center"
    >
      <div className="flex gap-3">
        <img
          src={van.imageUrl}
          alt={van.name}
          className="w-20 h-20 md:w-36 md:h-36 rounded object-cover"
        />
        <div className="self-center">
          <p className="text-night font-bold font-inter text-lg md:text-xl">{van.name}</p>
          <p className="text-gray-200 md:text-lg">
            $60/<span className="text-sm md:text-base">day</span>
          </p>
        </div>
      </div>
      <p className="text-night tracking-wide">Edit</p>
    </article>
  ));

  return (
    <section>
      <article className="bg-softCream py-6 px-4 sm:px-8  font-inter">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Welcome John Doe
        </h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-200 text-base my-4">
            Income last{" "}
            <span className="underline font-bold underline-offset-4">
              30 days
            </span>
          </p>
          <p className="text-night tracking-wide">Details</p>
        </div>
        <p className="font-bold text-2xl md:text-3xl lg:text-4xl">$2,260</p>
      </article>

      <article className="bg-darkCream py-8 px-4 sm:px-8  font-inter flex justify-between items-center ">
        <p className="flex items-center sm:text-xl font-bold">
          Review score{" "}
          <img src={Star} alt="a star" className="inline ml-2 mr-1" /> 5.0
          <span className="text-gray-200">/5</span>
        </p>

        <p className="text-night tracking-wide">Details</p>
      </article>

      <div className="flex justify-between px-4 sm:px-8   items-center mt-4">
        <h3 className="font-bold sm:text-xl">Your listed vans</h3>
        <p className="text-night tracking-wide">View all</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 my-6 px-4 sm:px-8">
        {vanElements}
      </div>
    </section>
  );
}

export default Dashboard;
