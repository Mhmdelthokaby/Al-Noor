"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info" | "gold";
}

const variants = {
  default: "bg-primary/5 text-primary",
  success: "bg-success/5 text-success",
  warning: "bg-warning/5 text-warning",
  danger: "bg-danger/5 text-danger",
  info: "bg-info/5 text-info",
  gold: "bg-accent/5 text-accent",
};

export function StatCard({ title, value, change, icon, variant = "default" }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-elevated transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl", variants[variant])}>
          {icon}
        </div>
        {change !== undefined && (
          <div className={cn(
            "flex items-center gap-1 text-xs font-medium rounded-full px-2 py-0.5",
            change >= 0 ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
          )}>
            {change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      <p className="text-2xl font-bold tracking-tight">{value}</p>
      <p className="text-sm text-muted-foreground mt-0.5">{title}</p>
    </motion.div>
  );
}
