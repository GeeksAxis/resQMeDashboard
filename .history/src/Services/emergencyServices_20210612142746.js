import firebase from "../firebase";

const db = firebase.ref("/all_");

class EmergencyService {
  getAll() {
    return db;
  }
}
export default new EmergencyService();