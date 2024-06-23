importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBvWL-xwvyYa5l8HJMEAcMcI14IhJ5Zm7k",
  authDomain: "mundo-paddock-f1-c20f1.firebaseapp.com",
  projectId: "mundo-paddock-f1-c20f1",
  storageBucket: "mundo-paddock-f1-c20f1.appspot.com",
  messagingSenderId: "680829563492",
  appId: "1:680829563492:web:81eb3c5ee2c2c9cdc36571",
  measurementId: "G-XEMMWHHV5S"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
