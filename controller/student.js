const Student = require("../models/student");
const mongoose = require("mongoose");


function create(req, res, next) {
  let studentName = req.body.studentName;
  let studentEmail = req.body.studentEmail;
  let studentMobile = req.body.studentMobile;
  let student = new Student({
    studentName,
    studentEmail,
    studentMobile,
  });
  student.save().then((data) => {
    res.send(data);
  });
}


function view(req, res, next) {
  Student.find({}).then((data) => {
    res.send(data);
  });
}
module.exports.create = create;
module.exports.view = view;