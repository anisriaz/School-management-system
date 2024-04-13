import mongoose, {Schema} from "mongoose";


const TeachersSchema = new Schema({
   
   name: {
     type: String,
     required: [true, "Please enter the name"]
   },
   qualifications: {
     type: String,
     required: [true, "Please enter the qualifications"]
   },
   age: { 
     type: Number,
     required: [true, "Please enter the age"]
   },
   gender: {
    type: String,
    enum: ['Male', 'Female'], 
    required: [true, "Please enter the gender"]
  },
  
   images: {
     url: {
       type: String
     }
   },
   createdAt: {
     type: Date,
     default: Date.now
   }
 });
 

 const Teachers = mongoose.models.Teachers || mongoose.model("Teachers", TeachersSchema);


 export default Teachers;