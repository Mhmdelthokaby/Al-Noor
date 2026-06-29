"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Headphones, Video, FileText, Star, CheckCircle, XCircle, MessageSquare, ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { homeworkSubmissions } from "@/lib/data";
import { cn } from "@/lib/utils";

const typeIcons: Record<string, React.ReactNode> = {
  audio: <Headphones className="h-4 w-4" />,
  video: <Video className="h-4 w-4" />,
  pdf: <FileText className="h-4 w-4" />,
};

export default function HomeworkReview() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [grade, setGrade] = useState<number>(0);

  const filtered = homeworkSubmissions.filter((s) =>
    s.student.toLowerCase().includes(search.toLowerCase())
  );

  const current = homeworkSubmissions.find((s) => s.id === selected);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Homework Review</h2>
        <p className="text-sm text-muted-foreground">{homeworkSubmissions.filter(s => s.status === "pending").length} submissions pending review</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search students..." className="pl-9 rounded-xl" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </CardHeader>
          <CardContent className="p-0 space-y-0">
            {filtered.map((sub) => (
              <button
                key={sub.id}
                onClick={() => { setSelected(sub.id); setFeedback(sub.feedback || ""); setGrade(sub.grade || 0); }}
                className={cn(
                  "w-full text-left px-4 py-3 border-b border-border/50 transition-colors",
                  selected === sub.id ? "bg-primary/5 border-l-2 border-l-primary" : "hover:bg-muted/50"
                )}
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={sub.studentAvatar} />
                    <AvatarFallback>{sub.student[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{sub.student}</p>
                    <p className="text-xs text-muted-foreground truncate">{sub.lessonTitle}</p>
                  </div>
                  <Badge variant={sub.status === "pending" ? "warning" : "success"} size="sm">
                    {sub.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">{typeIcons[sub.type]} {sub.type}</span>
                  {sub.duration && <span>{sub.duration}</span>}
                  <span>{new Date(sub.submittedAt).toLocaleDateString()}</span>
                </div>
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="p-8 text-center text-sm text-muted-foreground">No submissions found</div>
            )}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          {current ? (
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={current.studentAvatar} />
                    <AvatarFallback>{current.student[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{current.student}</h3>
                    <p className="text-sm text-muted-foreground">{current.program} &middot; {current.lessonTitle}</p>
                  </div>
                </div>
                <Badge variant={current.status === "pending" ? "warning" : "success"}>{current.status}</Badge>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  {typeIcons[current.type]}
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {current.type === "audio" ? "Audio Recording" : current.type === "video" ? "Video Recording" : "PDF Document"}
                  </p>
                  <p className="text-xs text-muted-foreground">{current.duration ? `Duration: ${current.duration}` : "File upload"}</p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto gap-2">
                  <Play className="h-4 w-4" /> Preview
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Grade (0-100)</label>
                  <div className="flex items-center gap-3">
                    <Input
                      type="number"
                      min={0}
                      max={100}
                      value={grade || ""}
                      onChange={(e) => setGrade(Number(e.target.value))}
                      className="w-24 rounded-xl"
                    />
                    <div className="flex items-center gap-1">
                      {grade >= 90 ? <Star className="h-5 w-5 text-accent fill-accent" /> : grade >= 70 ? <Star className="h-5 w-5 text-primary" /> : <Star className="h-5 w-5 text-muted-foreground" />}
                      <span className="text-sm font-medium">{grade || "—"}</span>
                    </div>
                    <Badge variant={grade >= 70 ? "success" : grade >= 50 ? "warning" : "danger"} size="sm">
                      {grade >= 70 ? "Pass" : grade >= 50 ? "Needs Work" : "Fail"}
                    </Badge>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Feedback</label>
                  <textarea
                    rows={4}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Write your feedback for the student..."
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50 transition-all resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <Button className="gap-2"><CheckCircle className="h-4 w-4" /> Submit Grade & Feedback</Button>
                  <Button variant="outline" className="gap-2"><MessageSquare className="h-4 w-4" /> Request Resubmission</Button>
                </div>
              </div>
            </CardContent>
          ) : (
            <CardContent className="p-16 text-center text-muted-foreground">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p className="font-medium">Select a submission to review</p>
              <p className="text-sm">Choose a student&apos;s homework from the list</p>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
