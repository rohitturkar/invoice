import { NextRequest, NextResponse } from "next/server";
import { signupSchema } from "@/validation/auth";
import User from "@/model/user";
import connectDB from "@/services/db";

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    const body = await request.json();
    const { error } = signupSchema.validate(body);
    if (error)
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );

    const { name, email, password } = body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );

    // Create and save the new user
    const user = new User({ name, email, password });
    await user.save();

    return NextResponse.json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
