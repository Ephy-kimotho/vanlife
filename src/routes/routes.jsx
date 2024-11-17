import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/Home";
import About from "../components/About";
import Vans from "../components/Vans";
import ErrorBoundary from "../components/ErrorBoundary";
import vansLoader from "../loaders/vansLoader";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "vans",
          element: <Vans />,
          loader: vansLoader,
        },
        {
          path: "*",
          element: <ErrorBoundary />,
        },
      ],
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
    },
  }
);

export { router };
