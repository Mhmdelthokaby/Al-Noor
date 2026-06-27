"use client";

import { CreditCard, Download, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { studentDashboardData } from "@/lib/data";

export default function StudentPayments() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Payments</h2>
          <p className="text-sm text-muted-foreground">Your payment history and invoices</p>
        </div>
        <Button variant="outline" className="gap-2"><Download className="h-4 w-4" /> Download All</Button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-primary to-primary-dark text-white border-0 shadow-elevated">
          <CardContent className="p-5">
            <CreditCard className="h-8 w-8 mb-3 text-white/70" />
            <p className="text-xs text-white/70">Current Plan</p>
            <p className="text-2xl font-bold">${studentDashboardData.planPrice}</p>
            <p className="text-xs text-white/70">{studentDashboardData.plan} Plan &middot; Monthly</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground mb-1">Total Paid</p>
            <p className="text-2xl font-bold">$597</p>
            <p className="text-xs text-muted-foreground">3 invoices paid</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground mb-1">Next Payment</p>
            <p className="text-2xl font-bold">$199</p>
            <p className="text-xs text-muted-foreground">Due Sep 15, 2024</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  {["Invoice", "Amount", "Date", "Status", ""].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {studentDashboardData.payments.map((p) => (
                  <tr key={p.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium">{p.id}</td>
                    <td className="px-4 py-3 text-sm font-medium">${p.amount}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{p.date}</td>
                    <td className="px-4 py-3">
                      <Badge variant={p.status === "paid" ? "success" : "warning"}>{p.status}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
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
