"use server";

import { FormValues } from "@/components/ContactForm";
import EmailTemplate from "@/components/EmailTemplate";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export const send = async (formValues: FormValues) => {
  console.log(EmailTemplate());
  const { data, error } = await resend.emails.send({

    from: `Eva Machová <onboarding@resend.dev>`,
    to: [formValues.email],
    subject: 'Hi there',
    react: React.createElement(EmailTemplate),
  });

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json(data);
};