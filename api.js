import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function getVans() {
  const collectionRef = collection(db, "vans");
  const querySnapshot = await getDocs(collectionRef);
  const vans = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return vans;
}

export { getVans };
