import { getVans, getVan, getHostVans, getHostVan } from "../api";
import { requireAuth } from "./util";

async function vansLoader() {
  return await getVans();
}

async function vanLoader({ params }) {
  return await getVan(params.vanId);
}

async function hostVansLoader({ request }) {
  requireAuth(request);
  return await getHostVans();
}

async function hostVanLoader({ params, request }) {
  requireAuth(request);
  return await getHostVan(params.vanId);
}
function incomeLoader({ request }) {
  requireAuth(request);
  return null;
}

function reviewsLoader({ request }) {
  requireAuth(request);
  return null;
}

async function loginLoader({ request }) {
  const url = new URL(request.url);
  const message = url.searchParams.get("message");

  if (message) {
    return message;
  } else {
    return null;
  }
}

export {
  vansLoader,
  vanLoader,
  hostVansLoader,
  hostVanLoader,
  loginLoader,
  incomeLoader,
  reviewsLoader,
};
