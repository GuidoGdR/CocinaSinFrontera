


import { initializeApp } from "firebase/app"

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

import {firebaseConfig}  from './config';



/*    vars    */
//export const auth = getAuth(app);

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const dbFiles = getStorage(app)




export const uuid = import.meta.env.VITE_FIREBASE_USER_UUID