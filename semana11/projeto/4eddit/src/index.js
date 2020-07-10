import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA4koI-JgSEouDRowaxGXBifLyA49HsgMk",
    authDomain: "spotenu.firebaseapp.com",
    databaseURL: "https://spotenu.firebaseio.com",
    projectId: "spotenu",
    storageBucket: "spotenu.appspot.com",
    messagingSenderId: "137228890881",
    appId: "1:137228890881:web:daf6dc1f3fa64911b5e100"
  };

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
