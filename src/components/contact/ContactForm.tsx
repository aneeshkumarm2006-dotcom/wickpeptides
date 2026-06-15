"use client";

import { useEffect, useState } from "react";
import { Check, Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const SUBJECT_OPTIONS = [
  { value: "Product Question", label: "Product Question" },
  { value: "Order Issue", label: "Order Issue" },
  { value: "COA Request", label: "COA Request" },
  { value: "General Inquiry", label: "General Inquiry" },
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(SUBJECT_OPTIONS[0].value);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return;
    const id = window.setTimeout(() => setSent(false), 3000);
    return () => window.clearTimeout(id);
  }, [sent]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Frontend-only — no backend. Log the payload and show a confirmation.
    console.log("Contact form submission", { name, email, subject, message });
    setSent(true);
    setName("");
    setEmail("");
    setSubject(SUBJECT_OPTIONS[0].value);
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-lg border bg-surface p-6 sm:p-8"
    >
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="h-11"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="h-11"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-subject">Subject</Label>
        <Select
          items={SUBJECT_OPTIONS}
          value={subject}
          onValueChange={(value) => {
            if (typeof value === "string") setSubject(value);
          }}
        >
          <SelectTrigger
            id="contact-subject"
            className="w-full justify-between data-[size=default]:h-11"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SUBJECT_OPTIONS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-message">Message</Label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us how we can support your research."
          required
          rows={6}
          className="w-full min-w-0 resize-y rounded-md border border-input bg-transparent px-3 py-2.5 text-base shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
        />
      </div>

      <button
        type="submit"
        className={cn(
          "flex h-12 w-full items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold text-primary-foreground transition-colors",
          sent ? "bg-success" : "bg-primary hover:bg-primary/90"
        )}
      >
        {sent ? (
          <>
            <Check className="size-4" />
            Message Sent
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

export default ContactForm;
