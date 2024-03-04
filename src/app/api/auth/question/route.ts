import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<any> {
  const data = request.formData();
  const answer_1 = (await data).get("answer_1");
  const answer_2 = (await data).get("answer_2");
  const answer_3 = (await data).get("answer_3");
  const answer_4 = (await data).get("answer_4");
  try {

    let answerData = {
      answer_1: answer_1,
      answer_2: answer_2,
      answer_3: answer_3,
      answer_4: answer_4,
    };

    console.log("userData:", answerData);
    return NextResponse.json({
      answerData: answerData,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}