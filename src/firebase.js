
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNaKRJsCnCTVW_7b8nzu3ZWjkZNhB-NZc",
  authDomain: "vaccinationcenter-e51c0.firebaseapp.com",
  databaseURL: "https://vaccinationcenter-e51c0-default-rtdb.firebaseio.com",
  projectId: "vaccinationcenter-e51c0",
  storageBucket: "vaccinationcenter-e51c0.appspot.com",
  messagingSenderId: "287354084444",
  appId: "1:287354084444:web:7c34b193369f0244ae1a99",
  measurementId: "G-QK8F9BXMD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);