import firebase from "../firebase";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth();

export const logout = () => {
  return firebase.auth().signOut();
};

export const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signUp = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const getFirebaseIdToken = () => {
  return firebase.auth().currentUser.getIdToken(false);
};
