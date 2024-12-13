import { Form, Link } from "react-router-dom";
import { useActionData } from "react-router-dom";

function SignUpForm() {
  const errors = useActionData();
  return (
    <section className="bg-cream flex-grow font-inter">
      <div className="px-4 sm:px-8">
        <h2 className="font-bold text-night text-xl sm:text-3xl mt-16 mb-5 text-center uppercase underline">
          Create your account
        </h2>

        <Form method="post" className="grid gap-2 max-w-md mx-auto">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email.."
            className={`${
              errors?.email
                ? "border-none outline outline-2 outline-imperialRed"
                : "outline-none border-2"
            } py-2 px-3  border-gray-100 rounded-md mt-1 focus:border-night`}
          />
          {errors?.email && (
            <p className="text-imperialRed font-bold font-sans ">
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
                : "outline-none border-2"
            } py-2 px-3 border-gray-100 rounded-md mt-1 focus:border-night`}
          />

          {errors?.password && (
            <p className="text-imperialRed font-bold font-sans">
              {errors?.password}
            </p>
          )}

          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password.."
            className={`${
              errors?.confirmPassword
                ? "border-none outline outline-2 outline-imperialRed"
                : "outline-none border-2"
            } py-2 px-3 border-gray-100 rounded-md mt-1 focus:border-night`}
          />
          {errors?.confirmPassword && (
            <p className="text-imperialRed font-bold font-sans">
              {errors?.confirmPassword}
            </p>
          )}

          <button
            type="submit"
            className="bg-pantone text-white font-bold text-lg py-2 rounded w-56 justify-self-center hover:bg-orange-600 my-5"
          >
            Sign Up
          </button>
        </Form>

        <p className={`${errors && "mb-10"} font-bold text-base text-center`}>
          Already have an account ?
          <Link to="/login" className="text-pantone">
            &nbsp;Log In
          </Link>
        </p>
      </div>
    </section>
  );
}

export default SignUpForm;
