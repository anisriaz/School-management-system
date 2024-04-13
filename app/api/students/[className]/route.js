import { NextResponse } from "next/server";
import connectDb from "../../../lib/mongodb";
import StudentModel from "../../../models/students";

export const GET = async (req, res) => {
  try {
    await connectDb();
    const classNameParam = req.url.split("/students/")[1];
    const className = String(classNameParam);
    const studentData = await StudentModel.findByClassName(className);

    if (!studentData || studentData.length === 0) {
      return new NextResponse("Students not found for class: " + className, { status: 404 });
    }

    const jsonResponse = JSON.stringify(studentData);

    return new NextResponse(jsonResponse, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error("Error in connection:", err);
    console.error("Error message:", err.message);

    return new NextResponse("Internal Server Error: " + err.message, {
      status: 500,
    });
  } 
};
























// import { NextResponse } from "next/server";
// import connectDb from "../../../lib/mongodb";
// import StudentModel from "../../../models/students";

// export const GET = async (req, res) => {
//   try {
//     await connectDb();
//     const classNameParam = req.url.split("/students/")[1];
//     const className = String(classNameParam);
//     const studentData = await StudentModel.find(className);

//     if (!studentData) {
//       return new NextResponse("Student not found", { status: 404 });
//     }

//     const jsonResponse = JSON.stringify(studentData);

//     // console.log("Response content:", jsonResponse);

//     return new NextResponse(jsonResponse, {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (err) {
//     console.error("Error in connection:", err);

//     console.error("Error message:", err.message);

//     return new NextResponse("Internal Server Error: " + err.message, {
//       status: 500,
//     });
//   } 
// };