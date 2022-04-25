import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAVRbve24ArGwDjIgncrRJ5ZXWThlsUeAk",
    authDomain: "linkedin-clone-53617.firebaseapp.com",
    projectId: "linkedin-clone-53617",
    storageBucket: "linkedin-clone-53617.appspot.com",
    messagingSenderId: "648452554888",
    appId: "1:648452554888:web:ead568a5a4caf6d6c85f3d",
    measurementId: "G-FDKWR5G8MN"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth,provider,storage}
export default db;