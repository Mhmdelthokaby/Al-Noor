"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Plus, GripVertical, Layers, FileText, Play, Trash2, Edit3, CheckCircle, Lock, Video, HelpCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { programs } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProgramBuilder() {
  const { id } = useParams<{ id: string }>();
  const program = programs.find((p) => p.id === Number(id));

  if (!program) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold mb-2">Program not found</h2>
        <Link href="/dashboard/admin/content-builder"><Button variant="outline">Back to Content Builder</Button></Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl">
      <Link href="/dashboard/admin/content-builder" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Content Builder
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-1">{program.title}</h2>
            <p className="text-sm text-muted-foreground">{program.levels.length} levels &middot; {program.totalLessons} total lessons</p>
          </div>
          <Button className="gap-2"><Plus className="h-4 w-4" /> Add Level</Button>
        </div>
      </motion.div>

      <div className="space-y-4">
        {program.levels.map((level, li) => (
          <Card key={level.id} className="overflow-hidden">
            <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GripVertical className="h-5 w-5 text-muted-foreground shrink-0" />
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default" size="sm">Level {li + 1}</Badge>
                      <CardTitle className="text-base">{level.title}</CardTitle>
                    </div>
                    <CardDescription>{level.description}</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg"><Edit3 className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-danger"><Trash2 className="h-4 w-4" /></Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {level.lessons.map((lesson, idx) => (
                <Link
                  key={lesson.id}
                  href={`/dashboard/admin/content-builder/lesson/${lesson.id}`}
                  className="flex items-center gap-4 px-5 py-3.5 border-b border-border/30 last:border-0 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground text-xs font-medium shrink-0">
                    {idx + 1}
                  </div>
                  <div className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-xl shrink-0",
                    lesson.type === "video" && "bg-primary/5 text-primary",
                    lesson.type === "quiz" && "bg-warning/5 text-warning",
                    lesson.type === "homework" && "bg-info/5 text-info",
                  )}>
                    {lesson.type === "video" ? <Play className="h-4 w-4" /> : lesson.type === "quiz" ? <HelpCircle className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{lesson.title}</p>
                    <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={lesson.type === "quiz" ? "warning" : lesson.type === "homework" ? "info" : "secondary"} size="sm">{lesson.type}</Badge>
                    <Badge variant={lesson.locked ? "secondary" : lesson.completed ? "success" : "outline"} size="sm">
                      {lesson.locked ? <Lock className="h-3 w-3" /> : lesson.completed ? <CheckCircle className="h-3 w-3" /> : "Active"}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg"><Edit3 className="h-3.5 w-3.5" /></Button>
                  </div>
                </Link>
              ))}
            </CardContent>

            <CardFooter className="p-3 border-t border-border/50">
              <Button variant="ghost" size="sm" className="gap-2 w-full justify-center"><Plus className="h-4 w-4" /> Add Lesson to {level.title}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Program Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Program Title</Label>
            <Input defaultValue={program.title} className="rounded-xl max-w-md" />
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <textarea
              rows={3}
              defaultValue={program.description}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 transition-all resize-none"
            />
          </div>
          <div className="flex gap-3">
            <Button>Save Changes</Button>
            <Button variant="outline" className="text-danger">Delete Program</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
