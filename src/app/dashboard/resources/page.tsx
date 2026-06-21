"use client";

import { FolderOpen, FileText, Video, Link2, Plus, Search, ExternalLink, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const resources = [
  {
    title: "React Documentation",
    type: "documentation",
    category: "Frontend",
    description: "Official React documentation with examples and API reference.",
    tags: ["React", "JavaScript"],
  },
  {
    title: "System Design Interview",
    type: "article",
    category: "Interview Prep",
    description: "Comprehensive guide for system design interviews.",
    tags: ["System Design", "Interview"],
  },
  {
    title: "Next.js Full Course",
    type: "video",
    category: "Frontend",
    description: "Complete video course covering Next.js from basics to advanced.",
    tags: ["Next.js", "React"],
  },
  {
    title: "LeetCode Premium",
    type: "tool",
    category: "Practice",
    description: "Practice coding problems with company-specific questions.",
    tags: ["DSA", "Practice"],
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "documentation":
      return FileText;
    case "video":
      return Video;
    case "tool":
      return Link2;
    default:
      return FolderOpen;
  }
};

export default function ResourcesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
          <p className="text-muted-foreground mt-1">Curated learning resources</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <List className="h-4 w-4" />
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Resource
          </Button>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search resources..." className="pl-10" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((resource, i) => {
          const Icon = getIcon(resource.type);
          return (
            <Card key={i} className="group hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{resource.title}</CardTitle>
                      <CardDescription>{resource.category}</CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}