"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Play, ArrowRight, Star, Users, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary mb-6">
              <BookOpen className="h-3.5 w-3.5" />
              Premium Online Academy
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Learn Quran & Arabic from{" "}
              <span className="text-gradient">Certified Teachers</span>
              {" "}Anywhere in the World
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
              Join 500+ students worldwide. Learn Quran reading, Tajweed, Hifz, Arabic language, and Islamic studies with certified scholars in live one-on-one classes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register">
                <Button size="xl" className="gap-2 shadow-elevated">
                  <Play className="h-5 w-5" />
                  Book Free Trial
                </Button>
              </Link>
              <Link href="/#courses">
                <Button variant="outline" size="xl" className="gap-2">
                  Browse Courses
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1609599002809-1e8899d78628?w=600&h=400&fit=crop"
                alt="Quran learning"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-soft flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Free Trial Class</p>
                    <p className="text-xs text-muted-foreground">Book your first class today</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-elevated hidden lg:block">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="text-sm font-bold">4.9</span>
                <span className="text-xs text-muted-foreground">(500+ reviews)</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl lg:text-3xl font-bold tracking-tight text-gradient">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
