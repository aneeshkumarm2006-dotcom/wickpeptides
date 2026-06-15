"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, LogIn, UserPlus } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Tab = "login" | "register";

export function AuthForms() {
  const [tab, setTab] = useState<Tab>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(tab === "login" ? "Login" : "Register", { email, password });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  function switchTab(next: Tab) {
    setTab(next);
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
    setSubmitted(false);
  }

  return (
    <div className="w-full rounded-2xl border border-brand-border bg-white p-6 sm:p-8">
      {/* Tab bar */}
      <div className="mb-6 flex rounded-xl border border-brand-border p-1">
        {(["login", "register"] as Tab[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => switchTab(t)}
            className={cn(
              "flex-1 rounded-lg py-2 text-sm font-semibold capitalize transition-colors",
              tab === t
                ? "bg-brand-navy text-white"
                : "text-muted-foreground hover:text-brand-navy"
            )}
          >
            {t === "login" ? "Sign In" : "Register"}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {tab === "register" && (
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="auth-name" className="text-brand-navy">
              Full Name
            </Label>
            <Input
              id="auth-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dr. Jane Smith"
              required
              className="h-11 border-brand-border text-brand-navy"
            />
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="auth-email" className="text-brand-navy">
            Email
          </Label>
          <Input
            id="auth-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@institution.edu"
            required
            className="h-11 border-brand-border text-brand-navy"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="auth-password" className="text-brand-navy">
            Password
          </Label>
          <div className="relative">
            <Input
              id="auth-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={8}
              className="h-11 border-brand-border pr-10 text-brand-navy"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-brand-navy"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </div>

        {tab === "register" && (
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="auth-confirm" className="text-brand-navy">
              Confirm Password
            </Label>
            <Input
              id="auth-confirm"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={8}
              className="h-11 border-brand-border text-brand-navy"
            />
          </div>
        )}

        {tab === "login" && (
          <div className="flex justify-end">
            <Link
              href="#"
              className="text-xs text-brand-blue underline-offset-4 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        )}

        <button
          type="submit"
          className={cn(
            "mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white transition-colors",
            submitted
              ? "bg-emerald-600"
              : "bg-brand-navy hover:bg-brand-blue"
          )}
        >
          {tab === "login" ? (
            <>
              <LogIn className="size-4" />
              {submitted ? "Signed In!" : "Sign In"}
            </>
          ) : (
            <>
              <UserPlus className="size-4" />
              {submitted ? "Account Created!" : "Create Account"}
            </>
          )}
        </button>
      </form>

      {tab === "register" && (
        <p className="mt-4 text-center text-xs text-muted-foreground">
          By creating an account you agree to our{" "}
          <Link
            href="/legal/terms"
            className="text-brand-blue underline-offset-4 hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/legal/privacy"
            className="text-brand-blue underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      )}
    </div>
  );
}
