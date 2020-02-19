importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-messaging.js');



var firebaseConfig = {
  apiKey: "AIzaSyBDy3uTuKwfQs5GFEwoFf-kFPWzIYToDjQ",
  authDomain: "buy-mask.firebaseapp.com",
  databaseURL: "https://buy-mask.firebaseio.com",
  projectId: "buy-mask",
  storageBucket: "buy-mask.appspot.com",
  messagingSenderId: "859014674756",
  appId: "1:859014674756:web:a81e27d9a77b24a3133f11",
  measurementId: "G-GKWHK64Y79"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Background Message Handler
messaging.setBackgroundMessageHandler(function(payload) {
  // Customize notification here
  var notification = payload.notification
  var notificationTitle = notification.title;
  var notificationOptions = {
    body: notification.body,
    icon: 'https://zijie-li.github.io/buy-mask/img/icons/android-chrome-192x192.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});