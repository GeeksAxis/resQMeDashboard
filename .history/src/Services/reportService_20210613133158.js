import firebase from "../firebase";

const db = firebase.ref("/all_emergencies");

class ReportService {
  getAll() {
    return db;
  }
}
export default new ReportService();