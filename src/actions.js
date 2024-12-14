import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { redirect } from "react-router-dom";
import { toast } from "sonner";

async function signUpFormAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  const confirmPassword = formData.get("confirmPassword").trim();

  const errors = validateFormData(email, password, confirmPassword);

  if (Object.keys(errors).length > 0) {
    return errors;
  } else {
    try {
      /* CREATE A USER */
      await createUserWithEmailAndPassword(auth, email, password);

      /* SHOW TOAST SUCCESS MESSAGE */
      toast.success("Account created successfully.");

      /* REDIRECT TO HOME PAGE */
      return redirect("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.warning("Email already exists.");
      }
      return null;
    }
  }
}

async function signInFormAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/";

  const errors = validateLoginFormData(email, password);

  if (Object.keys(errors).length > 0) {
    return errors;
  } else {
    try {
      /* SIGN IN USER */
      await signInWithEmailAndPassword(auth, email, password);

      /* SHOW SUCCESS TOAST MESSAGE */
      toast.success("Login successful.");

      /* REDIRECT TO PATH */
      return redirect(pathname);
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        toast.warning("Invalid credentials,Try again");
      }
      return null;
    }
  }
}

function validateFormData(email, password, confirmPassword) {
  const errors = {};
  const regex = /\S+@\S+\.\S+/;

  if (!email) {
    errors.email = "Email is required.";
  } else if (!regex.test(email)) {
    errors.email = "Invalid email address..";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 8) {
    errors.password = "Password must 8 characters or longer.";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Confirm password is required.";
  } else if (confirmPassword.length < 8) {
    errors.confirmPassword = "Confirm password must 8 characters or longer.";
  }

  if (password !== confirmPassword) {
    errors.password = "Passwords must match.";
    errors.confirmPassword = "Passwords must match.";
  }

  return errors;
}

function validateLoginFormData(email, password) {
  const errors = {};
  const regex = /\S+@\S+\.\S+/;

  if (!email) {
    errors.email = "Email is required";
  } else if (!regex.test(email)) {
    errors.email = "Invalid email address";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 8) {
    errors.password = "Password should be 8 characters or longer.";
  }

  return errors;
}

export { signUpFormAction, signInFormAction };
