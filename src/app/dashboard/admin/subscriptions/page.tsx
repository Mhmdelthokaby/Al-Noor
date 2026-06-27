"use client";

import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { subscriptions } from "@/lib/data";

export default function AdminSubscriptions() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Subscriptions</h2>
          <p className="text-sm text-muted-foreground">{subscriptions.filter(s => s.status === "active").length} active subscriptions</p>
        </div>
        <Button className="gap-2">Manage Plans</Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
          <TabsTrigger value="paused">Paused</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      {["Student", "Plan", "Amount", "Start Date", "Next Billing", "Renewal", "Status", ""].map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptions.map((sub) => (
                      <tr key={sub.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                        <td className="px-4 py-3 text-sm font-medium">{sub.student}</td>
                        <td className="px-4 py-3">
                          <Badge variant={sub.plan === "Premium" ? "gold" : sub.plan === "Standard" ? "default" : "secondary"}>{sub.plan}</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">${sub.amount}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{sub.startDate}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{sub.nextBilling}</td>
                        <td className="px-4 py-3">
                          <Badge variant={sub.renewal === "auto" ? "success" : "warning"} size="sm">
                            {sub.renewal === "auto" ? "Auto" : "Manual"}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant={sub.status === "active" ? "success" : sub.status === "expired" ? "danger" : "warning"}>
                            {sub.status}
                          </Badge>
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
