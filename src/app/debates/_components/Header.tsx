"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">YouthDebate</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <a href="/debates" className="text-foreground font-medium">
            Debates
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Apply
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Community
          </a>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Join Now</Button>
          <Button size="sm" asChild>
            <a href="/debates/create">
              <Plus className="w-4 h-4 mr-1" />
              Create Debate
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
