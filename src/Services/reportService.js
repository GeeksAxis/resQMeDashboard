import firebase from "../firebase";

const db = firebase.ref("/user_reported_locations");

class ReportService {
  getAll() {
    return db;
  }
}
export default new ReportService();
