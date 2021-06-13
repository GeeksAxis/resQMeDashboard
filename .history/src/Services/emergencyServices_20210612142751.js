import firebase from "../firebase";

const db = firebase.ref("/all_emergenc");

class EmergencyService {
  getAll() {
    return db;
  }
}
export default new EmergencyService();