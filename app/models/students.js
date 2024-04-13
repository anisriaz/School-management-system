import mongoose from "mongoose";

// Define a sub-schema for the 'images' field
const imageSchema = new mongoose.Schema({
  url: {
    type: String,
  },
});

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the Name"],
  },
  fatherName: {
    type: String,
    required: [true, "Please enter the Father Name"],
  },
  className: {
    type: String,
    required: [true, "Please enter the ClassName"],
  },
  section: {
    type: String,
    required: [true, "Please enter the Section"],
  },
  rollNumber: {
    type: Number,
    required: [true, "Please enter the Roll Number"],
  },
  images: imageSchema, // Use the sub-schema for 'images'
});

StudentSchema.statics.findByClassName = async function (className) {
  return this.find({ className });
};

const Students = mongoose.models.Students || mongoose.model("Students", StudentSchema);

export default Students;



