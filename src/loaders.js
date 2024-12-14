import { getVans, getVan, getHostVans, getHostVan } from "../api";
import { requireAuth } from "./util";

async function vansLoader() {
  return await getVans();
}

async function vanLoader({ params }) {
  return await getVan(params.vanId);
}

async function hostVansLoader() {
  requireAuth();
  return await getHostVans();
}

async function hostVanLoader({ params }) {
  requireAuth();
  return await getHostVan(params.vanId);
}
function incomeLoader() {
  requireAuth();
  return null;
}

function reviewsLoader() {
  requireAuth();
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
