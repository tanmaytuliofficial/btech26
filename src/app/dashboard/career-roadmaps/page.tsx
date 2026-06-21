"use client";

import { Map, Plus, Search, ChevronRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const roadmaps = [
  {
    title: "Frontend Developer",
    description: "Complete path from basics to advanced frontend engineering",
    duration: "6 months",
    progress: 45,
    steps: 12,
    completedSteps: 5,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Full-Stack Developer",
    description: "Master both frontend and backend development",
    duration: "12 months",
    progress: 30,
    steps: 24,
    completedSteps: 7,
    skills: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "Data Scientist",
    description: "Learn data analysis, ML, and AI fundamentals",
    duration: "8 months",
    progress: 15,
    steps: 18,
    completedSteps: 3,
    skills: ["Python", "Statistics", "ML", "TensorFlow", "SQL"],
  },
];

export default function CareerRoadmapsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Career Roadmaps</h1>
          <p className="text-muted-foreground mt-1">Structured learning paths to your goals</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Roadmap
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search roadmaps..." className="pl-10" />
      </div>

      <div className="grid gap-6">
        {roadmaps.map((roadmap, i) => (
          <Card key={i} className="hover:border-primary/20 transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Map className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{roadmap.title}</CardTitle>
                    <CardDescription>{roadmap.description}</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Target className="h-4 w-4" />
                    {roadmap.steps} steps
                  </span>
                  <span>{roadmap.duration}</span>
                </div>
                <Badge variant="secondary">{roadmap.progress}% complete</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">
                    {roadmap.completedSteps}/{roadmap.steps} steps
                  </span>
                </div>
                <Progress value={roadmap.progress} />
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {roadmap.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}