"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { send } from "@/lib/email";
import { useState } from "react";
import FormField from "./ui/formField";

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

const formSchema = z.object({
  name: z.string().min(5, {
    message: "Please enter your name (at least 5 characters)",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  message: z.string().min(10, {
    message: "Please enter a message (at least 10 characters)",
  }),
});

const baseFieldStyle = {
  background: "transparent",
  borderBottom: "2px solid var(--border-subtle)",
  color: "var(--text-primary)",
  outline: "none",
  width: "100%",
  padding: "0.5rem 0",
  fontSize: "0.95rem",
  transition: "border-color 0.2s",
};

const getFieldBorderColor = (
  fieldName: string,
  focusedField: string | null,
  hasError: boolean
) => {
  if (focusedField === fieldName) return "var(--accent-primary)";
  if (hasError) return "var(--destructive)";
  return "var(--border-subtle)";
};

const ContactForm = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const response = await send(values);
      if (response && "error" in response) {
        throw new Error(response.error?.message || "Failed to send email");
      }
      form.reset();
      toast(
        "Thank you for reaching out! I will get back to you as soon as possible.",
        { position: "bottom-center" }
      );
    } catch (error) {
      toast("Something went wrong. Please try again.", {
        style: { backgroundColor: "var(--destructive)", color: "white" },
        position: "bottom-center",
      });
      console.error(error);
    }
  };

  const textFields = [
    { name: "name" as const, label: "Your name", type: "text" },
    { name: "email" as const, label: "Email address", type: "email" },
  ];

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-7"
      noValidate
    >
      {textFields.map(({ name, label, type }) => (
        <FormField
          key={name}
          id={name}
          label={label}
          error={form.formState.errors[name]}
        >
          <input
            id={name}
            type={type}
            {...form.register(name)}
            style={{
              ...baseFieldStyle,
              borderBottomColor: getFieldBorderColor(
                name,
                focusedField,
                !!form.formState.errors[name]
              ),
            }}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            aria-describedby={`${name}-error`}
            aria-invalid={!!form.formState.errors[name]}
          />
        </FormField>
      ))}

      <FormField
        id="message"
        label="Message"
        error={form.formState.errors.message}
      >
        <textarea
          id="message"
          rows={4}
          {...form.register("message")}
          style={{
            ...baseFieldStyle,
            resize: "none",
            borderBottomColor: getFieldBorderColor(
              "message",
              focusedField,
              !!form.formState.errors.message
            ),
          }}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          aria-describedby="message-error"
          aria-invalid={!!form.formState.errors.message}
        />
      </FormField>

      <button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="self-start px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.03] disabled:opacity-60 disabled:cursor-not-allowed bg-accent-primary text-bg-primary"
        style={{
          boxShadow:
            "0 0 20px color-mix(in srgb, var(--accent-primary) 25%, transparent)",
        }}
      >
        {form.formState.isSubmitting ? "Sending\u2026" : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
