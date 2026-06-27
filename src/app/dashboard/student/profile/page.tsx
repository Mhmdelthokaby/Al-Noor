"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { studentDashboardData } from "@/lib/data";

export default function StudentProfile() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">My Profile</h2>
        <p className="text-sm text-muted-foreground">Manage your personal information</p>
      </div>

      <Card>
        <CardContent className="p-6 flex items-center gap-6">
          <Avatar className="h-20 w-20 ring-4 ring-primary/10">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">{studentDashboardData.name}</h3>
            <p className="text-sm text-muted-foreground">{studentDashboardData.plan} Plan</p>
            <Button variant="outline" size="sm" className="mt-2 rounded-xl">Change Photo</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input defaultValue={studentDashboardData.name} className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input defaultValue="aisha@email.com" className="rounded-xl" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input defaultValue="+1 (555) 123-4567" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label>Country</Label>
              <Input defaultValue="United States" className="rounded-xl" />
            </div>
          </div>
          <Button className="rounded-xl">Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl border border-border">
            <div>
              <p className="text-sm font-medium">Email Notifications</p>
              <p className="text-xs text-muted-foreground">Receive class reminders and updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-border peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
            </label>
          </div>
          <Separator />
          <Button variant="outline" className="rounded-xl text-danger hover:text-danger">Delete Account</Button>
        </CardContent>
      </Card>
    </div>
  );
}
