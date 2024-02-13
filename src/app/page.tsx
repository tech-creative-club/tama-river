"use client";
import { useSession } from "next-auth/react";
import AdminPage from "@/components/admin";
import CircularProgress from "@mui/material/CircularProgress";

function RenderComponent({status} : {status: string}){
  switch (status) {
    case "loading":
      return <CircularProgress />;
    case "authenticated":
      return <AdminPage />;
    case "unauthenticated":
      return <p>ログインしてください</p>;
    default:
      return <p>エラーが発生しました</p>;
  }
}

export default function Home() {
  const { data: session, status } = useSession();
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <RenderComponent status={status} />
    </main>
  );
}
