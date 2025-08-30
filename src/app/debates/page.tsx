"use client";

import { useEffect, useState } from "react";
import Header from "./_components/Header";
import PageHeader from "./_components/PageHeader";
import LiveDebatesSection from "./_components/LiveDebatesSection";
import UpcomingDebatesSection from "./_components/UpcomingDebatesSection";
import Footer from "./_components/Footer";
import { getDebatesAction } from "./_actions/debates.query.action";
import type { DebatesData, DebatesFilters } from "../../types/debates.ts";

interface PageHeaderProps {
  onFilterChange: (filterName: keyof DebatesFilters, value: string) => void;
}

const PageHeaderWithProps = PageHeader as React.FC<PageHeaderProps>;

export default function DebatesPage() {
  const [debates, setDebates] = useState<DebatesData>({ live: [], upcoming: [] });
  const [filters, setFilters] = useState<DebatesFilters>({
    status: "All",
    topic: "All Topics",
    search: ""
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDebates() {
      setIsLoading(true);
      const data = await getDebatesAction(filters);
      setDebates(data);
      setIsLoading(false);
    }
    fetchDebates();
  }, [filters]);

  const handleFilterChange = (filterName: keyof DebatesFilters, value: string) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeaderWithProps onFilterChange={handleFilterChange} />
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <p className="text-center text-muted-foreground">Loading debates...</p>
          ) : (
            <>
              <LiveDebatesSection liveDebates={debates.live} />
              <UpcomingDebatesSection upcomingDebates={debates.upcoming} />
            </>
          )}
        </div>
      </section>  
      <Footer />
    </div>
  );
}