import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0QaQYtF8s25nc6-VwiirhUKN3Dtq9UMg",
  authDomain: "aradev-photogallery.firebaseapp.com",
  projectId: "aradev-photogallery",
  storageBucket: "aradev-photogallery.appspot.com",
  messagingSenderId: "136376969803",
  appId: "1:136376969803:web:688ba283fca48e9b5a7bce",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, db, app, storage };
