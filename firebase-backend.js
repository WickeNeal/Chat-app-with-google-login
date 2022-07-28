import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDg6Ap93idNxZpPILaqzA-UkT4Zrfc9ZNc",
  authDomain: "whatsapp-2-72857.firebaseapp.com",
  projectId: "whatsapp-2-72857",
  storageBucket: "whatsapp-2-72857.appspot.com",
  messagingSenderId: "258181743459",
  appId: "1:258181743459:web:b3424370f7e365a69d8956",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
