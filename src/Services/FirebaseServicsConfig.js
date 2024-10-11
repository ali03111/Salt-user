// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB2eCKJ9cagWuA8VOmr13cPCuhueePTQwI',
  authDomain: 'salt-1ea5a.firebaseapp.com',
  databaseURL: 'https://salt-1ea5a-default-rtdb.firebaseio.com',
  projectId: 'salt-1ea5a',
  storageBucket: 'salt-1ea5a.appspot.com',
  messagingSenderId: '841728114130',
  appId: '1:841728114130:web:e32af4f48e862f36e05c0b',
  measurementId: 'G-0DYMZWXSRL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};
