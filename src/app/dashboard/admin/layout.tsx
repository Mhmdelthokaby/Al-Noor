"use client";

import { DashboardSidebar, DashboardTopNav } from "@/components/layout/dashboard-layout";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardSidebar role="admin" />
      <div className="lg:pl-64">
        <DashboardTopNav role="admin" />
        <div className="p-4 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
