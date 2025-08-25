"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

export default function PageHeader() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-card to-accent/5 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">All Debates</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif leading-relaxed">
            Explore ongoing and upcoming debates on critical human rights issues. Join the conversation that matters.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search debates by topic, debater, or keyword..."
                className="pl-10 bg-background/80 backdrop-blur-sm"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48 bg-background/80 backdrop-blur-sm">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Topics</SelectItem>
                <SelectItem value="freedom">Freedom of Expression</SelectItem>
                <SelectItem value="privacy">Privacy Rights</SelectItem>
                <SelectItem value="education">Education Access</SelectItem>
                <SelectItem value="climate">Climate Justice</SelectItem>
                <SelectItem value="health">Mental Health</SelectItem>
                <SelectItem value="equality">Gender Equality</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-32 bg-background/80 backdrop-blur-sm">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="live">Live</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}
