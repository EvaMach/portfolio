"use server";

import { z } from "zod";
import { FormValues } from "@/components/ContactForm";
import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const sender = process.env.RESEND_SENDER;
const receiver = process.env.RESEND_RECEIVER;

const formSchema = z.object({
  name: z.string().min(5).max(200),
  email: z.string().email().max(254),
  message: z.string().min(10).max(5000),
});

export const send = async (formValues: FormValues) => {
  if (receiver === undefined) {
    return { error: { message: "RESEND_RECEIVER is not defined" } };
  }

  const parsed = formSchema.safeParse(formValues);
  if (!parsed.success) {
    return { error: { message: "Invalid form data" } };
  }

  const { data, error } = await resend.emails.send({
    from: `Portfolio <${sender}>`,
    to: [receiver],
    subject: "Hi there",
    react: EmailTemplate({ formValues: parsed.data }) as React.ReactElement,
  });

  if (error) {
    return { error };
  }

  return { data };
};
