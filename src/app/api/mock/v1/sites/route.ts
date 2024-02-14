import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const datas = [
    "https:/example.com",
    "https://www.city.tama.lg.jp/kenkofukushi/"
  ];

  const responseData = {
    datas: datas.map((data) => ({
      url: data,
    })),
  };

  return NextResponse.json(responseData);
}