"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle, XCircle, AlertCircle, Clock, Trophy, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { quizQuestions } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function QuizView() {
  const { id } = useParams<{ id: string }>();
  const questions = quizQuestions[Number(id)];

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!questions) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold mb-2">Quiz not found</h2>
        <Link href="/dashboard/student/courses"><Button variant="outline">Back to Programs</Button></Link>
      </div>
    );
  }

  const selectAnswer = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmit = () => setSubmitted(true);

  const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0);
  const total = questions.length;
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 70;

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setCurrentQ(0);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <Link href="/dashboard/student/courses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Programs
      </Link>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-2xl font-bold tracking-tight mb-1">Knowledge Check</h2>
        <p className="text-sm text-muted-foreground">{total} questions &middot; Pass: 70%</p>
      </motion.div>

      {submitted ? (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className={cn("border-2 text-center", passed ? "border-success" : "border-danger")}>
            <CardContent className="p-8">
              <div className={cn("flex h-20 w-20 items-center justify-center rounded-full mx-auto mb-4", passed ? "bg-success/10" : "bg-danger/10")}>
                {passed ? <Trophy className="h-10 w-10 text-success" /> : <XCircle className="h-10 w-10 text-danger" />}
              </div>
              <h3 className="text-2xl font-bold mb-2">{passed ? "Congratulations!" : "Keep Practicing!"}</h3>
              <p className="text-muted-foreground mb-4">
                {passed ? "You passed the quiz!" : "You need 70% to pass. Review and try again."}
              </p>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="text-center">
                  <p className="text-4xl font-bold">{score}/{total}</p>
                  <p className="text-xs text-muted-foreground">Correct</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <p className={cn("text-4xl font-bold", passed ? "text-success" : "text-danger")}>{percentage}%</p>
                  <p className="text-xs text-muted-foreground">Score</p>
                </div>
              </div>
              <div className="space-y-3 text-left">
                {questions.map((q, i) => (
                  <div key={i} className={cn("p-3 rounded-xl text-sm", answers[i] === q.correct ? "bg-success/5" : "bg-danger/5")}>
                    <div className="flex items-start gap-2">
                      {answers[i] === q.correct ? <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" /> : <XCircle className="h-4 w-4 text-danger mt-0.5 shrink-0" />}
                      <div>
                        <p className="font-medium">{q.question}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Your answer: {q.options[answers[i]]} {answers[i] !== q.correct && <span className="text-success">Correct: {q.options[q.correct]}</span>}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button onClick={handleRetry} className="mt-6 gap-2">
                <RefreshCw className="h-4 w-4" /> Retry Quiz
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div key={currentQ} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">Question {currentQ + 1} of {total}</Badge>
                  <span className="text-xs text-muted-foreground">{Math.round(((currentQ + 1) / total) * 100)}% complete</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${((currentQ + 1) / total) * 100}%` }} />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6">{questions[currentQ].question}</h3>
                <div className="space-y-3">
                  {questions[currentQ].options.map((opt, oi) => (
                    <button
                      key={oi}
                      onClick={() => selectAnswer(currentQ, oi)}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border-2 transition-all",
                        answers[currentQ] === oi
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/30 hover:bg-muted/50"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium transition-all",
                          answers[currentQ] === oi ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                        )}>
                          {String.fromCharCode(65 + oi)}
                        </div>
                        <span className="text-sm">{opt}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={() => setCurrentQ(Math.max(0, currentQ - 1))} disabled={currentQ === 0}>
                  Previous
                </Button>
                {currentQ < total - 1 ? (
                  <Button onClick={() => setCurrentQ(currentQ + 1)} disabled={answers[currentQ] === undefined}>
                    Next
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={Object.keys(answers).length < total} className="gap-2">
                    <CheckCircle className="h-4 w-4" /> Submit Quiz
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
