import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// importScripts('/__/firebase/9.22.1/firebase-app-compat.js');
// importScripts('/__/firebase/9.22.1/firebase-messaging-compat.js');
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// // eslint-disable-next-line no-undef
// importScripts("https://www.gstatic.com/firebasejs/9.6.8/firebase-messaging.js");

//new try

// importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging.js");


const firebaseConfig = {
  apiKey: "AIzaSyD5bZOw0xCQkzePn4VYqIKdji9xY46i0l8",
  authDomain: "notification-app-3db3a.firebaseapp.com",
  projectId: "notification-app-3db3a",
  storageBucket: "notification-app-3db3a.appspot.com",
  messagingSenderId: "999665172504",
  appId: "1:999665172504:web:65d84449133a8bcd63036d",
  measurementId: "G-GQ69FQ4YYS"
};
firebase.initializeApp(firebaseConfig);
firebase.messaging();