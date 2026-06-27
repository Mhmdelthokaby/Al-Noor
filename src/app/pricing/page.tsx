"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, DollarSign, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { pricingPlans, faqs } from "@/lib/data";

const compareFeatures = [
  { name: "Classes per week", starter: "2", standard: "3", premium: "5" },
  { name: "Class duration", starter: "30 min", standard: "45 min", premium: "60 min" },
  { name: "Tajweed level", starter: "Basic", standard: "Advanced", premium: "Full Mastery" },
  { name: "Learning materials", starter: "Basic", standard: "Full Access", premium: "All Materials" },
  { name: "Support", starter: "Email", standard: "Priority", premium: "24/7 Priority" },
  { name: "Progress reports", starter: "Monthly", standard: "Bi-weekly", premium: "Weekly" },
  { name: "Assessments", starter: "-", standard: "Monthly", premium: "Weekly" },
  { name: "Certificate", starter: "-", standard: "Completion", premium: "Ijazah" },
  { name: "One-on-one sessions", starter: "-", standard: "-", premium: "Included" },
  { name: "Family discount", starter: "-", standard: "-", premium: "Available" },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "quarterly" | "yearly">("monthly");

  const getPrice = (base: number) => {
    if (billing === "quarterly") return Math.round(base * 2.7);
    if (billing === "yearly") return Math.round(base * 10);
    return base;
  };

  const getSuffix = () => {
    if (billing === "quarterly") return "/quarter";
    if (billing === "yearly") return "/year";
    return "/month";
  };

  return (
    <>
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary mb-6">
              <DollarSign className="h-3.5 w-3.5" />
              Pricing
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Simple Pricing for{" "}
              <span className="text-gradient">Premium Learning</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your learning goals. All plans include a free trial class.
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setBilling("monthly")}
              className={cn("px-4 py-2 rounded-xl text-sm font-medium transition-all", billing === "monthly" ? "bg-primary text-white shadow-soft" : "text-muted-foreground hover:text-foreground")}
            >Monthly</button>
            <button
              onClick={() => setBilling("quarterly")}
              className={cn("px-4 py-2 rounded-xl text-sm font-medium transition-all", billing === "quarterly" ? "bg-primary text-white shadow-soft" : "text-muted-foreground hover:text-foreground")}
            >Quarterly <span className="text-accent text-xs ml-1">Save 10%</span></button>
            <button
              onClick={() => setBilling("yearly")}
              className={cn("px-4 py-2 rounded-xl text-sm font-medium transition-all", billing === "yearly" ? "bg-primary text-white shadow-soft" : "text-muted-foreground hover:text-foreground")}
            >Yearly <span className="text-accent text-xs ml-1">Save 17%</span></button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "rounded-2xl border p-6 lg:p-8 shadow-card transition-all duration-300 relative",
                  plan.highlighted
                    ? "bg-primary text-white border-primary shadow-elevated scale-105 lg:scale-110"
                    : "bg-card border-border hover:shadow-elevated"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className={cn("text-sm mb-6", plan.highlighted ? "text-white/70" : "text-muted-foreground")}>{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${getPrice(plan.price)}</span>
                  <span className={cn("text-sm", plan.highlighted ? "text-white/70" : "text-muted-foreground")}>{getSuffix()}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className={cn("h-4 w-4 mt-0.5 shrink-0", plan.highlighted ? "text-accent" : "text-primary")} />
                      <span className={plan.highlighted ? "text-white/90" : "text-muted-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlighted ? "gold" : "outline"} className={cn("w-full gap-2 rounded-xl", !plan.highlighted && "border-primary/30 text-primary hover:bg-primary/5")}>
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Compare Plans</h2>
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-card">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left px-6 py-4 font-semibold">Feature</th>
                      <th className="text-center px-6 py-4 font-semibold">Starter</th>
                      <th className="text-center px-6 py-4 font-semibold text-primary">Standard</th>
                      <th className="text-center px-6 py-4 font-semibold text-accent">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareFeatures.map((feat, i) => (
                      <tr key={feat.name} className={cn("border-b border-border/50", i % 2 === 0 && "bg-muted/20")}>
                        <td className="px-6 py-3.5 font-medium">{feat.name}</td>
                        <td className="px-6 py-3.5 text-center text-muted-foreground">{feat.starter}</td>
                        <td className="px-6 py-3.5 text-center text-muted-foreground">{feat.standard}</td>
                        <td className="px-6 py-3.5 text-center text-muted-foreground">{feat.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-8 justify-center">
              <HelpCircle className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold tracking-tight">Pricing FAQs</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(0, 6).map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-base font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </>
  );
}
