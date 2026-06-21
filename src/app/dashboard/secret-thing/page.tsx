"use client";

import { Eye, Lock, Key, Shield, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const secretFeatures = [
  {
    title: "Resume Builder Pro",
    description: "AI-powered resume builder with ATS optimization",
    icon: Key,
    locked: false,
    isNew: true,
  },
  {
    title: "Salary Calculator",
    description: "Get accurate salary estimates based on skills and location",
    icon: Shield,
    locked: false,
    isNew: false,
  },
  {
    title: "Interview Simulator",
    description: "Practice with AI-generated behavioral questions",
    icon: Sparkles,
    locked: true,
    isNew: true,
  },
  {
    title: "Career Path Predictor",
    description: "ML-powered career trajectory predictions",
    icon: Eye,
    locked: true,
    isNew: false,
  },
];

export default function SecretThingPage() {
  return (
    <div className="space-y-6">
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="flex items-center gap-2">
                Secret Things
                <Badge variant="default" className="text-xs">
                  Hidden Features
                </Badge>
              </CardTitle>
              <CardDescription>Exclusive features for dedicated learners</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {secretFeatures.map((feature, i) => (
          <Card
            key={i}
            className={`group relative overflow-hidden hover:border-primary/20 transition-all ${
              feature.locked ? "opacity-60" : ""
            }`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      feature.locked ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base flex items-center gap-2">
                      {feature.title}
                      {feature.isNew && (
                        <Badge variant="default" className="text-xs">
                          New
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </div>
                </div>
                {feature.locked && (
                  <Badge variant="secondary" className="gap-1">
                    <Lock className="h-3 w-3" />
                    Locked
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full"
                variant={feature.locked ? "outline" : "default"}
                disabled={feature.locked}
              >
                {feature.locked ? (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Unlock with Premium
                  </>
                ) : (
                  <>
                    Access Feature
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}