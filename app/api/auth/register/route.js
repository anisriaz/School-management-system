import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import connectDb from "../../../lib/mongodb";
// import UserModel from "../../../models/user";
import prisma from "../../../lib/prisma";




export async function POST(req) {
  try {
    const { firstName, email, roles, password } = await req.json();

    if (!firstName || !email || !roles || !password) {
      return NextResponse.json({ message: "Invalid data", requestPayload: { firstName, email, roles, password } }, { status: 422 });
    }

    await connectDb();
    const salt = await bcrypt.genSalt(10);

    const existingUser = await prisma.ADMIN.findUnique({
      where: {
        email,
      },
    })

    if (existingUser) {
      return NextResponse.json({ message: "Email already registered" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.ADMIN.create({
      data:{
      firstName: firstName,
      email: email,
      roles: roles,
      password: hashedPassword,
    }});

    return NextResponse.json({ user }, { status: 202 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}







