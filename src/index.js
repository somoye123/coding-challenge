import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAG6hJRlIA7ZNZmCNTUtquZoP-m5AEpjU",
  authDomain: "mealimeterinterview.firebaseapp.com",
  databaseURL: "https://mealimeterinterview.firebaseio.com",
  projectId: "mealimeterinterview",
  storageBucket: "mealimeterinterview.appspot.com",
  messagingSenderId: "344408098097",
  appId: "1:344408098097:web:6f37f9a0531ae811d65c10",
  measurementId: "G-PWE9GQF5PY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
