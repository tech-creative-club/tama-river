"use client";

import { Label } from "@/components/Label";
import { Card } from "@mui/material";
import { Button } from "@mui/material";

export type SummaryCardProp = {
  title: string;
  sport: string[];
  tags: { name: string }[];
  date: string;
  url: string;
  image_url?: string;
  isFavorite?: boolean;
  location: {
    name: string;
    address: string;
    capacity: number | string;
  };
};

interface SummaryCardProps {
  prop: SummaryCardProp;
  loading?: boolean;
  desktop?: boolean;
}

export function ListCard(props: SummaryCardProps) {
  const { prop, loading } = props;
  const formattedDate = prop.date;
  return (
    <Card className="relative w-full p-5 m-2">
      <div className="flex justify-between">
        <div className="flex flex-col">
          {loading ? (
            <div className="h-6 w-full animate-pulse rounded bg-zinc-200"></div>
          ) : (
            <Label variant="large">{prop.title}</Label>
          )}

          {loading ? (
            <div className="h-6 w-9/12 animate-pulse rounded bg-zinc-200"></div>
          ) : (
            <Label variant="small">{formattedDate + "更新"}</Label>
          )}
        </div>
        <div className="flex">
          <Button
            variant="contained"
            className="bg-red-500"
            color="error"
            onClick={() => {
              console.log("deleted");
            }}
          >
            削除
          </Button>
        </div>
      </div>
    </Card>
  );
}
