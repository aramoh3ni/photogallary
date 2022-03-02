import {useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/config";

const useFirestore = (cRef) => {
   const [docs, setDocs] = useState([]);

   useEffect(() => {
      
      const collectionRef = collection(db, cRef);
      const q = query(collectionRef, orderBy("createdAt", "desc"));

      const unSub = onSnapshot(q, snap => {
         setDocs(snap.docs.map(doc => console.log(doc)));

         
      })

      return unSub;

   }, [cRef]);
   console.log(docs)
   return { docs }
}

export default useFirestore;