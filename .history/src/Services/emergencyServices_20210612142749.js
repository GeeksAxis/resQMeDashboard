import firebase from "../firebase";

const db = firebase.ref("/all_emerg");

class EmergencyService {
  getAll() {
    return db;
  }
}
export default new EmergencyService();