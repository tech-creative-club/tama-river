import { SummaryCardProp } from "@/components/SummaryCard";
import { NextApiRequest, NextApiResponse } from "next";

async function Handler(req :NextApiRequest, res: NextApiResponse) {
  const defaultData = await (await fetch("/api/events")).json() as SummaryCardProp[];
  const filterdData = defaultData.filter((e) => e.url !== req.body.url);
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
}

export { Handler as POST };
