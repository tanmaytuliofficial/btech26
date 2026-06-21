"use client";

import { useState } from "react";
import { MessageSquare, Send, ThumbsUp, Star, Smile, Frown, Meh } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const feedbackTypes = [
  { id: "bug", label: "Bug Report", icon: Frown },
  { id: "feature", label: "Feature Request", icon: Star },
  { id: "general", label: "General Feedback", icon: MessageSquare },
  { id: "praise", label: "Praise", icon: ThumbsUp },
];

const recentFeedback = [
  {
    type: "feature",
    title: "Add dark mode to the dashboard",
    status: "In Progress",
    votes: 24,
    date: "2 days ago",
  },
  {
    type: "bug",
    title: "Login page crashes on Safari",
    status: "Resolved",
    votes: 18,
    date: "1 week ago",
  },
  {
    type: "praise",
    title: "Love the new AI mentor feature!",
    status: "Acknowledged",
    votes: 31,
    date: "3 days ago",
  },
];

const feedbackList = [
  {
    id: 1,
    content: "The new roadmaps feature is exactly what I needed. Very helpful for tracking my progress!",
    author: "Sarah M.",
    date: "2 hours ago",
    helpful: 12,
  },
  {
    id: 2,
    content: "Would love to see integration with LinkedIn Learning courses.",
    author: "John D.",
    date: "5 hours ago",
    helpful: 8,
  },
];

export default function FeedbackPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Feedback</h1>
        <p className="text-muted-foreground mt-1">Share your thoughts and help us improve</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Submit Feedback</CardTitle>
              <CardDescription>We value your input</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Category</Label>
                <div className="flex flex-wrap gap-2">
                  {feedbackTypes.map((type) => (
                    <Button
                      key={type.id}
                      variant={selectedType === type.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType(type.id)}
                      className="gap-2"
                    >
                      <type.icon className="h-4 w-4" />
                      {type.label}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>How would you rate your experience?</Label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= rating ? "fill-primary text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Your feedback</Label>
                <Textarea
                  placeholder="Tell us what's on your mind..."
                  className="min-h-[120px]"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </div>

              <Button className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Submit Feedback
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Feedback</CardTitle>
              <CardDescription>See what others are saying</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {feedbackList.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-lg border border-border p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Smile className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">{item.content}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-medium">{item.author}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <ThumbsUp className="h-4 w-4" />
                    {item.helpful}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Community Requests</CardTitle>
              <CardDescription>Most requested features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentFeedback.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-3 rounded-lg border border-border p-3 hover:border-primary/20 transition-colors"
                >
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium">{item.title}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="secondary" className="text-xs">
                        {item.type}
                      </Badge>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <ThumbsUp className="h-3 w-3" />
                    {item.votes}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Reactions</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-around">
              <Button variant="outline" size="lg" className="h-14 w-14 rounded-full">
                <Smile className="h-6 w-6 text-emerald-500" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 w-14 rounded-full">
                <Meh className="h-6 w-6 text-yellow-500" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 w-14 rounded-full">
                <Frown className="h-6 w-6 text-red-500" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}