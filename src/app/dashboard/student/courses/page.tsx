"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Users, Star, Clock, ChevronRight, Lock, CheckCircle, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { programs } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function StudentPrograms() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-bold tracking-tight mb-1">My Programs</h2>
        <p className="text-muted-foreground text-sm">Continue your learning journey</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {programs.map((program, i) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={`/dashboard/student/courses/${program.id}`} className="block group">
              <Card className="overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-44 h-36 sm:h-auto overflow-hidden shrink-0">
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{program.title}</h3>
                      <Badge variant={program.progress >= 75 ? "success" : program.progress >= 25 ? "default" : "secondary"}>
                        {program.progress}%
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{program.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{program.totalLessons} lessons</div>
                      <div className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-success" />{program.completedLessons} done</div>
                    </div>
                    <div className="relative h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light transition-all" style={{ width: `${program.progress}%` }} />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
