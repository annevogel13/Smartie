import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, setDoc, collection } from "firebase/firestore"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBz-GuAE6HSTl47j9VM0utLN_HWaYGP83Q",
    authDomain: "smartie-v1.firebaseapp.com",
    projectId: "smartie-v1",
    storageBucket: "smartie-v1.appspot.com",
    messagingSenderId: "719152514019",
    appId: "1:719152514019:web:c6a2e869309966d42a56d6",
    measurementId: "G-4YR0EWFPGV"
};

const app_firebase = initializeApp(firebaseConfig);
export const db = getFirestore(app_firebase);


import { doc, getDoc } from "firebase/firestore";

export async function read_collection(name_collection, id_document) {
    const docRef = doc(db, name_collection, id_document);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
    } else {

        console.log("No such document!");
    }
}

export async function add_to_collection(name_collection, data_structure, identification) {

    if (identification) {
        const docRef = doc(db, name_collection, identification)
        await setDoc(docRef, data_structure)
    } else {
        console.log("NO id ")
        tmp = await addDoc(collection(db, name_collection), data_structure)
        console.log(tmp)

    }

    console.log("Document added:", identification);
}

import { query, where, getDocs } from "firebase/firestore"
import { store } from "./main.js"

const profiles_collection = collection(db, "profiles")

export async function has_completed_profile(uid) {

    const q = query(profiles_collection, where("hasProfile", "==", false))

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, "=> ", doc.data())
        store.state.UID = doc.data().UID 
        store.state.hasProfile = doc.data().hasProfile 
        store.state.role = doc.data().role
    })

}
