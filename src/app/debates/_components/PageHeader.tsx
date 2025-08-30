"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { useState, useEffect } from "react";

interface PageHeaderProps {
  onFilterChange: (filterName: string, value: string) => void;
  currentTopic: string;
  currentStatus: string;
  currentSearch: string;
}

export default function PageHeader({ onFilterChange, currentTopic, currentStatus, currentSearch }: PageHeaderProps) {
  const topics = [
    "All Topics",
    "Freedom of Expression",
    "Privacy Rights",
    "Education Access",
    "Climate Justice",
    "Mental Health",
    "Gender Equality",
  ];
  const statuses = ["All", "Live", "Upcoming", "Completed"];

  const [selectedTopic, setSelectedTopic] = useState(currentTopic);
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);
  const [searchQuery, setSearchQuery] = useState(currentSearch);

  useEffect(() => {
    setSelectedTopic(currentTopic);
  }, [currentTopic]);

  useEffect(() => {
    setSelectedStatus(currentStatus);
  }, [currentStatus]);

  useEffect(() => {
    setSearchQuery(currentSearch);
  }, [currentSearch]);

  const handleTopicChange = (topic: string) => {
    onFilterChange("topic", topic);
  };

  const handleStatusChange = (status: string) => {
    onFilterChange("status", status);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onFilterChange("search", query);
  };

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
            {/* Search Input - flex-1 makes it take up remaining space */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search debates by topic, debater, or keyword..."
                className="pl-10 bg-background/80 backdrop-blur-sm"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <Select onValueChange={handleTopicChange} value={selectedTopic}>
              <SelectTrigger className="w-full md:w-48 bg-background/80 backdrop-blur-sm">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by topic" />
              </SelectTrigger>
              <SelectContent>
                {topics.map(topic => (
                  <SelectItem key={topic} value={topic}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={handleStatusChange} value={selectedStatus}>
              <SelectTrigger className="w-full md:w-32 bg-background/80 backdrop-blur-sm">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map(status => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}