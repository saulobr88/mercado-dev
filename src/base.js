const config = {
    apiKey: "AIzaSyBYD_5eZ56PkTIVbyEPVMAIGkHa5mCOM80",
    authDomain: "mercado-dev-f078d.firebaseapp.com",
    databaseURL: "https://mercado-dev-f078d.firebaseio.com",
    projectId: "mercado-dev-f078d",
    storageBucket: "gs://mercado-dev-f078d.appspot.com",
    messagingSenderId: "512405941780"
};

const Rebase = require('re-base');
const firebase = require('firebase/app');
require('firebase/database');
require('firebase/storage');

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export const storage = app.storage();

export default base;