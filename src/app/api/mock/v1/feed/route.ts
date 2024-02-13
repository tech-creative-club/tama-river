// URL一覧とSummaryCardを定義
export const runtime = "edge";
import SummaryCard from "@/types/SummaryCardType";
import { nanoid } from "nanoid";

/**
 * @params URL一覧とSummaryCardの型を定義
 * @author CYUVi suguru-toyohara minagishl
 * @date 2024-02-10
 * @description mokcデータを返す
 */

type Names = [string, string, Tag];
type Tag = "身体障害" | "発達障害" | "視覚・聴覚障害" | "知的障害" | "精神障害";

function randomSport() {
  const names = [
    ["地域づくりサッカー", "soccer", "身体障害"],
    ["野球の試合", "baseball", "発達障害"],
    ["ソフトボール大会", "softball", "視覚・聴覚障害"],
    ["みんなでボッチャ！", "boccia", "知的障害"],
  ] as Names[];
  return names[Math.floor(Math.random() * names.length)];
}

function randomItems() {
  const maxItemCount = 10;
  const randomItemCount = Math.floor(Math.random() * maxItemCount) + 4;
  return Array.from({ length: randomItemCount }, () => {
    const [name, sport, tag] = randomSport();
    return {
      id: nanoid(8),
      name: name,
      sport: [sport],
      tag: [{ name: tag }],
      date: "2024-01-01T00:00:00Z",
      url: "https://example.com",
      image: "https://source.unsplash.com/700x500?park",
      location: {
        name: "〇〇広場",
        address: "住所",
        capacity: "100",
      },
    } as SummaryCard;
  });
}

async function Handler() {
  const content = randomItems();
  return Response.json(content);
}

export { Handler as GET };
