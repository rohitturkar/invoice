import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "@/app/validation/auth";
import User from "@/app/model/user";
import connectDB from "@/app/services/db";
import { generateToken } from "@/app/utils/jwtUtils";

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    const body = await request.json();
    const { error } = loginSchema.validate(body);
    if (error)
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );

    const { email, password } = body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );

    // Generate JWT token
    const token = generateToken({ id: user._id, email: user.email });

    return NextResponse.json({ success: true, token });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
