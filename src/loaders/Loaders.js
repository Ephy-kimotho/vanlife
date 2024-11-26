import { getVans, getVan, getHostVans } from "../../api";

 async function vansLoader() {
  return await getVans();
}


async function vanLoader({params}){
  return await getVan(params.vanId)
}

async function hostVansLoader() {
 return await getHostVans()
}

export { vansLoader, vanLoader, hostVansLoader}