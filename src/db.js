import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection } from "firebase/firestore"
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
        console.log("document added to collection ", identification)
        const docRef = doc(db, name_collection, identification)
        await setDoc(docRef, data_structure)
    } else {
        console.log(" new document ID ")
        tmp = await addDoc(collection(db, name_collection), data_structure)
        console.log(tmp)

    }

    console.log("Document added:", identification);
}

import { query, where, getDocs } from "firebase/firestore"


const profiles_collection = collection(db, "profiles")

export async function get_profile_in_store(_UID) {
    console.log("get profile in store")
    const docRef = doc(db, "profiles", _UID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

import { setDoc } from 'firebase/firestore'

export async function update_profile(_UID, _username, _tel) {
    await setDoc(doc(db, "profiles", _UID), {
        UID: _UID,
        username: _username,
        tel: _tel,
        hasProfile: true,
    })
    console.log("Profile ", _UID, " updated ")
}

