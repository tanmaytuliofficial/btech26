"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { cn } from "@/utils";
import {
  LayoutDashboard,
  BookOpen,
  Code2,
  FolderOpen,
  FolderGit2,
  Map,
  Trophy,
  Cpu,
  Bot,
  BarChart3,
  Eye,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "College Syllabus", href: "/dashboard/college-syllabus", icon: BookOpen },
  { title: "Industry Skills", href: "/dashboard/industry-skills", icon: Code2 },
  { title: "Resources", href: "/dashboard/resources", icon: FolderOpen },
  { title: "Projects", href: "/dashboard/projects", icon: FolderGit2 },
  { title: "Career Roadmaps", href: "/dashboard/career-roadmaps", icon: Map },
  { title: "Hackathons", href: "/dashboard/hackathons", icon: Trophy },
  { title: "Competitions", href: "/dashboard/competitions", icon: Cpu },
  { title: "AI Mentor", href: "/dashboard/ai-mentor", icon: Bot },
  { title: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { title: "Secret Thing", href: "/dashboard/secret-thing", icon: Eye },
  { title: "Feedback", href: "/dashboard/feedback", icon: MessageSquare },
];

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  const handleSignOut = async () => {
    await signOut(auth);
    window.location.href = "/auth/login";
  };

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen border-r border-border bg-card transition-all duration-200",
          collapsed ? "w-[72px]" : "w-[256px]"
        )}
      >
        <div className="flex h-full flex-col">
          <div
            className={cn(
              "flex h-16 items-center border-b border-border px-4",
              collapsed ? "justify-center" : "justify-between"
            )}
          >
            {collapsed ? (
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">OS</span>
              </div>
            ) : (
              <Link href="/dashboard" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">OS</span>
                </div>
                <span className="font-bold">Career OS</span>
              </Link>
            )}
          </div>

          <nav className="flex-1 space-y-1 p-3 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              const linkContent = (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    collapsed && "justify-center px-2"
                  )}
                >
                  <Icon className={cn("h-5 w-5 shrink-0", isActive && "text-primary")} />
                  {!collapsed && <span>{item.title}</span>}
                </Link>
              );

              if (collapsed) {
                return (
                  <Tooltip key={item.href}>
                    <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                    <TooltipContent side="right" className="font-medium">
                      {item.title}
                    </TooltipContent>
                  </Tooltip>
                );
              }

              return <div key={item.href}>{linkContent}</div>;
            })}
          </nav>

          <div className="border-t border-border p-3 space-y-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn("w-full justify-start gap-3", collapsed && "justify-center px-2")}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">A</AvatarFallback>
                  </Avatar>
                  {!collapsed && (
                    <div className="flex flex-col items-start text-left">
                      <span className="text-sm font-medium">User</span>
                      <span className="text-xs text-muted-foreground">user@example.com</span>
                    </div>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className={cn("w-full", collapsed ? "px-2" : "justify-start")}
            >
              {collapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <>
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  <span>Collapse</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}