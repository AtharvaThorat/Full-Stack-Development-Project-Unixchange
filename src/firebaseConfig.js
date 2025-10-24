/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getDatabase} from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDuF6GPPZ2z3AjbGDSt_59BN6iTSawPmSA",
  authDomain: "fsd-miniproject-48005.firebaseapp.com",
  databaseURL: "https://fsd-miniproject-48005-default-rtdb.firebaseio.com",
  projectId: "fsd-miniproject-48005",
  storageBucket: "fsd-miniproject-48005.appspot.com",
  messagingSenderId: "617073185281",
  appId: "1:617073185281:web:f04917c1ae71717bcc6600"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase();
export {app, auth, db, storage, database};
