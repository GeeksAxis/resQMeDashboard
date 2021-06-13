import firebase from "../firebase";

const db = firebase.ref("/tutorials");

class EmerService {
  getAll() {
    return db;
  }
