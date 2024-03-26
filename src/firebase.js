import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD1q6zW_dPCeVUW9j_OX3WRjRgC-fm7HOo",
  authDomain: "abcsocial-c5c73.firebaseapp.com",
  projectId: "abcsocial-c5c73",
  storageBucket: "abcsocial-c5c73.appspot.com",
  messagingSenderId: "775312904753",
  appId: "1:775312904753:web:d109583c57c89f8edf3b10",
  measurementId: "G-345L60H6MR"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();