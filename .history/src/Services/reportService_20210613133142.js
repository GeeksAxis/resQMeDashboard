import firebase from "../firebase";

const db = firebase.ref("/all_emergencies");

class EmergencyService {
  getAll() {
    return db;
  }
}
export default new EmergencyService();