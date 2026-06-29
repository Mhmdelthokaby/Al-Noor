"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Video, Users, Clock, MessageSquare, CheckCircle, Copy, Share2, Monitor, Mic, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function LiveClassRoom() {
  const { id } = useParams<{ id: string }>();
  const studentName = id === "1" ? "Yusuf Ibrahim" : id === "2" ? "Ali Mohammed" : "Student";

  const attendees = [
    { name: studentName, avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", status: "present" },
    { name: "Aisha Rahman", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", status: "present" },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <Link href="/dashboard/teacher" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>
        <Badge variant="success" size="lg" className="animate-pulse-soft">Live</Badge>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-bold tracking-tight mb-1">Live Class Room</h2>
        <p className="text-sm text-muted-foreground">Class with {studentName} &middot; Islamic Studies</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
              <div className="text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary mx-auto mb-4">
                  <Video className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ready to Start</h3>
                <p className="text-sm text-muted-foreground mb-6">Click below to start your live session</p>
                <div className="flex gap-3 justify-center">
                  <Button size="lg" className="gap-3 shadow-elevated">
                    <Video className="h-5 w-5" /> Start Zoom Meeting
                  </Button>
                  <Button variant="outline" size="lg" className="gap-3">
                    <Copy className="h-5 w-5" /> Copy Link
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 flex items-center gap-4 border-t border-border">
              <Button variant="ghost" size="sm" className="gap-2"><Mic className="h-4 w-4" /> Mic</Button>
              <Button variant="ghost" size="sm" className="gap-2"><Phone className="h-4 w-4" /> Call</Button>
              <Button variant="ghost" size="sm" className="gap-2"><Monitor className="h-4 w-4" /> Screen</Button>
              <Button variant="ghost" size="sm" className="gap-2 ml-auto"><Share2 className="h-4 w-4" /> Share</Button>
            </div>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Session Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                rows={4}
                placeholder="Write your class notes here..."
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 transition-all resize-none"
              />
              <div className="flex gap-2 mt-3">
                <Button size="sm" className="gap-2"><CheckCircle className="h-4 w-4" /> Save Notes</Button>
                <Button variant="outline" size="sm">Mark Attendance</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Attendance</CardTitle>
                <Badge variant="success" size="sm">{attendees.length} present</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {attendees.map((a) => (
                <div key={a.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={a.avatar} />
                    <AvatarFallback>{a.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm flex-1">{a.name}</span>
                  <div className="flex h-2 w-2 rounded-full bg-success" />
                </div>
              ))}
              <Separator />
              <Button variant="outline" size="sm" className="w-full gap-2">
                <Users className="h-4 w-4" /> Mark All Present
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start gap-2">End Class & Record Attendance</Button>
              <Button variant="outline" size="sm" className="w-full justify-start gap-2">Extend Class Time</Button>
              <Button variant="outline" size="sm" className="w-full justify-start gap-2">Send Reminder</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
