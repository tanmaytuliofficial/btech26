"use client";

import { Cpu, Plus, Search, Calendar, Trophy, Medal, TrendingUp, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const competitions = [
  {
    name: "LeetCode Weekly Contest",
    description: "Weekly programming competition to improve problem-solving skills",
    platform: "LeetCode",
    date: "Every Sunday, 2:30 PM",
    duration: "90 minutes",
    participants: 15000,
    rank: "#1,240",
    rating: 2150,
    status: "ongoing",
  },
  {
    name: "Codeforces Round #900",
    description: "Competitive programming contest for algorithm enthusiasts",
    platform: "Codeforces",
    date: "Aug 20, 2024",
    duration: "2 hours",
    participants: 8000,
    rank: "#2,500",
    rating: 1850,
    status: "upcoming",
  },
  {
    name: "Google Kick Start Round G",
    description: "Google's global coding competition series",
    platform: "Google",
    date: "Aug 25, 2024",
    duration: "3 hours",
    participants: 20000,
    rank: null,
    rating: null,
    status: "upcoming",
  },
];

export default function CompetitionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Competitions</h1>
          <p className="text-muted-foreground mt-1">Track your competitive programming journey</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Competition
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search competitions..." className="pl-10" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {competitions.map((comp, i) => (
          <Card key={i} className="hover:border-primary/20 transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{comp.name}</CardTitle>
                    <CardDescription>{comp.platform}</CardDescription>
                  </div>
                </div>
                <Badge variant={comp.status === "ongoing" ? "default" : "secondary"}>
                  {comp.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{comp.description}</p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {comp.date}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {comp.duration}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="h-4 w-4" />
                  {comp.participants.toLocaleString()} participants
                </div>
                {comp.rank && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Medal className="h-4 w-4" />
                    Rank: {comp.rank}
                  </div>
                )}
              </div>

              {comp.rating && (
                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Rating</span>
                  </div>
                  <span className="font-bold text-primary">{comp.rating}</span>
                </div>
              )}

              <Button className="w-full" variant={comp.status === "ongoing" ? "default" : "outline"}>
                {comp.status === "ongoing" ? "Join Competition" : "View Details"}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}