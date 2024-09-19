import { GuestbookForm } from "@/features/guestbook/components/guestbook-form";

export default function GuestBookPage() {
  return (
    <div className="container flex h-full flex-col items-center justify-center gap-10 px-4 font-[family-name:var(--font-geist-sans)] sm:p-20 md:h-full">
      <h1 className="text-center text-4xl font-bold tracking-tighter">
        Guestbook
      </h1>
      <GuestbookForm />
    </div>
  );
}
