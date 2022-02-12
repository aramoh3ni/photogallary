import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
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

export const HandelEdit = async (id, cRef, payload) => {
  const docRef = doc(db, cRef, id);
  try {
    await setDoc(docRef, payload);
    alert("Updated Successfully");
  } catch (err) {
    console.log(err);
  }
};

export const HandelGetData = async (cRef) => {
  const conllectionRef = collection(db, cRef);
  return await getDoc(conllectionRef);
  
};
