"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Play, CheckCircle, FileText, BookOpen, Download, ChevronRight, ChevronLeft, Headphones, Maximize, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { programs } from "@/lib/data";

export default function LessonView() {
  const { id } = useParams<{ id: string }>();
  const lessonId = Number(id);

  let lesson: any = null;
  let levelTitle = "";
  let programTitle = "";
  let prevLesson: any = null;
  let nextLesson: any = null;
  let programId = 0;

  for (const prog of programs) {
    for (const lvl of prog.levels) {
      const idx = lvl.lessons.findIndex((l) => l.id === lessonId);
      if (idx !== -1) {
        lesson = lvl.lessons[idx];
        levelTitle = lvl.title;
        programTitle = prog.title;
        programId = prog.id;
        if (idx > 0) prevLesson = lvl.lessons[idx - 1];
        if (idx < lvl.lessons.length - 1) nextLesson = lvl.lessons[idx + 1];
        break;
      }
    }
    if (lesson) break;
  }

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold mb-2">Lesson not found</h2>
        <Link href="/dashboard/student/courses"><Button variant="outline">Back to Programs</Button></Link>
      </div>
    );
  }

  const [completed, setCompleted] = useState(lesson.completed);
  const [currentTab, setCurrentTab] = useState("video");

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <Link href={`/dashboard/student/courses/${programId}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> {programTitle}
        </Link>
        <Badge variant="outline" className="text-xs">{lesson.duration}</Badge>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">{lesson.title}</h2>
        <p className="text-sm text-muted-foreground">{levelTitle} &middot; {programTitle}</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="overflow-hidden">
            <div className="relative bg-black aspect-video flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="flex flex-col items-center gap-3 z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md group-hover:bg-white/30 transition-all group-hover:scale-110">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
                <span className="text-white/80 text-sm font-medium">Play Lesson Video</span>
              </div>
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
            </div>
            <div className="p-4 flex items-center gap-4 border-t border-border">
              <Button variant="ghost" size="sm" className="gap-2"><Maximize className="h-4 w-4" /> Fullscreen</Button>
              <Button variant="ghost" size="sm" className="gap-2"><Download className="h-4 w-4" /> Download</Button>
            </div>
          </Card>

          <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
            <TabsList className="w-full justify-start rounded-xl bg-muted/50 p-1 h-auto">
              <TabsTrigger value="video" className="rounded-lg gap-2"><Play className="h-4 w-4" /> Video</TabsTrigger>
              <TabsTrigger value="pdf" className="rounded-lg gap-2"><FileText className="h-4 w-4" /> PDF Notes</TabsTrigger>
              <TabsTrigger value="vocab" className="rounded-lg gap-2"><BookOpen className="h-4 w-4" /> Vocabulary</TabsTrigger>
              <TabsTrigger value="audio" className="rounded-lg gap-2"><Headphones className="h-4 w-4" /> Audio</TabsTrigger>
            </TabsList>

            <TabsContent value="video" className="mt-4">
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold mb-3">Lesson Notes</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">• Introduction to today&apos;s topic and learning objectives.</li>
                    <li className="flex items-start gap-2">• Step-by-step explanation with examples from the Quran.</li>
                    <li className="flex items-start gap-2">• Common mistakes to avoid and tips for improvement.</li>
                    <li className="flex items-start gap-2">• Practice exercises to reinforce the lesson.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pdf" className="mt-4">
              <Card>
                <CardContent className="p-5 text-center text-muted-foreground">
                  <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p className="font-medium mb-1">Lesson PDF Materials</p>
                  <p className="text-sm mb-4">Download the lesson notes and practice sheets.</p>
                  <Button variant="outline" className="gap-2"><Download className="h-4 w-4" /> Download PDF</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vocab" className="mt-4">
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold mb-3">Key Vocabulary</h4>
                  <div className="space-y-2">
                    {[
                      { arabic: "بِسْمِ", english: "In the name of", example: "بِسْمِ اللَّهِ" },
                      { arabic: "الرَّحْمَٰنِ", english: "The Most Gracious", example: "الرَّحْمَٰنِ الرَّحِيمِ" },
                      { arabic: "الرَّحِيمِ", english: "The Most Merciful", example: "الرَّحْمَٰنِ الرَّحِيمِ" },
                    ].map((v) => (
                      <div key={v.arabic} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                        <div>
                          <p className="text-lg font-arabic">{v.arabic}</p>
                          <p className="text-xs text-muted-foreground">{v.english}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{v.example}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="audio" className="mt-4">
              <Card>
                <CardContent className="p-5 text-center text-muted-foreground">
                  <Headphones className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p className="font-medium mb-1">Audio Recitation</p>
                  <p className="text-sm mb-4">Listen to the correct pronunciation and recitation.</p>
                  <div className="max-w-sm mx-auto p-4 rounded-xl bg-muted/50">
                    <div className="flex items-center gap-4">
                      <Button size="icon" variant="default" className="rounded-full h-10 w-10"><Play className="h-5 w-5 ml-0.5" /></Button>
                      <div className="flex-1">
                        <div className="h-1.5 rounded-full bg-border overflow-hidden">
                          <div className="w-1/3 h-full rounded-full bg-primary" />
                        </div>
                      </div>
                      <span className="text-xs">01:24 / 03:45</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {(lesson.type === "homework" || lesson.type === "quiz") && (
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm mb-1">
                    {lesson.type === "quiz" ? "Quiz Available" : "Homework Assignment"}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {lesson.type === "quiz" ? "Test your understanding of this lesson." : "Submit your practice recording or file."}
                  </p>
                </div>
                <Link href={lesson.type === "quiz" ? `/dashboard/student/quiz/${lesson.id}` : `/dashboard/student/homework/${lesson.id}`}>
                  <Button size="sm" className="shrink-0">
                    {lesson.type === "quiz" ? "Start Quiz" : "Submit Homework"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Lesson Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <button
                onClick={() => setCompleted(!completed)}
                className={cn(
                  "w-full p-4 rounded-xl border-2 transition-all flex items-center gap-3",
                  completed ? "border-success bg-success/5" : "border-border hover:border-primary/30"
                )}
              >
                <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-xl transition-all",
                  completed ? "bg-success text-white" : "bg-muted text-muted-foreground"
                )}>
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">{completed ? "Completed" : "Mark as Complete"}</p>
                  <p className="text-xs text-muted-foreground">{completed ? "Great job!" : "Click when finished"}</p>
                </div>
              </button>

              <Separator />

              <div className="space-y-1">
                {prevLesson && (
                  <Link href={`/dashboard/student/lesson/${prevLesson.id}`} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    <ChevronLeft className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">Previous</p>
                      <p className="text-sm font-medium truncate">{prevLesson.title}</p>
                    </div>
                  </Link>
                )}
                {nextLesson && !nextLesson.locked && (
                  <Link href={`/dashboard/student/lesson/${nextLesson.id}`} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted-foreground">Next</p>
                      <p className="text-sm font-medium truncate">{nextLesson.title}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full gap-2 rounded-xl text-sm">
                <MessageSquare className="h-4 w-4" /> Ask Teacher
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
