export type DebateDetails = {
  id: string;
  title: string;
  description: string | null;
  startTime: Date;
  category: string | null;
  sides: string[];
  votesBySide: {
    side: string;
    count: number;
  }[];
};
