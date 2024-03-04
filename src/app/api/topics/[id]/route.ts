import connectMongoDB from "@/lib/mongodb";
import Topic from "../../../../../models/topic";
import { NextResponse } from "next/server";

export async function PUT(request: { json: () => PromiseLike<{ newFirst: any; newLast: any; newPhone: any; }> | { newFirst: any; newLast: any; newPhone: any; }; }, { params }: any) {
  const { id } = params;
  const { newFirst: first_name, newLast: last_name, newPhone: phone } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { first_name, last_name, phone });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request: any, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}