export interface LiveDebate {
  id: number;
  title: string;
  description: string;
  watchers: number;
  avatars: string[];
  icon: string;
}

export interface UpcomingDebate {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  applicationsOpen: boolean;
  interested: number;
  icon: string;
}

export interface DebatesData {
  live: LiveDebate[];
  upcoming: UpcomingDebate[];
}

export interface DebatesFilters {
  status: string;
  topic: string;
  search: string;
}