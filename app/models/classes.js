import mongoose from "mongoose";

const ClassesSchema = new mongoose.Schema({
  className: {
    type: String,
    required: [true, "Please enter the Class Name"],
  },
  teacherName: {
    type: String,
    required: [true, "Teacher Name"],
  },
  classinWeek: {
    type: Number,
    required: [true, "How many days Class in a week"],
  },
  images: {
    url: {
      type: String,
    },
  },
  classTime: {
    type: String,
    required: [true, "when class starts and when it ends"],
  },
  // classNumber: {
  //   type: Number,
  //   required: [true, "Please enter the Class Number"],
  // },

});

const Classes = mongoose.models.Classes || mongoose.model("Classes", ClassesSchema);

export default Classes;
