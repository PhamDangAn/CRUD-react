const  mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
{
  _id:{
    type: Number, // Id bắt đầu từ 1
    required: true
  },
  name: {
    type: String,
    required: true
  }
}
);

//Tạo model từ schema
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;