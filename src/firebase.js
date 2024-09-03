import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD3dXElbtrciJVzzfM47A4Jkcf3ay53Qd4',
  authDomain: 'catrecipe-ce4e2.firebaseapp.com',
  projectId: 'catrecipe-ce4e2',
  storageBucket: 'catrecipe-ce4e2.appspot.com',
  messagingSenderId: '603452530408',
  appId: '1:603452530408:web:fed8b856001c09606a335d',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
