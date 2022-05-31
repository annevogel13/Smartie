import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
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


/***********************FIRESTORE*************************************/

export const db = getFirestore(app_firebase);

import { doc, getDoc, addDoc, setDoc } from "firebase/firestore";

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

/* Add the data_structure to the _name_collection with the variable identification as id */
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

/* Returns the data of a user with the ID _UID */
export async function get_profile_in_store(_UID) {

    console.log("get profile in store")
    const docRef = doc(db, "profiles", _UID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        console.log("No such document!");
    }
}

/* Updates profile (needed on the profileUser page */
export async function update_profile(_UID, _username, _tel) {

    await setDoc(doc(db, "profiles", _UID), {
        UID: _UID,
        username: _username,
        tel: _tel,
        hasProfile: true,
    })
    console.log("Profile ", _UID, " updated ")
}

/******************* STORAGE **************************/
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const storage = getStorage(app_firebase);


export async function uploadImage(file) {

    const storageRef = ref(storage, 'images/avatars/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
            });
        }
    );
}