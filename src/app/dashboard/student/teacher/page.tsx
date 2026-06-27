"use client";

import { Star, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { studentDashboardData } from "@/lib/data";

export default function StudentTeacher() {
  const teacher = studentDashboardData.teacher;

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">My Teacher</h2>
        <p className="text-sm text-muted-foreground">Your assigned Quran teacher</p>
      </div>

      <Card>
        <CardContent className="p-6 lg:p-8 text-center">
          <Avatar className="h-28 w-28 mx-auto mb-4 ring-4 ring-primary/10">
            <AvatarImage src={teacher.avatar} />
            <AvatarFallback>{teacher.name[0]}</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold mb-1">{teacher.name}</h2>
          <p className="text-muted-foreground mb-3">{teacher.specialization}</p>
          <div className="flex items-center justify-center gap-1 mb-4">
            <Star className="h-5 w-5 text-accent fill-accent" />
            <span className="text-lg font-bold">{teacher.rating}</span>
            <span className="text-sm text-muted-foreground">/ 5.0</span>
          </div>
          <div className="flex justify-center gap-3 mb-6">
            <Button className="gap-2 rounded-xl"><MessageSquare className="h-4 w-4" /> Send Message</Button>
            <Button variant="outline" className="rounded-xl">View Full Profile</Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
            {[
              { label: "Next Class", value: teacher.nextClass },
              { label: "Students", value: "28" },
              { label: "Experience", value: "12 years" },
              { label: "Country", value: "Egypt" },
            ].map((s) => (
              <div key={s.label} className="p-3 rounded-xl bg-muted/50">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-sm font-medium">{s.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Teacher Reviews</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: "Mariam S.", rating: 5, text: "Sheikh Ahmed is an amazing teacher. Very patient and clear in explanations.", date: "2 weeks ago" },
            { name: "Yusuf I.", rating: 5, text: "I've improved my Tajweed tremendously. Highly recommended!", date: "1 month ago" },
            { name: "Noor F.", rating: 4, text: "Great teacher, very knowledgeable. Sometimes runs a bit over time.", date: "2 months ago" },
          ].map((r) => (
            <div key={r.name} className="p-4 rounded-xl bg-muted/50">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium">{r.name}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 text-accent fill-accent" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-auto">{r.date}</span>
              </div>
              <p className="text-sm text-muted-foreground">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
