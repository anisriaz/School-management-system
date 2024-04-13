import { NextResponse } from "next/server";
import connectDb from "../../../lib/mongodb";
import ClassesModel from "../../../models/classes";

export const GET = async (req, res) => {
  try {
    await connectDb();
    const id = req.url.split("/classes/")[1];

    const classData = await ClassesModel.findById(id);

    if (!classData) {
      return new NextResponse("Class not found", { status: 404 });
    }

    const jsonResponse = JSON.stringify(classData);

    // console.log("Response content:", jsonResponse);

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

