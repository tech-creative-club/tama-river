import { Notification } from "@/components/Notification";

export default function AddArticles() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <div className="w-full max-w-7xl p-5 pb-0">
        <Notification
          title="使い方ヘルプ"
          text="ここで記事の削除ができます。削除ボタンを押すと削除できます。"
          notificationType="info"
        />
      </div>
    </div>
  );
}
