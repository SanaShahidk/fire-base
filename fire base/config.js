import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyD2lMgFpdkKmyS3BedsEkPnZGGNo1008Wo",
    authDomain: "form-9cc0d.firebaseapp.com",
    projectId: "form-9cc0d",
    storageBucket: "form-9cc0d.appspot.com",
    messagingSenderId: "630378344328",
    appId: "1:630378344328:web:3e53c6c72fff092f68143d",
    measurementId: "G-M6T8CQ2F9P"
  };


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
