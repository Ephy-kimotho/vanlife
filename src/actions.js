import { createUserWithEmailAndPassword } from "firebase/auth";
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      localStorage.setItem("userId", JSON.stringify(userCredential.user.uid));
      toast.success("Account created successfully.");
      return redirect("/about");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.warning("Email already exists.");
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

export { signUpFormAction };
