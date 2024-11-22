
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC3ynGhFxh8PG2WquCEp4rrTKk74GztE6k",
  authDomain: "current-825a2.firebaseapp.com",
  projectId: "current-825a2",
  storageBucket: "current-825a2.firebasestorage.app",
  messagingSenderId: "138730210485",
  appId: "1:138730210485:web:08edd6efa8d58a4e4eeafc",
  measurementId: "G-1GM4R205EF"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export {db, auth}