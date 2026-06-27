"use client";

import { motion } from "framer-motion";
import { Video, GraduationCap, CalendarClock, TrendingUp, UserCheck, BookOpen } from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Video: <Video className="h-6 w-6" />,
  GraduationCap: <GraduationCap className="h-6 w-6" />,
  CalendarClock: <CalendarClock className="h-6 w-6" />,
  TrendingUp: <TrendingUp className="h-6 w-6" />,
  UserCheck: <UserCheck className="h-6 w-6" />,
  BookOpen: <BookOpen className="h-6 w-6" />,
};

const colors = ["#0f766e", "#16a34a", "#d4af37", "#3b82f6", "#8b5cf6", "#f59e0b"];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide the highest quality Quran and Arabic education with certified teachers and modern teaching methods.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-colors"
                style={{ backgroundColor: `${colors[i]}15`, color: colors[i] }}
              >
                {iconMap[item.icon]}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
