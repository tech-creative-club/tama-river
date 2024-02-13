"use client";
import { useSession } from "next-auth/react";
import AdminPage from "@/components/admin";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      {status === "authenticated" ? (
        <AdminPage />
      ): (
        // TODO: UserPageを作成して貼り付ける
        <p>ログインしてください</p>
      )}
    </main>
  );
}
