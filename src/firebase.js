import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwbKb9PL30vXbi-4ix_tj0hnbl5XRQCeo",
  authDomain: "active-2021-demo.firebaseapp.com",
  projectId: "active-2021-demo",
  storageBucket: "active-2021-demo.appspot.com",
  messagingSenderId: "929309686326",
  appId: "1:929309686326:web:79505f7f6ae6a307757697",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getData = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("control-panel")
      .doc("master")
      .onSnapshot((snapshot) => {
        resolve(snapshot.data());
      }, reject);
  });
};
