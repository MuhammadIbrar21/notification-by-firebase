import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';

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
const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === "granted") {
            messaging.getToken({ vapidKey: "BHnZXshypQWUKA1aJzsJcBMTwRZmmTroHYmbZD2K0zxU6MF3xAsYvsOkYQ0rJijQttKc1F4iwUmp2PFqm1R77eI" }).then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN => ", currentToken);
                } else {
                    // Show permission request.
                    console.log('No registration token available. Request permission to generate one.');
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
            });
        }
    })
}