import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/schemas/register";
import { hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, password, confirmPass } = registerSchema.parse(body);

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists.",
        },
        {
          status: 400,
        }
      );
    }

    if (password !== confirmPass) {
      return NextResponse.json(
        {
          success: false,
          message: "Password and confirm password must be the same.",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await hash(password, 12);

    const createdUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    const user = {
      name: createdUser.name,
      email: createdUser.email,
      password: password,
    };

    return NextResponse.json(
      {
        success: true,
        user: user,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred.", message: error },
      {
        status: 500,
      }
    );
  }
}
