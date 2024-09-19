import { GuestbookForm } from "@/features/guestbook/components/guestbook-form";
import GuestbookList from "@/features/guestbook/components/guestbook-list";
import { GetMessages } from "@/features/guestbook/queries/index.";

export default async function GuestBookPage() {
  const messages = await GetMessages();

  return (
    <div className="container flex h-full flex-col items-center justify-center gap-10 px-4 font-[family-name:var(--font-geist-mono)] md:mt-4 md:h-full">
      <h1 className="text-center text-4xl font-bold tracking-tighter">
        Guestbook
      </h1>
      <GuestbookForm />
      <GuestbookList messages={messages} />
    </div>
  );
}
