/* eslint-disable react/prop-types */
import star from "../../assets/Star.png";

function Review({ name, date, review }) {
  return (
    <article className="font-inter text-night pb-2 border-b-2 border-gray-100 sm:border-none">
      <div className="flex gap-1">
        <img src={star} className="inline" alt="a star" />
        <img src={star} className="inline" alt="a star" />
        <img src={star} className="inline" alt="a star" />
        <img src={star} className="inline" alt="a star" />
        <img src={star} className="inline" alt="a star" />
      </div>

      <p className="font-bold my-3 w-full">
        {name} <span className="text-gray-200 font-normal">{date}</span>
      </p>

      <p className="text-night">{review}</p>
    </article>
  );
}

export default Review;
