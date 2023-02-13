const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentEmail: {
    type: String,
    required: true,
  },
  studentMobile: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Student", studentSchema);