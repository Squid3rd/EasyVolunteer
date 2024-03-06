import { NextRequest, NextResponse } from "next/server";
import register from "./function/register";
import { Prisma } from "@prisma/client";

export const POST = async (request:NextRequest)=>{
    console.log(`---------- ต้องการสร้าง user 🔨 ---------`)

    try {
        const body = await request.json();
        const update = await register(body)
        return NextResponse.json({ message: "ทำการสร้าง user สำเร็จ", data: update })
    } catch (error) {
        console.log(error);
        let message = "เกิดปัญหาที่ไม่ทราบสาเหตุ"
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // Error handling for prisma CRUD error
            if (error.code === 'P2002') message = "มี email ซ้ำกัน"
        } else {
            // Error handling for other errors
            if (error instanceof Object && !(error instanceof Error)) message = JSON.stringify(error)
            if (error instanceof Error) message = error.message
            if (typeof error == "string") message = error
        }

        return NextResponse.json({ message }, { status: 400 })
    }

}