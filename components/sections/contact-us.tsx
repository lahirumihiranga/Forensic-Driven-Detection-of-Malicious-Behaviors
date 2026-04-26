"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Message sent", {
        description: `Threat research team will contact: ${data.email}`,
      });
      form.reset();
    }, 1000);
  };

  return (
    <section id="contact-us" className="relative overflow-hidden px-4 py-20">
      <style>{`
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseSoft {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }

        @keyframes rotateIcon {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes bounceIcon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1); }
          50% { box-shadow: 0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 30px rgba(34, 211, 238, 0.2); }
        }

        @keyframes shimmer {
          0%, 100% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-16px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-rise-in { animation: riseIn 0.72s ease-out both; }
        .animate-pulse-soft { animation: pulseSoft 2.4s ease-in-out infinite; }
        .animate-float { animation: floatIcon 3.2s ease-in-out infinite; }
        .animate-rotate { animation: rotateIcon 6s linear infinite; }
        .animate-bounce-icon { animation: bounceIcon 2s ease-in-out infinite; }
        .animate-glow { animation: glowPulse 2s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s infinite; background-size: 1000px 100%; }
        .animate-slide-in { animation: slideIn 0.6s ease-out; }
      `}</style>

      <div className="pointer-events-none absolute right-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <header className="mb-16 text-center animate-rise-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200 transition hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20">
            <Sparkles className="h-4 w-4 animate-bounce-icon" />
            Contact The Threat Research Team
          </div>

          <h2 className="f-display text-4xl font-black text-white md:text-5xl">Contact Us</h2>
          <p className="mx-auto mt-5 max-w-3xl text-slate-300">
            Share your incident scenario, collaboration request, or architecture feedback related
            to forensic-driven malicious behavior detection.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 animate-rise-in" style={{ animationDelay: "90ms" }}>
            <h3 className="text-3xl font-black text-slate-100">Contact Information</h3>
            <p className="text-slate-300">
              Connect with us for validation sessions, security research, or implementation
              partnerships.
            </p>

            <div className="space-y-4 pt-2">
              <div className="group flex items-start gap-4 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-5 transition duration-300 hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-slate-900/80 hover:to-slate-900/60 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/20 p-3 text-cyan-200 transition duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/40">
                  <Phone className="h-5 w-5 animate-float" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-100">Phone</p>
                  <p className="text-slate-300 group-hover:text-slate-200 transition">+94 70 698 8230</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-5 transition duration-300 hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-slate-900/80 hover:to-slate-900/60 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/20 p-3 text-cyan-200 transition duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/40">
                  <Mail className="h-5 w-5 animate-bounce-icon" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-100">Email</p>
                  <a
                    href="mailto:forensicml@research-lab.ai"
                    className="text-cyan-300 transition hover:text-cyan-200 hover:underline hover:underline-offset-2"
                  >
                    forensicml@research-lab.ai
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-5 transition duration-300 hover:border-cyan-400/60 hover:bg-gradient-to-br hover:from-slate-900/80 hover:to-slate-900/60 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/20 p-3 text-cyan-200 transition duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/40">
                  <MapPin className="h-5 w-5 animate-float" style={{ animationDelay: "0.3s" }} />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-100">Location</p>
                  <p className="text-slate-300 group-hover:text-slate-200 transition">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="animate-rise-in rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl transition hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/40"
              style={{ animationDelay: "140ms" }}
            >
              <h3 className="mb-7 flex items-center gap-2 text-2xl font-black text-slate-100">
                <ShieldAlert className="h-6 w-6 text-red-300 animate-rotate" style={{ animationDuration: "4s" }} />
                Submit Inquiry
              </h3>

              <div className="grid gap-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase tracking-wide text-slate-300">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jane"
                            className="rounded-xl border-cyan-500/30 bg-gradient-to-r from-slate-950/60 to-slate-950/40 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:shadow-lg focus:shadow-cyan-500/20 transition duration-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase tracking-wide text-slate-300">
                          Last Name
                        </FormLabel>
                      <FormControl>
                          <Input
                            placeholder="Doe"
                            className="rounded-xl border-cyan-500/30 bg-gradient-to-r from-slate-950/60 to-slate-950/40 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:shadow-lg focus:shadow-cyan-500/20 transition duration-200"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase tracking-wide text-slate-300">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="name@domain.com"
                          className="rounded-xl border-cyan-500/30 bg-gradient-to-r from-slate-950/60 to-slate-950/40 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:shadow-lg focus:shadow-cyan-500/20 transition duration-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase tracking-wide text-slate-300">
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Threat simulation discussion"
                          className="rounded-xl border-cyan-500/30 bg-gradient-to-r from-slate-950/60 to-slate-950/40 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:shadow-lg focus:shadow-cyan-500/20 transition duration-200"
                          {...field}
                        />
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
                      <FormLabel className="text-xs font-bold uppercase tracking-wide text-slate-300">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your use case or incident context"
                          className="min-h-[140px] resize-none rounded-xl border-cyan-500/30 bg-gradient-to-r from-slate-950/60 to-slate-950/40 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:shadow-lg focus:shadow-cyan-500/20 transition duration-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="mt-3 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-3 font-bold text-slate-950 transition duration-300 hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="mr-2 h-4 w-4 animate-bounce-icon" style={{ animationDelay: isLoading ? "0s" : "-0.4s" }} />
                  {isLoading ? "Sending..." : "Send Message"}
                  <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${isLoading ? "animate-pulse" : "group-hover:translate-x-1"}`} />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
