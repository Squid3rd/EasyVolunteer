import { NextRequest, NextResponse } from "next/server"
import { getUser } from "./func/getUser"

export const GET = async (request: NextRequest) => {
    const url = new URL(request.url)
    const email = url.searchParams.get("email")
    try {
        if(!email){
            return NextResponse.json({ message: "แนบ param มาด้วย 🥹" }, { status: 403 })
        }
     

        if (email) {
            const user = await getUser(email);
            return NextResponse.json({ message: `รายชื่อผู้ใช้งาน ${email}`, data: user })
        }

    } catch (error) {
        let message = "เกิดปัญหาที่ไม่ทราบสาเหตุ"
        if (error instanceof Object && !(error instanceof Error)) message = JSON.stringify(error);
        if (error instanceof Error) message = error.message
        if (typeof error == "string") message = error
        return NextResponse.json({ message }, { status: 400 })
    }
}
