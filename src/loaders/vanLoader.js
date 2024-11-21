import { getVan } from "../../api";

async function vanLoader({ params }) {
  return getVan(params.vanId);
}

export  default vanLoader;
