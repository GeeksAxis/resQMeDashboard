import firebase from "../firebase";

const db = firebase.ref("/tutorials");

class EmergencyService {
  getAll() {
    return db;
  }
