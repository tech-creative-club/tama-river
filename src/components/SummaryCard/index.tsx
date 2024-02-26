"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/Label";
import SampleImage from "@/components/assets/park.jpg";
import { NoImage } from "./NoImage";
import { Card } from "@mui/material";

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
//TODO: 現状、デスクトップ版とモバイル版でコンポーネントを分けているが、これだと2回ロードが走るため、非効率
// TODO: DesktopでComponent分けるのバグの温床なのでなんとか考える(SOLID原則のOCP違反)
// TODO: Desktopの場合はカードのようにして表示したい。
export function SummaryCard(props: SummaryCardProps) {
  const { prop, loading } = props;
  const formattedDate = prop.date;
  return (
    <Card className="relative w-full p-5">
      <a href={prop.url} target="_blank">
        {loading ? (
          <div className="relative m-1 h-20 w-28 overflow-hidden rounded bg-zinc-200"></div>
        ) : prop.image_url ? (
          <Image
            src={SampleImage.src}
            width={200}
            height={200}
            alt="photos"
            className="relative m-1 h-20 w-28 overflow-hidden rounded"
          />
        ) : (
          <NoImage />
        )}
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
      </a>
    </Card>
  );
}
