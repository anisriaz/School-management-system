import { NextResponse } from "next/server";
import connectDb from "../../lib/mongodb";
import StudentModel from "../../models/students";





export const GET = async () => {
  try {
    await connectDb(); 

   
    const StudentData = await StudentModel.find();

    return new NextResponse(JSON.stringify(StudentData), { 
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }, });
  } catch (err) {
    return new NextResponse("Error in connection: " + err, { status: 500 });
  }
};




//post api request

export async function POST(req) {
  try {
    await connectDb();

    const { name, fatherName, className, rollNumber, section,  images } = await req.json();
   

    const newStudent = await StudentModel.create({
        name,
        fatherName,
        className,
        section,
        rollNumber,
        images,
    });

    return NextResponse.json({
      msg: "Data added successfully",
      success: true,
      student: newStudent
    });
  } catch (error) {
    console.error("Error adding data:", error);
    return NextResponse.json({
      msg: "An error occurred while adding data",
      success: false,
      error: error.message
    });
  }
};





export async function DELETE(req) {
  try {
    await connectDb();

    // Extract the student ID from the request query parameters
    const { id } = req.query;

    // Check if the ID is provided
    if (!id) {
      return new NextResponse("Student ID is required", { status: 400 });
    }

    // Find the student by ID and delete it
    const deletedStudent = await StudentModel.findByIdAndDelete(id);

    if (!deletedStudent) {
      return new NextResponse("Student not found", { status: 404 });
    }

    return new NextResponse("Student deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting student:", error);
    return new NextResponse("An error occurred while deleting the student", { status: 500 });
  }
}



