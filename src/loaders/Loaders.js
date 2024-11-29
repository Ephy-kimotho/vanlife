import { getVans, getVan, getHostVans, getHostVan } from "../../api";

async function vansLoader() {
  return await getVans();
}

async function vanLoader({ params }) {
  return await getVan(params.vanId);
}

async function hostVansLoader() {
  return await getHostVans();
}

async function hostVanLoader({params}) {
  return await getHostVan(params.vanId)
}

export { vansLoader, vanLoader, hostVansLoader, hostVanLoader };
