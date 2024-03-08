import { NextRequest, NextResponse } from "next/server";
import created from "./func/created";
import { getVolunteer } from "./func/getVolunteer";
import { Prisma } from "@prisma/client";

export const POST = async (request: NextRequest) => {
  console.log(`---------- route สมัคร🔨 ---------`);
  try {
    const body = await request.json();
    console.log(`---------- ข้อมูลในการสร้าง  🔨 ---------`);
    console.log(body);
    const create = await created(body);
    return NextResponse.json({
      message: "ทำการสมัครเรียบร้อยแล้ว",
      data: create,
    });
  } catch (error) {
    console.log(error);
    let message = "เกิดปัญหาที่ไม่ทราบสาเหตุ";
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Error handling for prisma CRUD error
      if (error.code === "P2002") message = "มี email ซ้ำกัน";
    } else {
      // Error handling for other errors
      if (error instanceof Object && !(error instanceof Error))
        message = JSON.stringify(error);
      if (error instanceof Error) message = error.message;
      if (typeof error == "string") message = error;
    }

    return NextResponse.json(message, { status: 400 });
  }
};

export const GET = async (request: NextRequest) => {
  try {
    const volunteer = await getVolunteer();
    return NextResponse.json({ message: `get ไปเรียบร้อย`, data: volunteer });
  } catch (error) {
    let message = "เกิดปัญหาที่ไม่ทราบสาเหตุ";
    if (error instanceof Object && !(error instanceof Error))
      message = JSON.stringify(error);
    if (error instanceof Error) message = error.message;
    if (typeof error == "string") message = error;
    return NextResponse.json({ message }, { status: 400 });
  }
};
