import { Link } from "react-router-dom";

function ErrorBoundary() {
  return (
    <section className="flex-grow bg-cream flex flex-col gap-4 px-4 justify-center items-center">
      <h1 className="font-bold text-2xl md:text-4xl text-center font-inter text-red-500">
        Sorry, the page you were  looking for was not found.
      </h1>

      <Link
        to="/"
        className="block text-base text-center w-52 py-2 px-8 bg-night text-white rounded font-bold"
      >
        Return to Home
      </Link>
    </section>
  );
}

export default ErrorBoundary;
