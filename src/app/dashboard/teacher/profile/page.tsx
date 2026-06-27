"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Globe, Award, BookOpen, Clock, CheckCircle, Users } from "lucide-react";
import { teachers } from "@/lib/data";

const teacher = teachers[0];

export default function TeacherProfile() {
  return (
    <div className="space-y-6 max-w-4xl">
      <Card>
        <CardContent className="p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <Avatar className="h-24 w-24 ring-4 ring-primary/10">
              <AvatarImage src={teacher.avatar} />
              <AvatarFallback>{teacher.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-2xl font-bold">{teacher.name}</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />{teacher.country}
                    <span className="mx-2">&middot;</span>
                    <Star className="h-4 w-4 text-accent fill-accent" />
                    {teacher.rating} ({teacher.students} students)
                  </div>
                </div>
                <Badge variant="success" size="lg">Active</Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{teacher.bio}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {teacher.specialties.map((s) => (
                  <Badge key={s} variant="default">{s}</Badge>
                ))}
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: <Globe className="h-4 w-4" />, label: "Languages", value: teacher.languages.join(", ") },
                  { icon: <Award className="h-4 w-4" />, label: "Experience", value: teacher.experience },
                  { icon: <BookOpen className="h-4 w-4" />, label: "Lessons", value: `${teacher.lessons.toLocaleString()}+` },
                  { icon: <Clock className="h-4 w-4" />, label: "Availability", value: "Mon-Sat, 8AM-8PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 p-3 rounded-xl bg-muted/50">
                    <div className="text-primary">{item.icon}</div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-xs font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Ijazah in Hafs an Asim", issuer: "Al-Azhar University", year: "2015" },
              { name: "PhD in Islamic Studies", issuer: "University of Medina", year: "2018" },
              { name: "Teaching Certification", issuer: "International Quran Council", year: "2019" },
            ].map((cert) => (
              <div key={cert.name} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <Award className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <p className="text-sm font-medium">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer} &middot; {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Teaching Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Users className="h-5 w-5" />, label: "Students", value: "18" },
              { icon: <Clock className="h-5 w-5" />, label: "Hours This Month", value: "42h" },
              { icon: <Star className="h-5 w-5" />, label: "Rating", value: "4.8" },
              { icon: <CheckCircle className="h-5 w-5" />, label: "Completion Rate", value: "97%" },
            ].map((s) => (
              <div key={s.label} className="text-center p-4 rounded-xl bg-muted/50">
                <div className="flex justify-center mb-2 text-primary">{s.icon}</div>
                <p className="text-lg font-bold">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
