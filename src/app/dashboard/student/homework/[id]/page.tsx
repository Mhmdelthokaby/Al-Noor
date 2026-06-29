"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Upload, Mic, Video, FileText, CheckCircle, X, Play, Trash2, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function HomeworkSubmit() {
  const { id } = useParams<{ id: string }>();
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [recording, setRecording] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Link href="/dashboard/student/courses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Programs
        </Link>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="text-center border-success/30">
            <CardContent className="p-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10 mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-success" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Homework Submitted!</h3>
              <p className="text-muted-foreground mb-2">Your teacher will review and provide feedback shortly.</p>
              <p className="text-xs text-muted-foreground mb-6">You&apos;ll be notified when feedback is available.</p>
              <Link href="/dashboard/student/courses">
                <Button variant="outline">Back to Programs</Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Link href="/dashboard/student/courses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Programs
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-bold tracking-tight mb-1">Submit Homework</h2>
        <p className="text-sm text-muted-foreground">Upload your recording, video, or PDF file</p>
      </motion.div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <Tabs defaultValue="upload">
            <TabsList className="w-full">
              <TabsTrigger value="upload" className="flex-1 gap-2"><Upload className="h-4 w-4" /> Upload File</TabsTrigger>
              <TabsTrigger value="record" className="flex-1 gap-2"><Mic className="h-4 w-4" /> Record Audio</TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="mt-4">
              <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors cursor-pointer" onClick={() => document.getElementById("file-input")?.click()}>
                <Upload className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                <p className="font-medium mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-muted-foreground">PDF, MP3, MP4, or image files (max 50MB)</p>
                <input id="file-input" type="file" className="hidden" onChange={handleFileUpload} accept=".pdf,.mp3,.mp4,.wav,.jpg,.png" />
              </div>

              {file && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 mt-4">
                  <FileText className="h-5 w-5 text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg" onClick={() => setFile(null)}>
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="record" className="mt-4">
              <div className="text-center p-8">
                <div className={cn(
                  "flex h-24 w-24 items-center justify-center rounded-full mx-auto mb-4 transition-all cursor-pointer",
                  recording ? "bg-danger/10 animate-pulse-soft" : "bg-muted hover:bg-primary/5"
                )}
                  onClick={() => setRecording(!recording)}
                >
                  {recording ? <Square className="h-8 w-8 text-danger" /> : <Mic className="h-8 w-8 text-muted-foreground" />}
                </div>
                <p className="font-medium mb-1">{recording ? "Recording... Click to stop" : "Click to start recording"}</p>
                <p className="text-xs text-muted-foreground">Recite the lesson aloud for your teacher to review</p>
                {recording && (
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="w-1 bg-danger rounded-full animate-pulse-soft" style={{ height: `${10 + Math.random() * 20}px`, animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    <span className="text-sm font-mono ml-2">00:00</span>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={() => window.history.back()}>Cancel</Button>
            <Button className="flex-1 gap-2" onClick={() => setSubmitted(true)} disabled={!file && !recording}>
              <Upload className="h-4 w-4" /> Submit Homework
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
