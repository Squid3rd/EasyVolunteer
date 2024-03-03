import connectMongoDB from "@/lib/mongodb";
import Topic from "../../../../models/topic";
import { NextResponse } from "next/server";

export async function POST(request: {
  json: () =>
    | PromiseLike<{
        user_img: any;
        username: any;
        first_name: any;
        last_name: any;
        email: any;
        phone: any;
        vol_hrs: any;
      }>
    | {
        user_img: any;
        username: any;
        first_name: any;
        last_name: any;
        email: any;
        phone: any;
        vol_hrs: any;
      };
}) {
  const { user_img, username, first_name, last_name, email, phone, vol_hrs } =
    await request.json();
  await connectMongoDB();
  await Topic.create({
    user_img,
    username,
    first_name,
    last_name,
    email,
    phone,
    vol_hrs,
  });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

// export async function DELETE(request: { nextUrl: { searchParams: { get: (arg0: string) => any; }; }; }) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await Topic.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }
