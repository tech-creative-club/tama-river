import { SummaryCardProp } from "@/components/SummaryCard";

export const runtime = "edge";

export interface DeleteEventPostData {
  url: string;
}
async function Handler(request: Request) {
  const req = (await request.json()) as DeleteEventPostData;
  const deleteTarget = req.url;
  const defaultData = (await (
    await fetch("/api/events")
  ).json()) as SummaryCardProp[];
  const filterdData = defaultData.filter((e) => e.url !== deleteTarget);
  const response = await fetch(
    "https://tama-river-workers.suguru-toyohara.workers.dev/api/events/post",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.POST_TOKEN ?? "",
      },
      body: JSON.stringify({
        FQDN: "www.city.chofu.lg.jp",
        data: filterdData,
      }),
    },
  );
  return response;
}

// async function Handler(req : NextApiRequest & DeleteEventPostData, res: NextApiResponse) {
//   const deleteTarget = req.url;
//   const defaultData = await (await fetch("/api/events")).json() as SummaryCardProp[];
//   const filterdData = defaultData.filter((e) => e.url !== deleteTarget);
//   const response = await fetch(
//     "https://tama-river-workers.suguru-toyohara.workers.dev/api/events/post",
//     {
//       method: "POST",
//       mode: "cors",
//       cache: "no-cache",
//       headers: {
//         "Content-Type": "application/json",
//         "X-API-KEY": process.env.POST_TOKEN ?? "",
//       },
//       body: JSON.stringify({
//         FQDN: "www.city.chofu.lg.jp",
//         data: filterdData,
//       }),
//     },
//   );
// }

export { Handler as POST };
