"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { send } from "@/lib/email";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

const formSchema = z.object({
  name: z.string().min(5, {
    message: "Please enter your name of at least 5 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  message: z.string().min(10, {
    message: "Please enter a message of at least 10 characters",
  })
});

const ContactForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    try {
      send(values);
      form.reset();
      toast("Thank you for reaching out! 🤩 I will get back to you as soon as possible.", {
        position: "bottom-center",
      });
    } catch (error) {
      toast("Something went wrong. Please try again.", {
        style: { backgroundColor: 'var(--destructive)', color: 'white' },
        position: "bottom-center",
      });
      console.error(error);
    }
  };


  return (
    <Card className="w-full md:w-1/2">
      <CardHeader>
        <CardTitle>Get in touch👋</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full :w-1/2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
