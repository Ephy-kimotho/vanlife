import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/Home";
import About from "../components/About";
import Vans from "../components/Vans";
import VanDetail from "../components/VanDetail";
import ErrorBoundary from "../components/ErrorBoundary";
import HostLayout from "../host/HostLayout";
import Dashboard from "../host/Dashboard";
import HostVans from "../host/HostVans";
import Income from "../host/Income";
import Reviews from "../host/Reviews";
import HostVanDetail from "../host/HostVanDetail";
import HostVanInfo from "../host/HostVanInfo";
import HostVanPricing from "../host/HostVanPricing";
import HostVanPhoto from "../host/HostVanPhoto";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import {
  vansLoader,
  vanLoader,
  hostVansLoader,
  hostVanLoader,
} from "../loaders/Loaders";

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
          path: "vans/:vanId",
          element: <VanDetail />,
          loader: vanLoader,
        },
        {
          path: "host",
          element: <HostLayout />,
          children: [
            {
              index: true,
              element: <Dashboard />,
              loader: hostVansLoader,
            },
            {
              path: "vans",
              element: <HostVans />,
              loader: hostVansLoader,
            },
            {
              path: "vans/:vanId",
              element: <HostVanDetail />,
              loader: hostVanLoader,
              children: [
                {
                  index: true,
                  element: <HostVanInfo />,
                },
                {
                  path: "pricing",
                  element: <HostVanPricing />,
                },
                {
                  path: "photos",
                  element: <HostVanPhoto />,
                },
              ],
            },
            {
              path: "income",
              element: <Income />,
            },
            {
              path: "reviews",
              element: <Reviews />,
            },
          ],
        },
        {
          path:"login",
          element: <LoginForm/>
        },
        {
          path:"signup",
          element:<SignUpForm/>
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
