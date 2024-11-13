import { Link } from "react-router-dom";
import starView from "../assets/starsview.png";

function About() {
  return (
    <section className="flex-grow bg-cream">
      <div>
        <img
          src={starView}
          alt="a person looking a stars."
          className="w-full object-cover aspect-[3/2] sm:aspect-[2/1] lg:aspect-[4/1] lg:object-fill"
        />
      </div>

      <div className="mt-8 w-11/12 mx-auto text-night">
        <h2 className="font-inter font-bold  text-3xl md:text-4xl lg:text-5xl max-w-4xl">
          Don&apos;t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="text-xl my-4 max-w-4xl">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
          <br />
          (Hitch costs extra 😉)
        </p>
        <p className="text-xl max-w-3xl">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>

      <div className="mt-8 mb-12 w-11/12 mx-auto text-night  bg-softOrange rounded p-8">
        <h3 className="text-xl md:text-2xl  font-inter font-bold">
          Your destination is waiting.
        </h3>
        <h3 className="text-xl md:text-2xl font-inter font-bold mb-4">
          Your van is ready.
        </h3>
        <Link
          to="vans"
          className="block w-52 py-2 px-8 bg-night text-white rounded font-bold"
        >
          Explore our vans
        </Link>
      </div>
    </section>
  );
}

export default About;
