// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: 'ID800999588046'
});

const messaging = firebase.messaging();