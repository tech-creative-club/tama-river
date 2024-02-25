"use client";
import React, { useEffect, useState } from "react";
import { SummaryCardProp, SummaryCard } from "@/components/SummaryCard";
import { TagButton } from "@/components/TagButton";
import { Notification } from "@/components/Notification";
import { ListCard } from "@/components/ListCard";

type DeviceType = "mobile" | "desktop";

interface RenderComponentProps {
  summaryCardJSON: SummaryCardProp[];
  Loading: boolean;
  tags: string[];
  selectedTag: string;
  setTag: (tagStr: string) => void;
  device: DeviceType;
}

const deviceType = {
  mobile: "mobile",
  desktop: "desktop",
};

const dictSort = (a: SummaryCardProp, b: SummaryCardProp) => {
  return a.date < b.date ? 1 : -1;
};

function RenderComponent(props: RenderComponentProps) {
  const { summaryCardJSON, Loading, tags, selectedTag, setTag } = props;
  return (
    <>
      <div className="w-full max-w-7xl p-5 pb-0">
        <TagButton
          tags={tags}
          selectedTag={selectedTag}
          onClick={(str) => setTag(str)}
          variant="normal"
        />
      </div>
      <div className="flex flex-col h-fit w-full max-w-7xl">
        {summaryCardJSON.sort(dictSort).map((prop, index) => {
          if (selectedTag === "すべて" || prop.tags[0].name === selectedTag) {
            return <ListCard prop={prop} key={index} loading={Loading} />;
          }
        })}
      </div>
    </>
  );
}

export default function DeleteArticles() {
  const [summaryCardJSON, setSummaryCardJSON] = useState<SummaryCardProp[]>([]);
  const [Loading, setLoading] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setTag] = useState<string>("すべて");

  useEffect(() => {
    async function fetchData() {
      const response = (await (
        await fetch("/api/events")
      ).json()) as SummaryCardProp[];
      setSummaryCardJSON(response);
      const Tags: string[] = response
        .map((e) => {
          return e.tags;
        })
        .flat()
        .map((e) => {
          return e.name;
        });
      const uniqueTags = Array.from(new Set(Tags).values());
      setTags(["すべて", ...uniqueTags]);
    }

    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const props = { summaryCardJSON, Loading, tags, selectedTag, setTag };

  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <div className="w-full max-w-7xl p-5 pb-0">
        <Notification
          title="使い方ヘルプ"
          text="ここで記事の削除ができます。削除ボタンを押すと削除できます。"
          notificationType="info"
        />
      </div>
      <div className="flex size-full flex-col items-center">
        <RenderComponent device="desktop" {...props} />
      </div>
    </div>
  );
}
