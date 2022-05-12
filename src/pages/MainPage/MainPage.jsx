import React from 'react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { TextField } from '@mui/material';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3j062E0hCdkBqMZahzXxy0TvTaF1LgwA",
  authDomain: "testapp-c4717.firebaseapp.com",
  projectId: "testapp-c4717",
  storageBucket: "testapp-c4717.appspot.com",
  messagingSenderId: "526971112401",
  appId: "1:526971112401:web:93700a39467347cff4eef0",
  measurementId: "G-N66YZJX36N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function MainPage() {
  return (
    <main>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </main>
  )
}
