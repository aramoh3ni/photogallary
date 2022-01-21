import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

// import { MessageBox } from "./error/message";

export const HandelRemove = async (id, cRef) => {
  const confirm = window.confirm(`Do You Want to Delete Image ID: ${id}`);
  if (confirm) {
    const docRef = doc(db, cRef, id);
    try {
      await deleteDoc(docRef);
    } catch (err) {
      console.log(err);
    }
  } 
};


