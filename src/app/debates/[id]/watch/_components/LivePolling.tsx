"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Vote, ThumbsUp } from "lucide-react";
import { DebateDetails } from "@/types/debate.types";
import { useEffect, useState } from "react";
import { createPollResponseAction } from "@/app/debates/create/_actions/debates.mutation.action";
import { getPollResponseAction } from "@/app/debates/create/_actions/debates.query.actoin";

type DebateInfoProps = {
  Details: DebateDetails | null;
};

const USER_ID = "ES7RKi64v3V5ka3YCSx66d4sHwTCQjkz";

export default function LivePolling({ Details }: DebateInfoProps) {
  const [selectedSide, setSelectedSide] = useState<number | null>(null);
  const [votesBySide, setVotesBySide] = useState(Details?.votesBySide || []);

  // Set initial selected side from existing vote
  useEffect(() => {
    async function fetchExistingVote() {
      if (!Details?.id) return;
      const existingVote = await getPollResponseAction({
        debateId: Details.id,
        userId: USER_ID,
      });
      if (existingVote?.length) {
        const sideIndex = Details.sides.findIndex(
          (side) => side === existingVote[0].side
        );
        if (sideIndex !== -1) setSelectedSide(sideIndex);
      }
      // Initialize votes
      setVotesBySide(Details.votesBySide || []);
    }
    fetchExistingVote();
  }, [Details]);

  // Handle voting
  useEffect(() => {
    async function setPollResponse() {
      if (selectedSide === null || !Details?.sides) return;

      await createPollResponseAction({
        debateId: Details.id,
        side: Details.sides[selectedSide],
        userId: USER_ID,
      });

      // Refetch votes after voting
      const updatedVotes = await getPollResponseAction({
        debateId: Details.id,
        userId: USER_ID,
      });

      // Count votes per side
      const newVotesBySide = Details.sides.map((side) => {
        const count = updatedVotes.filter((v: any) => v.side === side).length;
        return { side, count };
      });

      setVotesBySide(newVotesBySide);
    }
    setPollResponse();
  }, [selectedSide, Details]);

  const sideColors = [
    {
      border: "border-blue-500",
      text: "text-blue-500",
      bg: "bg-blue-500",
      hover: "hover:bg-blue-600",
    },
    {
      border: "border-orange-500",
      text: "text-orange-500",
      bg: "bg-orange-500",
      hover: "hover:bg-orange-600",
    },
    {
      border: "border-green-500",
      text: "text-green-500",
      bg: "bg-green-500",
      hover: "hover:bg-green-600",
    },
  ];

  const totalVotes = votesBySide.reduce((sum, v) => sum + v.count, 0);

  if (!Details) return <div>Debate details not found</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-sans flex items-center">
          <Vote className="w-5 h-5 mr-2 text-primary" />
          Live Audience Poll
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="font-medium">
            Which argument do you find more compelling so far?
          </p>

          <div className="space-y-3">
            {Details.sides.map((side, index) => {
              const color = sideColors[index] || sideColors[0];
              const isSelected = selectedSide === index;

              const voteData = votesBySide.find((v) => v.side === side);
              const count = voteData ? voteData.count : 0;

              const percentage =
                totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;

              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Button
                      size="sm"
                      variant={isSelected ? "default" : "outline"}
                      className={
                        isSelected
                          ? `${color.bg} text-white ${color.hover}`
                          : `${color.border} ${color.text} bg-transparent hover:bg-opacity-10`
                      }
                      onClick={() => setSelectedSide(index)}
                    >
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {side}
                    </Button>
                    <span className="text-sm text-muted-foreground">{`Vote ${
                      index + 1
                    }`}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div
                        className={`${color.bg} h-2 rounded-full`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{percentage}%</span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-muted-foreground">
            {totalVotes} votes • Poll updates in real-time
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
