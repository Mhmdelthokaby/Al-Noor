"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Download, CheckCircle, Clock, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { certificates } from "@/lib/data";

export default function StudentCertificates() {
  return (
    <div className="space-y-6 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-bold tracking-tight mb-1">My Certificates</h2>
        <p className="text-sm text-muted-foreground">Certificates earned for completed levels</p>
      </motion.div>

      {certificates.length === 0 ? (
        <Card className="text-center py-16">
          <CardContent>
            <Award className="h-16 w-16 mx-auto mb-4 text-muted-foreground/30" />
            <h3 className="text-lg font-semibold mb-2">No Certificates Yet</h3>
            <p className="text-sm text-muted-foreground mb-4">Complete your program levels to earn certificates.</p>
            <Link href="/dashboard/student/courses"><Button>View My Programs</Button></Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-elevated transition-all text-center">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 border-b border-border">
                  <Award className="h-16 w-16 mx-auto text-accent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-sm">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-xs text-muted-foreground">{cert.program}</p>
                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {cert.issuedAt}</span>
                    <Badge variant="success" size="sm">Grade: {cert.grade}</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-2 mt-2">
                    <Download className="h-4 w-4" /> Download PDF
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
