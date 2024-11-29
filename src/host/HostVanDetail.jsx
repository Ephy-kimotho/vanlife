import { useLoaderData, Link } from "react-router-dom";
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

        <div className="bg-white p-4 rounded mt-4 mb-8">
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
                ${van.price}{" "}
                <span className="font-normal text-sm sm:text-base">/day</span>
              </p>
            </div>
          </article>
          <div>{/* place outlet here */}</div>
        </div>
      </div>
    </section>
  );
}

export default HostVanDetail;
