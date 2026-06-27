"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Globe, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { teachers } from "@/lib/data";

export function TeachersSection() {
  return (
    <section id="teachers" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Our Certified Teachers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from certified Quran teachers and Arabic language experts with years of experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, i) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="relative inline-block mb-4">
                <Avatar className="h-20 w-20 ring-4 ring-primary/10 mx-auto">
                  <AvatarImage src={teacher.avatar} alt={teacher.name} />
                  <AvatarFallback>{teacher.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <span className="absolute -bottom-1 -right-1 text-lg">{teacher.flag}</span>
              </div>
              <h3 className="font-semibold mb-1">{teacher.name}</h3>
              <div className="flex items-center justify-center gap-1 mb-2">
                <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{teacher.country}</span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-3">
                <Star className="h-4 w-4 text-accent fill-accent" />
                <span className="text-sm font-medium">{teacher.rating}</span>
                <span className="text-xs text-muted-foreground">({teacher.students} students)</span>
              </div>
              <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                {teacher.specialties.map((s) => (
                  <Badge key={s} variant="default" size="sm">{s}</Badge>
                ))}
              </div>
              <div className="space-y-1.5 mb-4 text-left">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Globe className="h-3.5 w-3.5" />
                  <span>{teacher.languages.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Award className="h-3.5 w-3.5" />
                  <span>{teacher.experience} experience</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>{teacher.lessons.toLocaleString()} lessons</span>
                </div>
              </div>
              <Button size="sm" className="w-full rounded-xl">Book Trial</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
