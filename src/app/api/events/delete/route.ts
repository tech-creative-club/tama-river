import { SummaryCardProp } from "@/components/SummaryCard";
import { GET as getAllData } from "@/app/api/events/route";

export const runtime = "edge";

export interface DeleteEventPostData {
  url: string;
}
async function Handler(request: Request) {
  const req = (await request.json()) as DeleteEventPostData;
  const deleteTarget = req.url;
  const defaultData = (await (await getAllData()).json()) as SummaryCardProp[];
  const filterdData = defaultData.filter((e) => e.url !== deleteTarget);
  filterdData.forEach((e) => {console.log(e.url)});
  const response = await fetch(
    "https://tama-river-workers.suguru-toyohara.workers.dev/api/items/post",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "X-API-TOKEN": process.env.POST_TOKEN ?? "",
      },
      body: JSON.stringify({
        FQDN: "www.city.chofu.lg.jp",
        data: filterdData,
      }),
    },
  );
  if (response.status !== 200) {
    return new Response("Failed", { status: 500 });
  }else{
    return new Response("Success", { status: 200 });
  }
}

export { Handler as POST };
