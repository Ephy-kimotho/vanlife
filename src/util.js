import { isLoggedIn } from "../firebaseConfig";
import { redirect } from "react-router-dom";

function requireAuth() {
    if (!isLoggedIn) {
      throw redirect("/login?message=You must login first.");
    }
    return null;
  }
  

export { requireAuth };
