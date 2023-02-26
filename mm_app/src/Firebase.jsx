import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXaTkxG2bKgSFarWUvaeGV2ja2tWfv5Uw",
  authDomain: "meally-meaty.firebaseapp.com",
  projectId: "meally-meaty",
  storageBucket: "meally-meaty.appspot.com",
  messagingSenderId: "685170813467",
  appId: "1:685170813467:web:c99c524db2ee5766dba6be",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
      console.log(error);
    });
};
