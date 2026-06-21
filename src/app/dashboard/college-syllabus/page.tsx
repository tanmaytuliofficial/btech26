"use client";

import { BookOpen, CheckCircle2, Circle, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const semesters = [
  {
    name: "Semester 1",
    courses: [
      { name: "Mathematics I", credits: 4, completed: true },
      { name: "Physics", credits: 3, completed: true },
      { name: "Computer Science Fundamentals", credits: 4, completed: true },
      { name: "English Communication", credits: 2, completed: true },
    ],
  },
  {
    name: "Semester 2",
    courses: [
      { name: "Mathematics II", credits: 4, completed: false },
      { name: "Data Structures", credits: 4, completed: false },
      { name: "Digital Electronics", credits: 3, completed: false },
      { name: "Environmental Studies", credits: 2, completed: false },
    ],
  },
  {
    name: "Semester 3",
    courses: [
      { name: "Algorithms", credits: 4, completed: false },
      { name: "Database Systems", credits: 4, completed: false },
      { name: "Operating Systems", credits: 3, completed: false },
      { name: "Software Engineering", credits: 3, completed: false },
    ],
  },
];

export default function CollegeSyllabusPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">College Syllabus</h1>
          <p className="text-muted-foreground mt-1">Track your academic progress</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Course
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search courses..." className="pl-10" />
      </div>

      <div className="grid gap-6">
        {semesters.map((semester) => {
          const completed = semester.courses.filter((c) => c.completed).length;
          const progress = (completed / semester.courses.length) * 100;

          return (
            <Card key={semester.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{semester.name}</CardTitle>
                    <CardDescription>
                      {semester.courses.length} courses •{" "}
                      {semester.courses.reduce((acc, c) => acc + c.credits, 0)} credits
                    </CardDescription>
                  </div>
                  <Badge variant={progress === 100 ? "default" : "secondary"}>
                    {completed}/{semester.courses.length} completed
                  </Badge>
                </div>
                <Progress value={progress} className="mt-4" />
              </CardHeader>
              <CardContent className="space-y-3">
                {semester.courses.map((course, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg border border-border"
                  >
                    <div className="flex items-center gap-3">
                      {course.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      )}
                      <div>
                        <p className="font-medium">{course.name}</p>
                        <p className="text-sm text-muted-foreground">{course.credits} credits</p>
                      </div>
                    </div>
                    <Badge variant={course.completed ? "default" : "outline"}>
                      {course.completed ? "Completed" : "In Progress"}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}