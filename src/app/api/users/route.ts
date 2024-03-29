import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isLogin } from "@/lib/utils";
import { userCreationSchema } from "@/schemas/user";
import { hash } from "bcrypt";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { name, email, password } = userCreationSchema.parse(body);

    const hashedPassword = await hash(password!, 12);

    const createdUser = await prisma.user.create({
      data: {
        name: name!,
        email: email!,
        password: hashedPassword,
      },
    });

    const user = {
      name: createdUser.name,
      email: createdUser.email,
      password: hashedPassword,
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

export async function GET(req: NextRequest) {
  if (!isLogin(req)) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(
      {
        users,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error getting users:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    await prisma.user.delete({
      where: {
        id: Number(userId),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "User deleted.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      {
        status: 500,
      }
    );
  }
}
