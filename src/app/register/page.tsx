"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, UserPlus, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const steps = [
  { number: 1, title: "Personal Info" },
  { number: 2, title: "Contact Details" },
  { number: 3, title: "Choose Plan" },
];

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary/5 via-background to-accent/5 items-center justify-center p-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative max-w-md">
          <div className="flex justify-center mb-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-primary shadow-elevated">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">Start Your Learning Journey</h2>
          <p className="text-muted-foreground text-center mb-10 leading-relaxed">
            Join 500+ students worldwide and begin learning Quran, Arabic, and Islamic studies with certified teachers.
          </p>
          <div className="space-y-4">
            {[
              { step: 1, text: "Tell us about yourself" },
              { step: 2, text: "Set up your account" },
              { step: 3, text: "Choose your learning path" },
            ].map((s) => (
              <div key={s.step} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-soft">
                <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold",
                  step > s.step ? "bg-success text-white" : step === s.step ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                )}>
                  {step > s.step ? <Check className="h-4 w-4" /> : s.step}
                </div>
                <span className={cn("text-sm", step === s.step ? "font-semibold" : "text-muted-foreground")}>{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">Al-Noor</span>
            </Link>

            <div className="flex items-center justify-center gap-2 mb-4">
              {steps.map((s) => (
                <div key={s.number} className="flex items-center gap-2">
                  <div className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all",
                    step >= s.number ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  )}>
                    {s.number}
                  </div>
                  <span className={cn("text-xs hidden sm:block", step === s.number ? "font-medium" : "text-muted-foreground")}>{s.title}</span>
                  {s.number < 3 && <div className={cn("w-8 h-px", step > s.number ? "bg-primary" : "bg-border")} />}
                </div>
              ))}
            </div>

            <h1 className="text-2xl font-bold tracking-tight mb-2">
              {step === 1 && "Create your account"}
              {step === 2 && "Contact information"}
              {step === 3 && "Choose your plan"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {step === 1 && "Start your journey to learn Quran and Arabic"}
              {step === 2 && "How can we reach you?"}
              {step === 3 && "Select the plan that fits your needs"}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-card">
            {step === 1 && (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter your full name" className="rounded-xl h-11" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" placeholder="Your age" className="rounded-xl h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <select className="flex h-11 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50 transition-all">
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Interested Course</Label>
                  <select className="flex h-11 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50 transition-all">
                    <option value="">Select a course</option>
                    <option value="quran">Quran Reading & Tajweed</option>
                    <option value="hifz">Quran Memorization (Hifz)</option>
                    <option value="arabic">Arabic Language</option>
                    <option value="islamic">Islamic Studies</option>
                  </select>
                </div>
                <Button onClick={() => setStep(2)} className="w-full gap-2 h-11 rounded-xl mt-2">
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            )}

            {step === 2 && (
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="email2">Email Address</Label>
                  <Input id="email2" type="email" placeholder="you@example.com" className="rounded-xl h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone2">Phone Number</Label>
                  <Input id="phone2" type="tel" placeholder="+1 (555) 000-0000" className="rounded-xl h-11" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Your country" className="rounded-xl h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select className="flex h-11 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50 transition-all">
                      <option value="">Select timezone</option>
                      <option value="est">EST (UTC-5)</option>
                      <option value="gmt">GMT (UTC+0)</option>
                      <option value="gst">GST (UTC+4)</option>
                      <option value="ast">AST (UTC+3)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password2">Password</Label>
                  <Input id="password2" type="password" placeholder="Create a strong password" className="rounded-xl h-11" />
                </div>
                <div className="flex gap-3 mt-2">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1 h-11 rounded-xl">Back</Button>
                  <Button onClick={() => setStep(3)} className="flex-1 gap-2 h-11 rounded-xl">
                    Continue <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-3">
                  {[
                    { name: "Starter", price: "$79/mo", desc: "2 classes/week" },
                    { name: "Standard", price: "$129/mo", desc: "3 classes/week", popular: true },
                    { name: "Premium", price: "$199/mo", desc: "5 classes/week" },
                  ].map((plan) => (
                    <label
                      key={plan.name}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all",
                        plan.popular ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                      )}
                    >
                      <input type="radio" name="plan" className="h-4 w-4 accent-primary" defaultChecked={plan.popular} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{plan.name}</span>
                          {plan.popular && <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">Popular</span>}
                        </div>
                        <p className="text-xs text-muted-foreground">{plan.desc}</p>
                      </div>
                      <span className="font-bold text-sm">{plan.price}</span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Free 30-minute trial class included with all plans
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1 h-11 rounded-xl">Back</Button>
                  <Link href="/login" className="flex-1">
                    <Button className="w-full gap-2 h-11 rounded-xl">
                      <UserPlus className="h-4 w-4" />
                      Create Account
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            <Separator className="my-6" />
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-medium hover:underline">Sign in</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
