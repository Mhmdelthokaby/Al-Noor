"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Calendar, DollarSign, CreditCard, Bell, UserPlus, BookOpen, ArrowRight } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { RevenueChart, LineChart } from "@/components/dashboard/charts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { adminStats, revenueData, studentGrowthData, todaySchedule, notifications } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-bold tracking-tight mb-1">Good morning, Admin</h2>
        <p className="text-muted-foreground text-sm">Here&apos;s what&apos;s happening at Al-Noor Academy today.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard title="Total Students" value={adminStats.totalStudents} change={adminStats.studentGrowth} icon={<GraduationCap className="h-5 w-5" />} variant="info" />
        <StatCard title="Total Teachers" value={adminStats.totalTeachers} change={adminStats.teacherGrowth} icon={<Users className="h-5 w-5" />} variant="success" />
        <StatCard title="Today&apos;s Classes" value={adminStats.todaysClasses} change={adminStats.classGrowth} icon={<Calendar className="h-5 w-5" />} variant="default" />
        <StatCard title="Revenue" value={`$${adminStats.revenue.toLocaleString()}`} change={adminStats.revenueGrowth} icon={<DollarSign className="h-5 w-5" />} variant="default" />
        <StatCard title="Active Subs" value={adminStats.activeSubscriptions} icon={<CreditCard className="h-5 w-5" />} variant="success" />
        <StatCard title="Pending Payments" value={adminStats.pendingPayments} icon={<Bell className="h-5 w-5" />} variant="warning" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Revenue Overview</CardTitle>
              <p className="text-sm text-muted-foreground">Monthly revenue vs target</p>
            </div>
            <Badge variant="success">+12.5% this month</Badge>
          </CardHeader>
          <CardContent>
            <RevenueChart data={revenueData} height={220} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Student Growth</CardTitle>
            <p className="text-sm text-muted-foreground">+{adminStats.studentGrowth}% this month</p>
          </CardHeader>
          <CardContent>
            <LineChart data={studentGrowthData} height={200} />
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Today&apos;s Schedule</CardTitle>
            <Button variant="ghost" size="sm" className="gap-1 text-xs">
              View All <ArrowRight className="h-3 w-3" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {todaySchedule.map((item) => (
                <div
                  key={item.time}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors"
                >
                  <div className={cn(
                    "flex h-2 w-2 rounded-full shrink-0",
                    item.status === "completed" && "bg-success",
                    item.status === "in-progress" && "bg-accent animate-pulse-soft",
                    item.status === "scheduled" && "bg-muted-foreground"
                  )} />
                  <span className="text-xs font-medium w-16 text-muted-foreground">{item.time}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.student}</p>
                    <p className="text-xs text-muted-foreground">{item.course} with {item.teacher}</p>
                  </div>
                  <Badge
                    variant={item.status === "completed" ? "success" : item.status === "in-progress" ? "warning" : "secondary"}
                    size="sm"
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Notifications</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-2">
            {notifications.map((n) => (
              <div key={n.id} className="p-3 rounded-xl hover:bg-muted transition-colors cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className={cn(
                    "flex h-2 w-2 rounded-full mt-1.5 shrink-0",
                    n.type === "info" && "bg-info",
                    n.type === "success" && "bg-success",
                    n.type === "warning" && "bg-warning",
                    n.type === "danger" && "bg-danger",
                  )} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{n.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{n.description}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{n.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div>
        <CardHeader className="px-0 pt-0">
          <div className="flex items-center justify-between">
            <CardTitle>Quick Actions</CardTitle>
          </div>
        </CardHeader>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <UserPlus className="h-5 w-5" />, label: "Add Teacher", desc: "Invite a new teacher" },
            { icon: <GraduationCap className="h-5 w-5" />, label: "Add Student", desc: "Enroll a new student" },
            { icon: <BookOpen className="h-5 w-5" />, label: "Create Course", desc: "Design a new course" },
            { icon: <Users className="h-5 w-5" />, label: "Assign Teacher", desc: "Assign to student" },
          ].map((action) => (
            <button
              key={action.label}
              className="flex flex-col items-start gap-2 p-4 rounded-2xl border border-border bg-card shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all text-left"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
                {action.icon}
              </div>
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
