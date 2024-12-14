import { Form, Link, useActionData, useLoaderData } from "react-router-dom";

function LoginForm() {
  const errors = useActionData();
  const message = useLoaderData();

  return (
    <section className="bg-cream flex-grow font-inter">
      <div className="px-4 sm:px-8">
        <h2 className="font-bold text-night text-base sm:text-3xl mt-16 mb-5 text-center uppercase underline">
          Sign in to your account
        </h2>
        {message && (
          <h2 className="w-60 mx-auto mb-5 py-1 bg-red-200 rounded-md text-imperialRed text-center font-bold font-inter uppercase tracking-wide">
            {message}
          </h2>
        )}
        <Form method="post" className="grid gap-2 max-w-md mx-auto">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email.."
            className={`${
              errors?.email
                ? "border-none outline outline-2 outline-imperialRed"
                : "outline-none border-2 focus:border-night"
            } py-2 px-3 border-gray-100 rounded-md mt-1`}
          />
          {errors?.email && (
            <p className="text-imperialRed font-bold font-sans">
              {errors.email}
            </p>
          )}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password.."
            className={`${
              errors?.password
                ? "border-none outline outline-2 outline-imperialRed"
                : "outline-none border-2 focus:border-night"
            } py-2 px-3 border-gray-100 rounded-md mt-1`}
          />
          {errors?.password && (
            <p className="text-imperialRed font-bold font-sans">
              {errors.password}
            </p>
          )}

          <button
            type="submit"
            className="bg-pantone text-white font-bold text-lg py-2 rounded w-56 justify-self-center hover:bg-orange-600 my-5"
          >
            Sign In
          </button>
        </Form>

        <p className="font-bold text-base text-center">
          Don&apos;t have an account? &nbsp;
          <Link to="/signup" className="text-pantone">
            Create one now
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LoginForm;
