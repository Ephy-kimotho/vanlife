import Button from "./common/Button";
import { useLoaderData, useSearchParams } from "react-router-dom";

function Vans() {
  const vans = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  function handleFilterChange(filter) {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (filter === "clear") {
        newParams.delete("type");
      } else {
        newParams.set("type", filter);
      }
      return newParams;
    });
  }

  function renderVanElements() {
    const filteredVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    return filteredVans.map((van) => {
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
  }

  const filterButtons = vans.reduce((acc, van) => {
    if (!acc.includes(van.type)) {
      acc.unshift(van.type);
    }

    return acc;
  }, []);

  if (typeFilter) {
    filterButtons.push("clear");
  }

  const filterButtonsElements = filterButtons.map((btnType, idx) => {
    const isActive = btnType === typeFilter;

    const baseStyles =
      "text-gray-200 font-inter text-base py-2 px-4 cursor-pointer hover:text-softCream rounded-md font-bold bg-softCream";

    let dynamicStyles = "";

    if (isActive) {
      if (btnType === "simple") {
        dynamicStyles = "bg-darkOrange text-white";
      } else if (btnType === "luxury") {
        dynamicStyles = "bg-night text-white";
      } else if (btnType === "rugged") {
        dynamicStyles = "bg-darkGreen text-white";
      }
    } else {
      if (btnType === "simple") {
        dynamicStyles = "hover:bg-darkOrange";
      } else if (btnType === "luxury") {
        dynamicStyles = "hover:bg-night";
      } else if (btnType === "rugged") {
        dynamicStyles = "hover:bg-darkGreen";
      } else {
        dynamicStyles = "hover:bg-appleRed";
      }
    }

    const className = `${baseStyles} ${dynamicStyles}`;

    return (
      <button
        key={idx}
        className={className}
        onClick={() => handleFilterChange(btnType)}
      >
        {btnType}
      </button>
    );
  });

  return (
    <section className="flex-grow bg-cream">
      <div className="w-11/12 mx-auto">
        <h2 className="text-night text-2xl sm:text-3xl mt-3 font-bold">
          Explore our vans options.
        </h2>
        <div className=" flex gap-2 sm:gap-3 my-6 flex-wrap">
          {filterButtonsElements}
        </div>
        <div className="mt-4 mb-8 grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {renderVanElements()}
        </div>
      </div>
    </section>
  );
}

export default Vans;
