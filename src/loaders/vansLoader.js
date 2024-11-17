import { getVans } from "../../api";

export default async function vansLoader() {
  return await getVans();
}
