import { initializeApp } from "firebase/app";
import { getFirestore, collection, arrayUnion } from "firebase/firestore"
import "firebase/firestore"
import { Timestamp } from "firebase/firestore"

import store from "./store"

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

import { doc, getDoc, addDoc, setDoc, getDocs, updateDoc, query, where } from "firebase/firestore";
/*
export async function read_collection(name_collection, id_document) {
    const docRef = doc(db, name_collection, id_document);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
    } else {

        console.log("No such document!");
    }
}*/ 

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
export async function get_profile_in_store(_UID, state = false) {

    console.log("get profile out of firebase (compagny)")

    const docRef = doc(db, "profiel_bedrijf", _UID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        if(!state){
            store.commit('fillStateVuex', docSnap.data())
        }else{
            store.commit('set_data_to_be_displayed', docSnap.data())
        }

    } else {
        console.log("Geen'bedrijf' --> trying cursist ");
        get_profile_in_store_cursist(_UID, state)
    }
}

export async function get_profile_in_store_cursist(_UID, state = false) {

    console.log("get profile in firebase (cursist)")

    const docRef = doc(db, "profiel_cursist", _UID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        if(!state){
            store.commit('fillStateVuex', docSnap.data())
        }else{
            store.commit('set_data_to_be_displayed', docSnap.data())
        }

    } else {
        console.log("Geen cursist/bedrijf heeft dit ID ");
    }
}

/* Updates profile (needed on the profileUser page) */
export async function update_profile(_UID, _data, role) {
    console.log("update profiel met data : ", _data)
    if (role == "bedrijf") {

        await updateDoc(doc(db, "profiel_bedrijf", _UID), {
            UID: _UID,
            username: _data.username,
            //tel: _data.tel,
            profile: true,
            questionnaireCompleted : false,
            time: Timestamp.now(),
            feedback : []
        })
        console.log("Profile ", _UID, " updated ")
    } else {

        await updateDoc(doc(db, "profiel_cursist", _UID), {
            UID: _UID,
            username: _data.username,
            //tel: _data.telefoonnr,
            profile: true,
            questionnaireCompleted : false,
            time: Timestamp.now(),
            feedback : []
        })
        console.log("Profile ", _UID, " updated ")
    }
}


export async function add_questionnaire(Object, role, _UID) {
    console.log("add_questionnaire ")
    if (role == "bedrijf") {

        await updateDoc(doc(db, "profiel_bedrijf", _UID), {
            questionnaire: Object, 
            questionnaireCompleted : true
        })
        store.commit("setQuestionnaire", true)
        console.log("Questionnaire of business", _UID, " filled in")
    } else {

        await updateDoc(doc(db, "profiel_cursist", _UID), {
            questionnaire: Object,
            questionnaireCompleted : true
        })
        store.commit("setQuestionnaire", true)
        console.log("Questionnaire of user", _UID, " filled in")
    }
}

export async function add_feedback(Object, role, _UID) {
    console.log("add_questionnaire ")
    if (role == "bedrijf") {

        await updateDoc(doc(db, "profiel_bedrijf", _UID), {
            feedback: arrayUnion(Object)
        })
        store.commit("setQuestionnaire", true)
        console.log("Questionnaire of business", _UID, " filled in")
    } else {

        await updateDoc(doc(db, "profiel_cursist", _UID), {
            feedback: arrayUnion(Object)
        })
        store.commit("setQuestionnaire", true)
        console.log("Questionnaire of user", _UID, " filled in")
    }
}

export async function add_prediction(Object, role, _UID) {
    console.log("add prediction  ")
    if (role == "bedrijf") {

        await updateDoc(doc(db, "profiel_bedrijf", _UID), {
            prediction: Object
        })
        console.log("Prediction of user", _UID, " filled in")
    } else {

        await updateDoc(doc(db, "profiel_cursist", _UID), {
            prediction: Object
        })
        console.log("Prediction of user", _UID, " filled in")
    }
}

export async function get_group_approved_users(role) {

    console.log("Construction array")
    const array_uid = []
    if (role == "bedrijf") {
        console.log("bedrijf --> cursist")
        // TODO let op net aangepast 
        //const docRef = query(collection(db, "profiel_cursist"), where("prediction", "==", store.state.user.prediction));
        const docRef = query(collection(db, "profiel_cursist"), where("questionnaireCompleted", "==", true));
        
        const docSnap = await getDocs(docRef);

        docSnap.forEach((doc) => {
            console.log(doc.id)
            array_uid.push(doc.id)
        })

        return array_uid
    } else {
        console.log("cursist --> bedrijf")
       // const docRef = query(collection(db, "profiel_bedrijf"), where("prediction", "==", store.state.user.prediction));
        const docRef = query(collection(db, "profiel_bedrijf"), where("questionnaireCompleted", "==", true));
        
       const docSnap = await getDocs(docRef);

        docSnap.forEach((doc) => {
            console.log(doc.id)
            array_uid.push(doc.id)
        })

        return array_uid
    }

}

export async function get_data_user_swipe(_UID, role) {
    console.log("get_data_user_swipe( .. )", _UID, " + role = ", role)

    if (role == "bedrijf") {
        const docRef = doc(db, "profiel_cursist", _UID)
        const docSnap = await getDoc(docRef)
        console.log("resultaat : ", docSnap.data())
        return docSnap.data();

    } else {
        const docRef = doc(db, "profiel_bedrijf", _UID);
        const docSnap = await getDoc(docRef)
        console.log("resultaat : ", docSnap.data())
        return docSnap.data();
    }
}

export async function add_swipe(_UID, _UID_match, match, role) {
    console.log("add_swipe ", match)
    if (role == "bedrijf") {
        if (match) {
            await updateDoc(doc(db, "profiel_bedrijf", _UID), { likes: arrayUnion(_UID_match) })
        } else await updateDoc(doc(db, "profiel_bedrijf", _UID), { dislikes: arrayUnion(_UID_match)})

    } else {
        if (match) {
            await updateDoc(doc(db, "profiel_cursist", _UID), { likes: arrayUnion(_UID_match) })
        } else await updateDoc(doc(db, "profiel_cursist", _UID), { dislikes: arrayUnion(_UID_match) })
    }
}

/******************* STORAGE **************************/
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const storage = getStorage(app_firebase);


export async function uploadImage(file) {
    const fileRef = 'images/avatars/' + file.name
    const storageRef = ref(storage, fileRef);
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
                return downloadURL

            });
        }
    );
}