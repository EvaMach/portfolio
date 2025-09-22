"use server";

import { FormValues } from "@/components/ContactForm";
import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const sender = process.env.RESEND_SENDER;
const receiver = process.env.RESEND_RECEIVER;

export const send = async (formValues: FormValues) => {
  if (receiver === undefined) {
    return { error: { message: "RESEND_RECEIVER is not defined" } };
  }

  const { data, error } = await resend.emails.send({
    from: `Portfolio <${sender}>`,
    to: [receiver],
    subject: "Hi there",
    react: EmailTemplate({ formValues }) as React.ReactElement,
  });

  if (error) {
    return { error };
  }

  return { data };
};
