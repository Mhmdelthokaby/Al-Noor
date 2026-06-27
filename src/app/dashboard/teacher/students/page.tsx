"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { teacherStudents } from "@/lib/data";

export default function TeacherStudents() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">My Students</h2>
        <p className="text-sm text-muted-foreground">{teacherStudents.length} active students</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  {["Student", "Level", "Progress", "Lessons", "Attendance", "Status"].map((h) => (
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
                        <div className="w-24 h-1.5 rounded-full bg-muted overflow-hidden">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${s.progress}%` }} />
                        </div>
                        <span className="text-xs text-muted-foreground">{s.progress}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{s.lessons}</td>
                    <td className="px-4 py-3">
                      <span className={s.attendance >= 90 ? "text-success" : s.attendance >= 80 ? "text-warning" : "text-danger"}>
                        {s.attendance}%
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={s.attendance >= 85 ? "success" : "warning"}>
                        {s.attendance >= 85 ? "Good" : "Needs Improvement"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
