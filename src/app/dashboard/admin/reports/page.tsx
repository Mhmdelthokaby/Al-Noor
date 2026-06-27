"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RevenueChart, LineChart } from "@/components/dashboard/charts";
import { revenueData, studentGrowthData } from "@/lib/data";

export default function AdminReports() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Reports</h2>
        <p className="text-sm text-muted-foreground">Analytics and insights for your academy</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Report</CardTitle>
            <p className="text-sm text-muted-foreground">Monthly revenue performance</p>
          </CardHeader>
          <CardContent>
            <RevenueChart data={revenueData} height={250} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Student Growth</CardTitle>
            <p className="text-sm text-muted-foreground">Monthly student enrollment</p>
          </CardHeader>
          <CardContent>
            <LineChart data={studentGrowthData} height={250} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Attendance Rate</CardTitle>
            <p className="text-sm text-muted-foreground">Average class attendance</p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-[200px] text-center">
              <div>
                <p className="text-5xl font-bold text-gradient">92%</p>
                <p className="text-sm text-muted-foreground mt-2">Overall attendance rate</p>
                <p className="text-xs text-muted-foreground mt-1">+3.2% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Subscription Distribution</CardTitle>
            <p className="text-sm text-muted-foreground">Plan breakdown</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: "Premium", count: 156, pct: 38, color: "bg-accent" },
                { label: "Standard", count: 189, pct: 46, color: "bg-primary" },
                { label: "Starter", count: 67, pct: 16, color: "bg-primary-light" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-muted-foreground">{item.count} ({item.pct}%)</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
