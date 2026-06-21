"use client";

import { BarChart3, TrendingUp, Clock, Target, BookOpen, Code2, Trophy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const weeklyActivity = [
  { day: "Mon", hours: 4 },
  { day: "Tue", hours: 6 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 7 },
  { day: "Fri", hours: 5 },
  { day: "Sat", hours: 2 },
  { day: "Sun", hours: 4 },
];

const skillProgress = [
  { skill: "React", progress: 85, change: "+5%" },
  { skill: "TypeScript", progress: 72, change: "+3%" },
  { skill: "Node.js", progress: 58, change: "+8%" },
  { skill: "PostgreSQL", progress: 45, change: "+2%" },
];

const recentBadges = [
  { name: "Week Warrior", description: "7 days streak", icon: "🔥" },
  { name: "Code Master", description: "50 problems solved", icon: "💻" },
  { name: "First Project", description: "Completed first project", icon: "🎉" },
];

export default function AnalyticsPage() {
  const maxHours = Math.max(...weeklyActivity.map((d) => d.hours));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground mt-1">Track your learning progress</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Learning Hours", value: "156", change: "+12% this week", icon: Clock },
          { title: "Problems Solved", value: "342", change: "+28 this week", icon: Target },
          { title: "Courses Completed", value: "12", change: "+2 this month", icon: BookOpen },
          { title: "Projects Built", value: "8", change: "+1 this month", icon: Code2 },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  <p className="text-xs text-emerald-500 mt-1">{stat.change}</p>
                </div>
                <stat.icon className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Hours spent learning per day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-2 h-48">
              {weeklyActivity.map((day, i) => (
                <div key={i} className="flex flex-col items-center gap-2 flex-1">
                  <div
                    className="w-full bg-primary/10 rounded-t-lg transition-all hover:bg-primary/20"
                    style={{ height: `${(day.hours / maxHours) * 100}%` }}
                  />
                  <span className="text-xs text-muted-foreground">{day.day}</span>
                  <span className="text-xs font-medium">{day.hours}h</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skill Progress</CardTitle>
            <CardDescription>Your skill development over time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {skillProgress.map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.skill}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs text-emerald-500">
                      {item.change}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.progress}%</span>
                  </div>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Achievements</CardTitle>
              <CardDescription>Badges earned this month</CardDescription>
            </div>
            <Trophy className="h-5 w-5 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            {recentBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-border p-4 flex-1 hover:border-primary/20 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                  {badge.icon}
                </div>
                <div>
                  <p className="font-medium">{badge.name}</p>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}