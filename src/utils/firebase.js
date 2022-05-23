// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, onValue } from 'firebase/database';
import {
  doc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: 'https://listeningsensors.firebaseio.com/',
  projectId: 'listeningsensors',
  storageBucket: 'listeningsensors.appspot.com',
  messagingSenderId: '634491630956',
  appId: '1:634491630956:web:f6d37d278e93993c8daf49',
  measurementId: 'G-E2B396DSM5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const dbRT = getDatabase(app);

const starCountRef = ref(dbRT, 'accelerometer/');

function getAccelerometerData() {
  let accelerometerData = {};
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    accelerometerData = data;
  });
  return accelerometerData;
}

async function setDocument(collectionName, data) {
  // const docRef = await addDoc(collection(db, collectionName), data);
  await setDoc(doc(db, collectionName, data.id), data);
  // const docSnap = await getDoc(docRef);
  // return { id: docRef.id, ...docSnap.data()};
}

export {
  app,
  analytics,
  dbRT,
  db,
  getAccelerometerData,
  setDocument,
};
