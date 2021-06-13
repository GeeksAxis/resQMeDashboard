import firebase from "../firebase";

const db = firebase.ref("/tutorials");

class TutorialDataService {
  getAll() {
    return db;
  }
