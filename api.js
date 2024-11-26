import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
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

async function getHostVans() {
  const collectionRef = collection(db, "vans")
  const q = query(collectionRef, where("hostId", "==", "123"))

  const querySnapshot = await getDocs(q)

  const hostVans = querySnapshot.docs.map(doc => ({ id:doc.id, ...doc.data()}))

  return hostVans
}


export { getVans, getVan, getHostVans };