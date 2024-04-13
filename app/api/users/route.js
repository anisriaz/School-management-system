import { NextResponse } from "next/server";
import connectDb from "../../lib/mongodb";
import UserModel from "../../models/user";





export async function GET(req) {
    try {
      await connectDb();
  
      // Query the database to get all users
      const users = await UserModel.find();
  
      return NextResponse.json({ users }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
  }
  

// export const GET = async () => {
//   try {
//     await connectDb();
//     const users = await UserModel.find();
//     return new NextResponse(JSON.stringify(users), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (err) {
//     return new NextResponse("Error in connection: " + err, { status: 500 });
//   }
// };
