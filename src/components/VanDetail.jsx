import { useLoaderData, useLocation, Link } from "react-router-dom";
import Button from "./common/Button";

function VanDetail() {
  const van = useLoaderData();
  const { state } = useLocation();

  const search = state?.search || "";
  const type = state?.type || "all";

  const buttonBg =
    van.type === "simple"
      ? "bg-darkOrange"
      : van.type === "rugged"
      ? "bg-darkGreen"
      : "bg-night";

  return (
    <section className="flex-grow bg-cream">
      <div className="w-11/12 mx-auto">
        <Link
          to={`..?${search}`}
          relative="path"
          className="block mb-2 hover:underline text-night"
        >
          Back to {type} vans
        </Link>
        <article className="flex flex-col lg:flex-row  gap-8 mb-12">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="w-full lg:w-2/6 lg:h-2/6  object-center rounded-md"
          />

          <div className="self-center">
            <Button moreStyles={`${buttonBg} font-bold`}>{van.type}</Button>

            <h3 className="font-bold my-3 font-inter text-3xl text-night">
              {van.name}
            </h3>

            <p className="font-bold font-inter text-2xl mb-3 text-night">
              ${van.price}
              <span className="text-base font-normal">/day</span>
            </p>

            <p className="font-inter text-xl text-night mb-3">
              {van.description}
            </p>
            <Button moreStyles="w-full bg-pantone my-5 font-bold">
              Rent this van
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default VanDetail;
