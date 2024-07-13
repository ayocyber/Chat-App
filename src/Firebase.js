// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQzhBbH6l78a9kyoY3f1axY1b-HmpDB7E",
  authDomain: "chat-app-react-d61ff.firebaseapp.com",
  projectId: "chat-app-react-d61ff",
  storageBucket: "chat-app-react-d61ff.appspot.com",
  messagingSenderId: "645487803973",
  appId: "1:645487803973:web:326c4a913a3ef831faed2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)