// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEcmNf3F84vxMQKh9xPWlR7AQUsuOEcjU",
    authDomain: "dashboard-11090.firebaseapp.com",
    projectId: "dashboard-11090",
    storageBucket: "dashboard-11090.appspot.com",
    messagingSenderId: "857675928907",
    appId: "1:857675928907:web:be819189ae7eb2fb2584ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;