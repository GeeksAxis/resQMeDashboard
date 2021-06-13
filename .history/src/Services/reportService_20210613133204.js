import firebase from "../firebase";

const db = firebase.ref("/");

class ReportService {
  getAll() {
    return db;
  }
}
export default new ReportService();