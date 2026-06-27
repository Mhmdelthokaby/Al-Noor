"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/lib/data";

export function FeaturedCourses() {
  return (
    <section id="courses" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Featured Courses</h2>
            <p className="text-muted-foreground max-w-2xl">
              Choose from our range of courses designed for all levels, from beginners to advanced learners.
            </p>
          </div>
          <Link href="/pricing">
            <Button variant="outline" className="gap-2">
              View All Courses <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-foreground border-0">
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3">
                  <Badge variant="gold" className="bg-accent/90 backdrop-blur-sm text-white border-0">
                    {course.price}
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-2 line-clamp-1">{course.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{course.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 text-accent fill-accent" />
                    {course.rating}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">by {course.instructor}</span>
                  <Button size="sm" className="rounded-xl">Enroll Now</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
