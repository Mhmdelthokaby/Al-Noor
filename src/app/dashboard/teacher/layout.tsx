"use client";

import { DashboardSidebar, DashboardTopNav } from "@/components/layout/dashboard-layout";

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardSidebar role="teacher" />
      <div className="lg:pl-64">
        <DashboardTopNav role="teacher" />
        <div className="p-4 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
