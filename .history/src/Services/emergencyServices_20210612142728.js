import firebase from "../firebase";

const db = firebase.ref("/");

class EmergencyService {
  getAll() {
    return db;
  }
}
export default new EmergencyService();