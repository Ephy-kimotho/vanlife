import { isLoggedIn } from "../firebaseConfig";
import { redirect } from "react-router-dom";

function requireAuth(request) {
    if (!isLoggedIn) {
      const path = new URL(request.url).pathname
      throw redirect(`/login?message=You must login first.&redirectTo=${path}`);
    }
    return null;
  }
  

export { requireAuth };
