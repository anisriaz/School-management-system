import { NextResponse } from "next/server";
import connectDb from "../../lib/mongodb";
import Teachers from "../../models/teachers"; 



// get api request

export const GET = async () => {
  try {
    await connectDb(); 

   
    const teachers = await Teachers.find();

  
    return new NextResponse(JSON.stringify(teachers), { status: 200 });
  } catch (err) {
    return new NextResponse("Error in connection: " + err, { status: 500 });
  }
};




//post api request

export async function POST(req) {
  try {
    await connectDb();

    const { name, qualifications, age, images, gender } = await req.json();
    const createdAt = new Date();

    const newTeacher = await Teachers.create({
      name,
      qualifications,
      age,
      images,
      gender,
      createdAt
    });

    return NextResponse.json({
      msg: "Data added successfully",
      success: true,
      teacher: newTeacher
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


