"use client";

import { motion } from "framer-motion";
import { BookOpen, Target, Eye, Heart, Award, Star, Users, Globe, GraduationCap } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { teachers, stats } from "@/lib/data";

const values = [
  { icon: <BookOpen className="h-5 w-5" />, title: "Quranic Excellence", description: "We uphold the highest standards in Quran education with certified Ijazah holders." },
  { icon: <Heart className="h-5 w-5" />, title: "Compassionate Teaching", description: "Every student is unique. We tailor our approach to individual learning styles." },
  { icon: <Award className="h-5 w-5" />, title: "Quality Assurance", description: "Regular assessments, feedback, and continuous improvement in our teaching methods." },
  { icon: <Globe className="h-5 w-5" />, title: "Global Community", description: "Connecting students worldwide with certified teachers across 20+ countries." },
];

const milestones = [
  { year: "2019", title: "Founded", description: "Al-Noor Academy was established with a vision to provide premium online Quran education." },
  { year: "2020", title: "100 Students", description: "Reached our first 100 students from 10 countries." },
  { year: "2021", title: "Global Expansion", description: "Expanded to 20+ countries with 15 certified teachers." },
  { year: "2022", title: "300 Students", description: "Launched Arabic language and Islamic studies programs." },
  { year: "2023", title: "500+ Students", description: "Introduced advanced Hifz program and Ijazah certification path." },
  { year: "2024", title: "Premium Platform", description: "Launched the new interactive learning platform with AI-powered progress tracking." },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary mb-6">
              <BookOpen className="h-3.5 w-3.5" />
              About Us
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Our Mission is to Make Quran & Arabic Education{" "}
              <span className="text-gradient">Accessible to Everyone</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Al-Noor Academy was founded in 2019 with a simple mission: to connect students worldwide with certified Quran and Arabic teachers through a modern, accessible online platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To provide authentic, high-quality Quran and Arabic education to students of all ages worldwide through innovative technology and certified teachers, making Islamic learning accessible, engaging, and effective.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/5 text-accent mb-4">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To become the world's leading online Quran and Arabic academy, setting the standard for excellence in Islamic education through technology, qualified teachers, and a commitment to student success.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl border border-border bg-card shadow-card">
                <p className="text-2xl lg:text-3xl font-bold text-gradient">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 p-5 rounded-2xl border border-border bg-card shadow-card">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{v.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-0 md:pl-16"
                  >
                    <div className="hidden md:flex absolute left-4 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-primary bg-primary/5 px-3 py-1 rounded-full">{m.year}</span>
                        <h3 className="font-semibold">{m.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{m.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
