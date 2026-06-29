"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Plus, Settings, ChevronRight, FileText, Play, Layers, Edit3, Trash2, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { programs } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ContentBuilder() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Content Builder</h2>
          <p className="text-sm text-muted-foreground">Build and manage your programs, levels, and lessons</p>
        </div>
        <Button className="gap-2"><Plus className="h-4 w-4" /> New Program</Button>
      </div>

      <Tabs defaultValue="programs">
        <TabsList>
          <TabsTrigger value="programs" className="gap-2"><BookOpen className="h-4 w-4" /> Programs</TabsTrigger>
          <TabsTrigger value="lessons" className="gap-2"><FileText className="h-4 w-4" /> All Lessons</TabsTrigger>
        </TabsList>

        <TabsContent value="programs" className="mt-4">
          <div className="space-y-4">
            {programs.map((program, i) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="overflow-hidden hover:shadow-elevated transition-all">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-32 sm:h-auto overflow-hidden shrink-0">
                      <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{program.title}</h3>
                          <p className="text-sm text-muted-foreground">{program.instructor} &middot; {program.totalLessons} lessons</p>
                        </div>
                        <div className="flex gap-1">
                          <Link href={`/dashboard/admin/content-builder/program/${program.id}`}>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg"><Settings className="h-4 w-4" /></Button>
                          </Link>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-danger"><Trash2 className="h-4 w-4" /></Button>
                        </div>
                      </div>

                      <div className="space-y-3 mt-4">
                        {program.levels.map((level, li) => (
                          <div key={level.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                            <GripVertical className="h-4 w-4 text-muted-foreground shrink-0" />
                            <Layers className="h-4 w-4 text-primary shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium">{level.title}</p>
                              <p className="text-xs text-muted-foreground">{level.lessons.length} lessons &middot; {level.progress}% complete</p>
                            </div>
                            <div className="flex gap-4 text-xs text-muted-foreground">
                              <span>{level.lessons.filter(l => l.type === "video").length} videos</span>
                              <span>{level.lessons.filter(l => l.type === "quiz").length} quizzes</span>
                              <span>{level.lessons.filter(l => l.type === "homework").length} homework</span>
                            </div>
                            <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg">
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Link href={`/dashboard/admin/content-builder/program/${program.id}`}>
                          <Button size="sm" variant="outline" className="gap-2"><Settings className="h-4 w-4" /> Manage Levels</Button>
                        </Link>
                        <Button size="sm" variant="ghost" className="gap-2"><Plus className="h-4 w-4" /> Add Level</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="lessons" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      {["Lesson", "Program", "Level", "Type", "Duration", "Status", ""].map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {programs.flatMap((p) =>
                      p.levels.flatMap((l) =>
                        l.lessons.map((lesson) => (
                          <tr key={lesson.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                            <td className="px-4 py-3 text-sm font-medium">{lesson.title}</td>
                            <td className="px-4 py-3 text-sm text-muted-foreground">{p.title}</td>
                            <td className="px-4 py-3 text-sm text-muted-foreground">{l.title}</td>
                            <td className="px-4 py-3">
                              <Badge variant={lesson.type === "quiz" ? "warning" : lesson.type === "homework" ? "info" : "secondary"} size="sm">
                                {lesson.type}
                              </Badge>
                            </td>
                            <td className="px-4 py-3 text-sm">{lesson.duration}</td>
                            <td className="px-4 py-3">
                              <Badge variant={lesson.locked ? "secondary" : lesson.completed ? "success" : "default"} size="sm">
                                {lesson.locked ? "Locked" : lesson.completed ? "Completed" : "Active"}
                              </Badge>
                            </td>
                            <td className="px-4 py-3">
                              <Link href={`/dashboard/admin/content-builder/lesson/${lesson.id}`}>
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg"><Edit3 className="h-4 w-4" /></Button>
                              </Link>
                            </td>
                          </tr>
                        ))
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
