"use client";

import { motion } from "framer-motion";
import { CreditCard, Calendar, Star, BookOpen, TrendingUp, Clock, CheckCircle, MessageSquare } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { studentDashboardData } from "@/lib/data";

export default function StudentDashboard() {
  const data = studentDashboardData;

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-bold tracking-tight mb-1">Assalamu Alaikum, {data.name}</h2>
        <p className="text-muted-foreground text-sm">Your learning journey at a glance.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary to-primary-dark text-white border-0 shadow-elevated">
          <CardContent className="p-5">
            <p className="text-xs font-medium text-white/70 mb-1">Current Plan</p>
            <p className="text-lg font-bold">{data.plan}</p>
            <p className="text-xs text-white/70">${data.planPrice}/month</p>
          </CardContent>
        </Card>
        <StatCard
          title="Remaining Classes"
          value={`${data.remainingClasses}/${data.totalClasses}`}
          icon={<BookOpen className="h-5 w-5" />}
          variant="info"
        />
        <StatCard title="Attendance" value={`${data.attendance}%`} change={2} icon={<CheckCircle className="h-5 w-5" />} variant="success" />
        <StatCard title="Progress" value={`${data.progress}%`} change={5} icon={<TrendingUp className="h-5 w-5" />} variant="default" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Upcoming Lessons</CardTitle>
              <Button variant="ghost" size="sm" className="gap-1 text-xs">
                <Calendar className="h-3 w-3" /> View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {data.upcomingLessons.map((lesson) => (
              <div key={lesson.date} className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{lesson.course}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{lesson.date}</span>
                    <span>&middot;</span>
                    <Clock className="h-3 w-3" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="rounded-xl shrink-0">Join</Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>My Teacher</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <Avatar className="h-20 w-20 mx-auto mb-3 ring-4 ring-primary/10">
              <AvatarImage src={data.teacher.avatar} />
              <AvatarFallback>{data.teacher.name[0]}</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold">{data.teacher.name}</h3>
            <p className="text-xs text-muted-foreground mb-2">{data.teacher.specialization}</p>
            <div className="flex items-center justify-center gap-1 mb-3">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span className="text-sm font-medium">{data.teacher.rating}</span>
            </div>
            <div className="p-3 rounded-xl bg-muted/50 mb-3">
              <p className="text-xs text-muted-foreground">Next Class</p>
              <p className="text-sm font-medium">{data.teacher.nextClass}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1 rounded-xl gap-2">
                <MessageSquare className="h-4 w-4" /> Message
              </Button>
              <Button size="sm" variant="outline" className="rounded-xl">Profile</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Payment History</CardTitle>
              <Button variant="ghost" size="sm" className="text-xs">View All</Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {data.payments.map((p) => (
              <div key={p.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted">
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{p.id}</p>
                    <p className="text-xs text-muted-foreground">{p.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">${p.amount}</p>
                  <Badge variant={p.status === "paid" ? "success" : "warning"} size="sm">{p.status}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>My Reviews</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {data.reviews.map((r) => (
              <div key={r.date} className="p-3 rounded-xl bg-muted/50">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium">{r.teacher}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-accent fill-accent" />
                    ))}
                  </div>
                  <span className="text-[10px] text-muted-foreground ml-auto">{r.date}</span>
                </div>
                <p className="text-xs text-muted-foreground">&ldquo;{r.comment}&rdquo;</p>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full rounded-xl">Write a Review</Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <CardHeader className="px-0 pt-0">
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <BookOpen className="h-5 w-5" />, label: "Book Class", desc: "Schedule your next lesson" },
            { icon: <TrendingUp className="h-5 w-5" />, label: "Upgrade Plan", desc: "Get more classes per week" },
            { icon: <MessageSquare className="h-5 w-5" />, label: "Contact Teacher", desc: "Send a message" },
            { icon: <CreditCard className="h-5 w-5" />, label: "View Payments", desc: "Check invoices" },
          ].map((action) => (
            <button
              key={action.label}
              className="flex flex-col items-start gap-2 p-4 rounded-2xl border border-border bg-card shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all text-left"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">{action.icon}</div>
              <div>
                <p className="text-sm font-medium">{action.label}</p>
                <p className="text-xs text-muted-foreground">{action.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
