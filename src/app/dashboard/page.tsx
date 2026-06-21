import Link from "next/link";
import {
  BookOpen,
  Code2,
  FolderGit2,
  TrendingUp,
  Trophy,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-muted-foreground mt-1">
            Track your progress and continue learning.
          </p>
        </div>
        <Link href="/dashboard/ai-mentor">
          <Button>
            <Sparkles className="mr-2 h-4 w-4" />
            Ask AI Mentor
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Active Courses", value: "4", icon: BookOpen, color: "text-blue-500" },
          { title: "Projects Built", value: "8", icon: FolderGit2, color: "text-emerald-500" },
          { title: "Skills Learned", value: "24", icon: Code2, color: "text-purple-500" },
          { title: "Current Streak", value: "7 days", icon: TrendingUp, color: "text-orange-500" },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`h-10 w-10 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Activity</CardTitle>
            <Badge variant="secondary">This Week</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Completed React Hooks course", time: "2 hours ago", icon: BookOpen },
              { title: "Submitted E-commerce project", time: "1 day ago", icon: FolderGit2 },
              { title: "Won 2nd place in CodeSprint", time: "3 days ago", icon: Trophy },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/dashboard/projects" className="block">
              <Button variant="outline" className="w-full justify-between">
                <span className="flex items-center gap-2">
                  <FolderGit2 className="h-4 w-4" />
                  Add New Project
                </span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard/college-syllabus" className="block">
              <Button variant="outline" className="w-full justify-between">
                <span className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Update Syllabus Progress
                </span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard/competitions" className="block">
              <Button variant="outline" className="w-full justify-between">
                <span className="flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  Join Competition
                </span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}