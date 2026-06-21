"use client";

import { useState } from "react";
import { Bot, Send, RefreshCw, ThumbsUp, ThumbsDown, Copy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "How do I prepare for backend developer interviews?",
  "What skills do I need for a data science role?",
  "Help me create a learning roadmap for React",
];

export default function AIMentorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm your AI Career Mentor. I can help you with career advice, skill development, interview preparation, and more. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "That's a great question! Based on your career goals, I'd recommend focusing on building strong fundamentals in data structures and algorithms, while also working on real-world projects. Would you like me to provide a detailed learning path?",
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Mentor</h1>
          <p className="text-muted-foreground mt-1">Get personalized career guidance</p>
        </div>
        <Button variant="outline">
          <RotateCcw className="mr-2 h-4 w-4" />
          New Conversation
        </Button>
      </div>

      <Card className="flex-1 flex flex-col">
        <CardHeader className="flex-shrink-0 border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base">Career AI Mentor</CardTitle>
              <CardDescription>Always here to help</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
              >
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[70%] rounded-xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  {message.role === "assistant" && (
                    <div className="flex items-center gap-1 mt-2 pt-2 border-t border-border/50">
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                        <ThumbsUp className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                        <ThumbsDown className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                </div>
                {message.role === "user" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">A</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">AI</AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <p className="text-sm text-muted-foreground mb-3">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    className="text-xs h-8"
                    onClick={() => setInput(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="flex-shrink-0 border-t border-border p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything about your career..."
                className="flex-1 rounded-lg border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button onClick={handleSend} disabled={!input.trim() || isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}