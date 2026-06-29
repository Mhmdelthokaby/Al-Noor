"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen, LayoutDashboard, Users, GraduationCap, BookOpenCheck, Award,
  Calendar, CreditCard, BarChart3, Bell, Settings, LogOut,
  ChevronLeft, Menu, X, ChevronDown, UserCircle, MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SidebarProps {
  role: "admin" | "teacher" | "student";
}

const adminLinks = [
  { href: "/dashboard/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/admin/content-builder", label: "Content Builder", icon: BookOpenCheck },
  { href: "/dashboard/admin/teachers", label: "Teachers", icon: Users },
  { href: "/dashboard/admin/students", label: "Students", icon: GraduationCap },
  { href: "/dashboard/admin/subscriptions", label: "Subscriptions", icon: CreditCard },
  { href: "/dashboard/admin/payments", label: "Payments", icon: BarChart3 },
  { href: "/dashboard/admin/reports", label: "Reports", icon: BarChart3 },
  { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
];

const teacherLinks = [
  { href: "/dashboard/teacher", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/teacher/students", label: "My Students", icon: GraduationCap },
  { href: "/dashboard/teacher/homework", label: "Homework Review", icon: BookOpenCheck },
  { href: "/dashboard/teacher/calendar", label: "Calendar", icon: Calendar },
  { href: "/dashboard/teacher/profile", label: "Profile", icon: UserCircle },
];

const studentLinks = [
  { href: "/dashboard/student", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/student/courses", label: "My Programs", icon: BookOpenCheck },
  { href: "/dashboard/student/certificates", label: "Certificates", icon: Award },
  { href: "/dashboard/student/teacher", label: "My Teacher", icon: Users },
  { href: "/dashboard/student/payments", label: "Payments", icon: CreditCard },
  { href: "/dashboard/student/profile", label: "Profile", icon: UserCircle },
];

const roleLabels: Record<string, string> = {
  admin: "Admin",
  teacher: "Teacher",
  student: "Student",
};

export function DashboardSidebar({ role }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const links = role === "admin" ? adminLinks : role === "teacher" ? teacherLinks : studentLinks;

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r border-border bg-card transition-all duration-300 hidden lg:flex flex-col",
        collapsed ? "w-[72px]" : "w-64"
      )}
    >
      <div className={cn("flex items-center h-16 px-4 border-b border-border", collapsed && "justify-center")}>
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shrink-0">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          {!collapsed && <span className="text-lg font-bold tracking-tight">Al-Noor</span>}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn("ml-auto flex h-7 w-7 items-center justify-center rounded-lg hover:bg-muted transition-colors", collapsed && "ml-0")}
        >
          <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>

      {!collapsed && (
        <div className="px-4 py-3 border-b border-border">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/5">
            <div className="flex h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary capitalize">{roleLabels[role]} Dashboard</span>
          </div>
        </div>
      )}

      <nav className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group",
                collapsed && "justify-center px-2",
                active
                  ? "bg-primary text-white shadow-soft"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <Icon className={cn("h-5 w-5 shrink-0", collapsed && "h-5 w-5")} />
              {!collapsed && <span>{link.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className={cn("p-3 border-t border-border", collapsed && "flex flex-col items-center")}>
        <Link
          href="/"
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all",
            collapsed && "justify-center px-2"
          )}
        >
          <LogOut className="h-5 w-5 shrink-0" />
          {!collapsed && <span>Back to Site</span>}
        </Link>
      </div>
    </aside>
  );
}

export function DashboardTopNav({ role }: SidebarProps) {
  const pathname = usePathname();
  const roleLabel = roleLabels[role];

  const getTitle = () => {
    const segment = pathname.split("/").pop();
    if (segment === role) return "Dashboard";
    return segment ? segment.charAt(0).toUpperCase() + segment.slice(1) : "Dashboard";
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/80 backdrop-blur-xl px-4 lg:px-8">
      <div className="flex items-center gap-3 flex-1">
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" className="rounded-xl">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <div>
          <h1 className="text-lg font-semibold tracking-tight">{getTitle()}</h1>
          <p className="text-xs text-muted-foreground capitalize">{roleLabel} Dashboard</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-xl relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[9px] font-bold text-white">3</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <MessageSquare className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2 rounded-xl pl-2 pr-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium leading-tight">Admin User</p>
                <p className="text-[10px] text-muted-foreground capitalize">{roleLabel}</p>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground hidden md:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserCircle className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
