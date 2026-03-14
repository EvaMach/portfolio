"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { send } from "@/lib/email";
import { useState } from "react";

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

const fieldStyle = {
  background: "transparent",
  borderBottom: "2px solid var(--border-subtle)",
  color: "var(--text-primary)",
  outline: "none",
  width: "100%",
  padding: "0.5rem 0",
  fontSize: "0.95rem",
  transition: "border-color 0.2s",
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

  const fields = [
    { name: "name" as const, label: "Your name", type: "text" },
    { name: "email" as const, label: "Email address", type: "email" },
  ];

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-7"
      noValidate
    >
      {fields.map(({ name, label, type }) => (
        <div key={name}>
          <label
            htmlFor={name}
            className="block text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            {label}
          </label>
          <input
            id={name}
            type={type}
            {...form.register(name)}
            style={{
              ...fieldStyle,
              borderBottomColor:
                focusedField === name
                  ? "var(--accent-primary)"
                  : form.formState.errors[name]
                  ? "var(--destructive)"
                  : "var(--border-subtle)",
            }}
            onFocus={() => setFocusedField(name)}
            onBlur={() => setFocusedField(null)}
            aria-describedby={`${name}-error`}
            aria-invalid={!!form.formState.errors[name]}
          />
          {form.formState.errors[name] && (
            <p
              id={`${name}-error`}
              className="mt-1.5 text-xs"
              style={{ color: "var(--destructive)" }}
            >
              {form.formState.errors[name]?.message}
            </p>
          )}
        </div>
      ))}

      {/* Textarea */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: "var(--text-secondary)" }}
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...form.register("message")}
          style={{
            ...fieldStyle,
            resize: "none",
            borderBottomColor:
              focusedField === "message"
                ? "var(--accent-primary)"
                : form.formState.errors.message
                ? "var(--destructive)"
                : "var(--border-subtle)",
          }}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          aria-describedby="message-error"
          aria-invalid={!!form.formState.errors.message}
        />
        {form.formState.errors.message && (
          <p
            id="message-error"
            className="mt-1.5 text-xs"
            style={{ color: "var(--destructive)" }}
          >
            {form.formState.errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="self-start px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.03] disabled:opacity-60 disabled:cursor-not-allowed"
        style={{
          background: "var(--accent-primary)",
          color: "var(--bg-primary)",
          boxShadow:
            "0 0 20px color-mix(in srgb, var(--accent-primary) 25%, transparent)",
        }}
      >
        {form.formState.isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
