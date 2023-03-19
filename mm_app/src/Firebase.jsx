import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore} from "@firebase/firestore";

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

// Conexi�n a la DB de firebase
export const db = getFirestore(app);

export const signInGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        
        console.log(name);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    })
    .catch((error) => {
      console.log(error);
    });
};
