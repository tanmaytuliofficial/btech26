"use client";

import { Code2, Database, Cloud, Smartphone, Plus, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const categories = [
  {
    name: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", progress: 85, demand: "High" },
      { name: "Next.js", progress: 72, demand: "High" },
      { name: "TypeScript", progress: 80, demand: "High" },
      { name: "Tailwind CSS", progress: 90, demand: "Medium" },
    ],
  },
  {
    name: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", progress: 70, demand: "High" },
      { name: "PostgreSQL", progress: 60, demand: "High" },
      { name: "GraphQL", progress: 45, demand: "Medium" },
      { name: "Redis", progress: 30, demand: "Medium" },
    ],
  },
  {
    name: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "AWS", progress: 50, demand: "High" },
      { name: "Docker", progress: 65, demand: "High" },
      { name: "Kubernetes", progress: 25, demand: "Medium" },
      { name: "CI/CD", progress: 55, demand: "High" },
    ],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "React Native", progress: 40, demand: "Medium" },
      { name: "Flutter", progress: 20, demand: "Medium" },
    ],
  },
];

export default function IndustrySkillsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Industry Skills</h1>
          <p className="text-muted-foreground mt-1">Track your skill development</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Skill
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search skills..." className="pl-10" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <Card key={cat.name}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <cat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>{cat.name}</CardTitle>
                  <CardDescription>{cat.skills.length} skills tracked</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {cat.skills.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant={skill.demand === "High" ? "default" : "secondary"} className="text-xs">
                        {skill.demand} demand
                      </Badge>
                      <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                    </div>
                  </div>
                  <Progress value={skill.progress} />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}