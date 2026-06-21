"use client";

import { FolderGit2, Plus, Search, Github, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const projects = [
  {
    name: "E-commerce Platform",
    description: "Full-stack e-commerce app with React, Node.js, and PostgreSQL",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    progress: 85,
    stars: 24,
    status: "active",
    lastUpdated: "2 days ago",
  },
  {
    name: "Task Management App",
    description: "Collaborative task manager with real-time updates",
    tech: ["Next.js", "Supabase", "Tailwind"],
    progress: 100,
    stars: 42,
    status: "completed",
    lastUpdated: "1 month ago",
  },
  {
    name: "AI Writing Assistant",
    description: "GPT-powered writing tool for content creators",
    tech: ["React", "OpenAI API", "Vercel"],
    progress: 60,
    stars: 18,
    status: "active",
    lastUpdated: "5 days ago",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground mt-1">Showcase your portfolio projects</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search projects..." className="pl-10" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Card key={i} className="group hover:border-primary/20 transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FolderGit2 className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardTitle className="mt-3">{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} />
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4" />
                  {project.stars}
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={project.status === "completed" ? "default" : "secondary"} className="text-xs">
                    {project.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{project.lastUpdated}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}