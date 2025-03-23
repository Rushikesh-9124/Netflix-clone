import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyB-YG4LIF1q8M58KCFJ5UVg5THEDDAcVVI",
  authDomain: "netflix-clone-c1b1e.firebaseapp.com",
  projectId: "netflix-clone-c1b1e",
  storageBucket: "netflix-clone-c1b1e.firebasestorage.app",
  messagingSenderId: "507248660495",
  appId: "1:507248660495:web:6aa4867ca784e12b69937a",
  measurementId: "G-SMF5HY10ZM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async(name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });

    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logOut = () => {
    signOut(auth);
}

export {auth, db, login, signUp, logOut }