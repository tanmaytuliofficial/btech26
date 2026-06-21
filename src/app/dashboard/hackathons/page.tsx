"use client";

import { Trophy, Plus, Search, Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const hackathons = [
  {
    name: "ETHGlobal San Francisco",
    description: "Build the future of web3 at the largest Ethereum hackathon",
    date: "Sep 15-17, 2024",
    location: "San Francisco, CA",
    participants: 1200,
    prize: "$50,000",
    status: "upcoming",
    registrationOpen: true,
  },
  {
    name: "MLH Local Hack Day",
    description: "Global hackathon series for beginners and experts alike",
    date: "Oct 5-6, 2024",
    location: "Virtual",
    participants: 5000,
    prize: "$10,000",
    status: "upcoming",
    registrationOpen: true,
  },
  {
    name: "TechCrunch Disrupt Hackathon",
    description: "Build innovative solutions at TechCrunch Disrupt",
    date: "Oct 28-30, 2024",
    location: "Miami, FL",
    participants: 800,
    prize: "$25,000",
    status: "upcoming",
    registrationOpen: false,
  },
];

export default function HackathonsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hackathons</h1>
          <p className="text-muted-foreground mt-1">Find and join exciting hackathons</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Hackathon
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search hackathons..." className="pl-10" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {hackathons.map((hackathon, i) => (
          <Card key={i} className="group hover:border-primary/20 transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Trophy className="h-6 w-6" />
                </div>
                <Badge variant={hackathon.registrationOpen ? "default" : "secondary"}>
                  {hackathon.registrationOpen ? "Registration Open" : "Coming Soon"}
                </Badge>
              </div>
              <CardTitle className="mt-3">{hackathon.name}</CardTitle>
              <CardDescription>{hackathon.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {hackathon.date}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {hackathon.location}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {hackathon.participants.toLocaleString()} participants
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="h-4 w-4" />
                  {hackathon.prize}
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button className="flex-1" disabled={!hackathon.registrationOpen}>
                  Register Now
                </Button>
                <Button variant="outline" size="icon">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}