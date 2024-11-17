import Button from "./common/Button";
import { useLoaderData } from "react-router-dom";

function Vans() {
  const vans = useLoaderData();

  const vansElements = vans.map((van) => {
    const buttonBg =
      van.type === "simple"
        ? "bg-darkOrange"
        : van.type === "rugged"
        ? "bg-darkGreen"
        : "bg-night";

    return (
      <article key={van.id} className="w-full hover:scale-105 cursor-pointer">
        <img
          src={van.imageUrl}
          alt={van.name}
          className="aspect-[1/1]  object-cover object-center rounded-md"
        />
        <div className="mt-3 flex justify-between">
          <h3 className="font-bold font-inter text-xl text-night">
            {van.name}
          </h3>

          <p className="font-bold font-inter text-xl text-night">
            ${van.price}{" "}
            <span className="text-small font-normal text-sm">/day</span>
          </p>
        </div>

        <div className="mt-2">
          <Button moreStyles={buttonBg}>{van.type}</Button>
        </div>
      </article>
    );
  });

  return (
    <section className="flex-grow bg-cream">
      <div className="w-11/12 mx-auto">
        <h2 className="text-night text-2xl sm:text-3xl mt-3 font-bold">
          Explore our vans options.
        </h2>
        <div className="mt-4 mb-8 grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {vansElements}
        </div>
      </div>
    </section>
  );
}

export default Vans;
