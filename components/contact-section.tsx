"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    const response = await fetch("https://formspree.io/f/mldbyrzw", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    });

    if (response.ok) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 bg-accent/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight mb-3 transition-all duration-1000 ease-out",
              inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            )}
          >
            Get In Touch
          </h2>
          <div
            className={cn(
              "h-1 w-20 bg-primary rounded-full mx-auto mb-6 transition-all duration-1000 delay-100 ease-out",
              inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            )}
          ></div>
          <p
            className={cn(
              "text-muted-foreground transition-all duration-1000 delay-200 ease-out",
              inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            )}
          >
            Have a project in mind or just want to say hello? Feel free to reach
            out to me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            className={cn(
              "lg:col-span-1 space-y-6 transition-all duration-1000 delay-300 ease-out",
              inView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            )}
          >
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">Lagos Nigeria, NG</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">ijehekene404@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    +234 916-193-9682
                    <br />
                    +234 90-900-96365
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div
            className={cn(
              "lg:col-span-2 transition-all duration-1000 delay-500 ease-out",
              inView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            )}
          >
            <Card>
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="resize-none min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full md:w-auto rounded-full"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}