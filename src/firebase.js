import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg2LxAWApkE37cRWct0tOQm-pn7waRCrk",
  authDomain: "netflix-clone-24f4c.firebaseapp.com",
  projectId: "netflix-clone-24f4c",
  storageBucket: "netflix-clone-24f4c.appspot.com",
  messagingSenderId: "808020978734",
  appId: "1:808020978734:web:c420d634a7a956f0ae83bf"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth };
export default db;