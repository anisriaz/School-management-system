import { NextResponse } from "next/server";
import connectDb from "../../lib/mongodb";
import ClassesModel from "../../models/classes";



// GET endpoint for fetching all classes
export const GET = async (req, res, next) => {

  try {
    await connectDb();

    const classes = await ClassesModel.find();

    return new NextResponse(JSON.stringify(classes), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new NextResponse("Error in connection: " + err, { status: 500 });
  }
};



// POST endpoint for creating a new class
export async function POST(req) {
  try {
    await connectDb();

    const { className, teacherName, classinWeek, images, classTime } = await req.json();

    const newClass = await ClassesModel.create({
      className,
      teacherName,
      classinWeek,
      images,
      classTime
    });

    return NextResponse.json({
      msg: "Data added successfully",
      success: true,
      teacher: newClass
    });
  } catch (error) {
    console.error("Error adding data:", error);
    return NextResponse.json({
      msg: "An error occurred while adding data",
      success: false,
      error: error.message
    });
  }
}



// GET endpoint for finding a class by its ID
export const getById = async (req) => {
  try {
    await connectDb();

    const { id } = req.query; // Assuming you pass the class ID in the query string

    const foundClass = await ClassesModel.findById(id);

    if (!foundClass) {
      return new NextResponse("Class not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(foundClass), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error finding class:", error);
    return new NextResponse("An error occurred while finding the class", { status: 500 });
  }
};



