"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { teacherUpcomingClasses } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function TeacherCalendar() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Calendar</h2>
        <p className="text-sm text-muted-foreground">Your class schedule</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>August 2024</CardTitle>
              <div className="flex gap-1">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-muted transition-colors">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-muted transition-colors">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="text-center text-xs font-medium text-muted-foreground py-2">{d}</div>
              ))}
              {Array.from({ length: 31 }).map((_, i) => {
                const day = i + 1;
                const hasClass = [5, 6, 7, 12, 13, 14, 19, 20, 21, 26, 27, 28].includes(day);
                const isToday = day === 28;
                return (
                  <button
                    key={day}
                    className={cn(
                      "flex flex-col items-center justify-center h-12 rounded-xl text-sm transition-all",
                      isToday && "bg-primary text-white font-bold shadow-soft",
                      hasClass && !isToday && "bg-primary/5 text-primary font-medium",
                      !hasClass && !isToday && "hover:bg-muted"
                    )}
                  >
                    <span>{day}</span>
                    {hasClass && <span className="flex h-1 w-1 rounded-full bg-accent mt-0.5" />}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Classes</CardTitle>
            <p className="text-sm text-muted-foreground">Next 6 sessions</p>
          </CardHeader>
          <CardContent className="space-y-2">
            {teacherUpcomingClasses.map((cls) => (
              <div key={cls.date + cls.student} className="p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-medium">{cls.date}</span>
                </div>
                <p className="text-sm font-medium">{cls.student}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{cls.course}</span>
                  <span>&middot;</span>
                  <span>{cls.duration}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
