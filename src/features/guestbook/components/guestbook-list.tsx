import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Messages } from "@/db/schema";
import Image from "next/image";

export default function GuestbookList({ messages }: { messages: Messages[] }) {
  return (
    <div className="flex w-full flex-col gap-4 md:w-1/2">
      {messages.map((message) => (
        <Card key={message.id} className="w-full">
          <CardHeader className="flex flex-row justify-between">
            <div className="flex items-center gap-x-2">
              <Image
                src={`https://avatar.vercel.sh/${message.userName}`}
                alt="pfp"
                width={30}
                height={30}
                className="rounded-full"
              />
              <p className="text-sm font-medium tracking-tighter text-zinc-600">
                {message.userName}
              </p>
            </div>
            <p className="text-xs font-normal text-zinc-200">
              {new Intl.DateTimeFormat("en-IN", {
                dateStyle: "medium",
              }).format(message.createdAt)}
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-base font-medium text-zinc-900">
              {message.message}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
