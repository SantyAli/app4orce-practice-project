// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore'; // Uncomment this if you're using Firestore

const firebaseConfig = {
  apiKey: 'AIzaSyBFutACOGiYEddEN2UBTMTeM2Ez75Gntyo',
  authDomain: 'app4orce-sample-project.firebaseapp.com',
  projectId: 'app4orce-sample-project',
  storageBucket: 'app4orce-sample-project.appspot.com',
  messagingSenderId: '512776032884',
  appId: '1:512776032884:web:6c0fb407aefb00a81cb721',
  measurementId: 'G-SNH9PZMHCF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// window.recaptchaVerifier = new RecaptchaVerifier(auth, 'signinbutton', {
//     'size': 'invisible'
// });
// const firestore = getFirestore(app); // Uncomment this if you're using Firestore

export { auth }; // Add 'firestore' here too if you're using Firestore
export default app;
