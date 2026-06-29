"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Lock, CheckCircle, Play, FileText, BookOpen, Star, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { programs } from "@/lib/data";
import { cn } from "@/lib/utils";

const typeIcons: Record<string, React.ReactNode> = {
  video: <Play className="h-4 w-4" />,
  quiz: <FileText className="h-4 w-4" />,
  homework: <BookOpen className="h-4 w-4" />,
};

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>();
  const program = programs.find((p) => p.id === Number(id));

  if (!program) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold mb-2">Program not found</h2>
        <Link href="/dashboard/student/courses"><Button variant="outline">Back to Programs</Button></Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <Link href="/dashboard/student/courses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Programs
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
          <div className="h-28 w-full sm:w-48 rounded-2xl overflow-hidden shrink-0">
            <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-1">{program.title}</h2>
            <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span>{program.instructor}</span>
              <span>&middot;</span>
              <span>{program.totalLessons} lessons</span>
              <span>&middot;</span>
              <span>{program.completedLessons} completed</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 max-w-xs h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light" style={{ width: `${program.progress}%` }} />
              </div>
              <span className="text-sm font-medium">{program.progress}%</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="space-y-4">
        {program.levels.map((level, li) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: li * 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="pb-3 border-b border-border/50">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="default" size="sm">Level {li + 1}</Badge>
                      {level.progress === 100 && <Badge variant="success" size="sm">Complete</Badge>}
                    </div>
                    <CardTitle className="text-lg">{level.title}</CardTitle>
                    <CardDescription>{level.description}</CardDescription>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-medium">{level.progress}%</p>
                    <div className="w-20 h-1.5 rounded-full bg-muted overflow-hidden mt-1 ml-auto">
                      <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${level.progress}%` }} />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {level.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={lesson.locked ? "#" : `/dashboard/student/lesson/${lesson.id}`}
                    className={cn(
                      "flex items-center gap-4 px-5 py-3.5 border-b border-border/30 last:border-0 transition-colors",
                      lesson.locked ? "opacity-50 cursor-not-allowed" : "hover:bg-muted/50"
                    )}
                  >
                    <div className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-xl shrink-0",
                      lesson.completed ? "bg-success/10 text-success" :
                      lesson.locked ? "bg-muted text-muted-foreground" :
                      "bg-primary/5 text-primary"
                    )}>
                      {lesson.completed ? <CheckCircle className="h-5 w-5" /> : lesson.locked ? <Lock className="h-4 w-4" /> : typeIcons[lesson.type] || <Play className="h-4 w-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium truncate">{lesson.title}</p>
                        <Badge variant={lesson.type === "quiz" ? "warning" : lesson.type === "homework" ? "info" : "secondary"} size="sm">
                          {lesson.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                    </div>
                    <Badge variant={lesson.completed ? "success" : lesson.locked ? "secondary" : "outline"} size="sm" className="shrink-0">
                      {lesson.completed ? "Done" : lesson.locked ? "Locked" : "Start"}
                    </Badge>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
