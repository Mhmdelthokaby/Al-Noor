"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricingPlans } from "@/lib/data";

export function PricingPreview() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your learning needs. All plans include a free trial class.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <p className={cn("text-sm", plan.highlighted ? "text-white/70" : "text-muted-foreground")}>
                  {plan.description}
                </p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className={cn("text-sm", plan.highlighted ? "text-white/70" : "text-muted-foreground")}>/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={cn(
                      "h-4 w-4 mt-0.5 shrink-0",
                      plan.highlighted ? "text-accent" : "text-primary"
                    )} />
                    <span className={plan.highlighted ? "text-white/90" : "text-muted-foreground"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/register">
                <Button
                  variant={plan.highlighted ? "gold" : "outline"}
                  className={cn(
                    "w-full gap-2 rounded-xl",
                    !plan.highlighted && "border-primary/30 text-primary hover:bg-primary/5"
                  )}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/pricing" className="text-sm text-primary hover:underline underline-offset-4">
            View full pricing details &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
