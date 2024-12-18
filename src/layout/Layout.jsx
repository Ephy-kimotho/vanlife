import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import { Toaster } from "sonner";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex">
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            className: "toast-mobile",
            style: {
              fontSize: "1.1rem",
              top:"2rem"
            },
          }}
        />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
