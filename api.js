import { collection, getDocs, doc, getDoc } from "firebase/firestore";
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

async function getVan(vanId) {
  const docRef = doc(db, "vans", vanId);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}
export { getVans, getVan };
