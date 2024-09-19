"use client";

import { SubmitButton } from "@/components/shared/submit-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";

import { GuestbookSchema } from "../models";
import { createGuestbookEntry } from "../queries/actions";

export function GuestbookForm() {
  const [lastResult, action] = useFormState(createGuestbookEntry, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: GuestbookSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <>
      <div className="w-full md:w-1/2">
        <Card>
          <CardHeader>
            <p className="text-7xl font-medium tracking-tighter">
              Leave a kawai msg!
            </p>
          </CardHeader>
          <CardContent>
            <form
              className="grid gap-6"
              action={action}
              onSubmit={form.onSubmit}
              id={form.id}
            >
              <div className="grid gap-2">
                <Label>Username</Label>
                <Input
                  type="username"
                  placeholder="Your Username"
                  name={fields.username.name}
                  defaultValue={fields.username.initialValue}
                  key={fields.username.key}
                />
                <p className="text-sm font-medium text-red-700">
                  {fields.username.errors}
                </p>
              </div>
              <div className="grid gap-2">
                <Label>Message</Label>
                <Input
                  type="text"
                  placeholder="Your name"
                  name={fields.message.name}
                  defaultValue={fields.message.initialValue}
                  key={fields.message.key}
                />
                <p className="text-sm font-medium text-red-700">
                  {fields.message.errors}
                </p>
              </div>
              <SubmitButton text="Send!" />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
