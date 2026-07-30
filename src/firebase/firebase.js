// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYmTusPTYpYfkBUzPcwuCe1JJ-gQ1f6V8",
  authDomain: "coderhouse-93435.firebaseapp.com",
  projectId: "coderhouse-93435",
  storageBucket: "coderhouse-93435.firebasestorage.app",
  messagingSenderId: "191913354567",
  appId: "1:191913354567:web:a42b477165b629d4c25862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar la instancia de Firestore para usar en componentes;
export { db }