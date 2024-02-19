import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAibv5Z_CoeVFgc_RcqyLGmkNyOxajs25k",
  authDomain: "insta-clone-90575.firebaseapp.com",
  projectId: "insta-clone-90575",
  storageBucket: "insta-clone-90575.appspot.com",
  messagingSenderId: "112812750583",
  appId: "1:112812750583:web:655552b78bfeb1b0ef85f2",
  measurementId: "G-X6S94BZXHR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage};