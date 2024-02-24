import { Notification } from "@/components/Notification";

export default function AddArticles() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <div className="w-full max-w-7xl p-5 pb-0">
        <Notification
          title="使い方ヘルプ"
          text="ここで記事の追加ができます。page URLを入力すると追加できます。"
          notificationType="info"
        />
      </div>
    </div>
  );
}
