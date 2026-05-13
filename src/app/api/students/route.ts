import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { name, email, university, year } = await req.json();

    if (!name || !email || !university) {
      return NextResponse.json(
        { error: "氏名、メールアドレス、大学名は必須です。" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "有効なメールアドレスを入力してください。" },
        { status: 400 }
      );
    }

    const student = await prisma.student.create({
      data: { name, email, university, year: year || null },
    });

    return NextResponse.json({ success: true, id: student.id }, { status: 201 });
  } catch (error: unknown) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "このメールアドレスは既に登録されています。" },
        { status: 409 }
      );
    }
    console.error("Student creation error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}
