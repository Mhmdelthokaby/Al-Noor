"use client";

import { motion } from "framer-motion";
import { Clock, Users, Star, Award, Calendar, BookOpen, Video, BarChart3 } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { teacherStats, teacherMonthlyHours, teacherUpcomingClasses, teacherStudents } from "@/lib/data";

export default function TeacherDashboard() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-bold tracking-tight mb-1">Welcome back, Sheikh Ahmed</h2>
        <p className="text-muted-foreground text-sm">Your teaching overview for today.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Total Hours" value={`${teacherStats.totalHours}h`} change={8} icon={<Clock className="h-5 w-5" />} variant="info" />
        <StatCard title="This Month" value={`${teacherStats.thisMonth}h`} change={5} icon={<BarChart3 className="h-5 w-5" />} variant="default" />
        <StatCard title="My Students" value={teacherStats.students} change={3} icon={<Users className="h-5 w-5" />} variant="success" />
        <StatCard title="Rating" value={teacherStats.rating} icon={<Star className="h-5 w-5" />} variant="gold" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Monthly Teaching Hours</CardTitle>
                <p className="text-sm text-muted-foreground">Total: {teacherStats.thisMonth}h this month</p>
              </div>
              <Badge variant="success">+12%</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-2 h-32">
              {teacherMonthlyHours.map((d) => (
                <div key={d.month} className="flex flex-col items-center flex-1 h-full justify-end">
                  <div
                    className="w-full max-w-[32px] rounded-t-md bg-gradient-to-t from-primary to-primary-light transition-all hover:opacity-80"
                    style={{ height: `${(d.hours / 50) * 100}%` }}
                  />
                  <span className="text-[10px] text-muted-foreground mt-1.5">{d.month}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Upcoming Classes</CardTitle>
              <Button variant="ghost" size="sm" className="gap-1 text-xs">
                <Calendar className="h-3 w-3" /> View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            {teacherUpcomingClasses.slice(0, 4).map((cls) => (
              <div key={cls.date + cls.student} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <Video className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{cls.student}</p>
                  <p className="text-xs text-muted-foreground">{cls.course} &middot; {cls.duration}</p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">{cls.date}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>My Students</CardTitle>
              <p className="text-sm text-muted-foreground">{teacherStudents.length} active students</p>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  {["Student", "Level", "Progress", "Lessons", "Attendance", ""].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {teacherStudents.map((s) => (
                  <tr key={s.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={s.avatar} />
                          <AvatarFallback>{s.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{s.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3"><Badge variant="secondary" size="sm">{s.level}</Badge></td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-1.5 rounded-full bg-muted overflow-hidden">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${s.progress}%` }} />
                        </div>
                        <span className="text-xs text-muted-foreground">{s.progress}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{s.lessons}</td>
                    <td className="px-4 py-3 text-sm">{s.attendance}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
            <p className="text-sm text-muted-foreground">{teacherStats.achievements} unlocked</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {["Perfect Attendance", "1000 Lessons", "5-Star Teacher", "Early Bird", "Dedicated Mentor"].map((a) => (
                <div key={a} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted text-xs font-medium">
                  <Award className="h-3.5 w-3.5 text-accent" />
                  {a}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Reviews</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Aisha R.", rating: 5, text: "Excellent teacher, very patient!" },
              { name: "Mariam S.", rating: 5, text: "Best Tajweed teacher I've had." },
              { name: "Yusuf I.", rating: 4, text: "Great explanations of rules." },
            ].map((r) => (
              <div key={r.name} className="p-3 rounded-xl bg-muted/50">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium">{r.name}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start gap-3 rounded-xl" variant="outline">
              <Video className="h-4 w-4" /> Start Meeting
            </Button>
            <Button className="w-full justify-start gap-3 rounded-xl" variant="outline">
              <Users className="h-4 w-4" /> View Students
            </Button>
            <Button className="w-full justify-start gap-3 rounded-xl" variant="outline">
              <Calendar className="h-4 w-4" /> Open Calendar
            </Button>
            <Button className="w-full justify-start gap-3 rounded-xl" variant="outline">
              <BookOpen className="h-4 w-4" /> Update Profile
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
