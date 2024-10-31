import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSENGER_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: String(REACT_APP_FIREBASE_API_KEY),
  authDomain: String(REACT_APP_FIREBASE_AUTH_DOMAIN),
  projectId: String(REACT_APP_FIREBASE_PROJECT_ID),
  storageBucket: String(REACT_APP_FIREBASE_STORAGE_BUCKET),
  messengerSenderId: String(REACT_APP_FIREBASE_MESSENGER_SENDER_ID),
  measurementId: String(REACT_APP_FIREBASE_MEASUREMENT_ID),
  appId: String(REACT_APP_FIREBASE_APP_ID)
};

const app = initializeApp(firebaseConfig);
const storage = getFirestore(app);
const analytics = getAnalytics(app);

export { storage, analytics, app as default };
