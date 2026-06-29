"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Play, FileText, HelpCircle, BookOpen, Plus, Trash2, GripVertical, Video, Headphones, CheckCircle, Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { programs } from "@/lib/data";

export default function LessonBuilder() {
  const { id } = useParams<{ id: string }>();
  let lesson: any = null;
  let programTitle = "";
  let levelTitle = "";

  for (const prog of programs) {
    for (const lvl of prog.levels) {
      const found = lvl.lessons.find((l) => l.id === Number(id));
      if (found) {
        lesson = found;
        levelTitle = lvl.title;
        programTitle = prog.title;
        break;
      }
    }
    if (lesson) break;
  }

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold mb-2">Lesson not found</h2>
        <Link href="/dashboard/admin/content-builder"><Button variant="outline">Back to Content Builder</Button></Link>
      </div>
    );
  }

  const [lessonType, setLessonType] = useState(lesson.type);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Link href="/dashboard/admin/content-builder" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Content Builder
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-1">Edit Lesson</h2>
            <p className="text-sm text-muted-foreground">{programTitle} &middot; {levelTitle}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2"><Trash2 className="h-4 w-4" /> Delete</Button>
            <Button className="gap-2"><CheckCircle className="h-4 w-4" /> Save</Button>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Lesson Title</Label>
                <Input defaultValue={lesson.title} className="rounded-xl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Duration</Label>
                  <Input defaultValue={lesson.duration} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Lesson Type</Label>
                  <Select defaultValue={lessonType} onValueChange={setLessonType}>
                    <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video"><Play className="h-4 w-4 inline mr-2" />Video Lesson</SelectItem>
                      <SelectItem value="quiz"><HelpCircle className="h-4 w-4 inline mr-2" />Quiz</SelectItem>
                      <SelectItem value="homework"><BookOpen className="h-4 w-4 inline mr-2" />Homework</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Description / Instructions</Label>
                <textarea
                  rows={3}
                  placeholder="Enter lesson description or instructions..."
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 transition-all resize-none"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="video-url">
                <TabsList className="w-full">
                  <TabsTrigger value="video-url" className="flex-1 gap-2"><Video className="h-4 w-4" /> Video URL</TabsTrigger>
                  <TabsTrigger value="files" className="flex-1 gap-2"><FileText className="h-4 w-4" /> Files</TabsTrigger>
                  <TabsTrigger value="quiz-questions" className="flex-1 gap-2"><HelpCircle className="h-4 w-4" /> Quiz Questions</TabsTrigger>
                </TabsList>

                <TabsContent value="video-url" className="mt-4 space-y-3">
                  <div className="space-y-2">
                    <Label>Video URL (YouTube/Vimeo/Zoom)</Label>
                    <Input placeholder="https://www.youtube.com/watch?v=..." className="rounded-xl" />
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50 flex items-center gap-3">
                    <Video className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Lesson Recording</p>
                      <p className="text-xs text-muted-foreground">Paste the recording link from your live session</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="files" className="mt-4 space-y-3">
                  <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors cursor-pointer">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm font-medium">Upload PDF or Audio File</p>
                    <p className="text-xs text-muted-foreground">PDF, MP3, MP4 (max 100MB)</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="text-sm flex-1">lesson_notes.pdf</span>
                    <Badge variant="secondary">PDF</Badge>
                    <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg"><Trash2 className="h-3.5 w-3.5 text-muted-foreground" /></Button>
                  </div>
                </TabsContent>

                <TabsContent value="quiz-questions" className="mt-4 space-y-4">
                  {[
                    { q: "Sample question 1?", opts: ["Option A", "Option B", "Option C", "Option D"] },
                    { q: "Sample question 2?", opts: ["Option A", "Option B", "Option C"] },
                  ].map((q, i) => (
                    <div key={i} className="p-4 rounded-xl border border-border">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium">Question {i + 1}</span>
                        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg"><Trash2 className="h-3.5 w-3.5 text-muted-foreground" /></Button>
                      </div>
                      <Input defaultValue={q.q} className="rounded-xl mb-2" placeholder="Question text" />
                      <div className="space-y-2">
                        {q.opts.map((opt, oi) => (
                          <div key={oi} className="flex items-center gap-2">
                            <input type="radio" name={`q-${i}`} className="accent-primary" />
                            <Input defaultValue={opt} className="rounded-xl flex-1" placeholder={`Option ${String.fromCharCode(65 + oi)}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="gap-2"><Plus className="h-4 w-4" /> Add Question</Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Lesson Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Locked</p>
                  <p className="text-xs text-muted-foreground">Require previous lesson completion</p>
                </div>
                <Switch defaultChecked={lesson.locked} />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Mark as Complete</p>
                  <p className="text-xs text-muted-foreground">Auto-complete on view</p>
                </div>
                <Switch defaultChecked={false} />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label className="text-xs">Order</Label>
                <Input type="number" defaultValue={1} className="rounded-xl" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="aspect-video rounded-xl bg-muted flex items-center justify-center">
                <Play className="h-8 w-8 text-muted-foreground/50" />
              </div>
              <p className="text-sm font-medium">{lesson.title}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant={lessonType === "quiz" ? "warning" : lessonType === "homework" ? "info" : "secondary"} size="sm">{lessonType}</Badge>
                <span>{lesson.duration}</span>
              </div>
              <Link href={`/dashboard/student/lesson/${lesson.id}`}>
                <Button variant="outline" size="sm" className="w-full gap-2"><Play className="h-4 w-4" /> Preview as Student</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
