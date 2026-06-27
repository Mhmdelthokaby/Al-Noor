"use client";

import { useState } from "react";
import { Search, Grid3X3, List, MoreHorizontal, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { courses } from "@/lib/data";

export default function AdminCourses() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Courses</h2>
          <p className="text-sm text-muted-foreground">{courses.length} active courses</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-xl"><Grid3X3 className="h-4 w-4" /></Button>
          <Button variant="outline" size="icon" className="rounded-xl"><List className="h-4 w-4" /></Button>
          <Button className="gap-2">Create Course</Button>
        </div>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search courses..." className="pl-9 rounded-xl" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden hover:shadow-elevated transition-all">
            <div className="h-40 overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-1">
                <Badge variant="secondary" size="sm">{course.level}</Badge>
                <Badge variant="gold" size="sm">{course.price}</Badge>
              </div>
              <CardTitle className="text-base">{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{course.description}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{course.students}</div>
                <div className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-accent" />{course.rating}</div>
                <div className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="default" className="flex-1 rounded-xl">Edit</Button>
                <Button size="sm" variant="outline" className="rounded-xl">View</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
