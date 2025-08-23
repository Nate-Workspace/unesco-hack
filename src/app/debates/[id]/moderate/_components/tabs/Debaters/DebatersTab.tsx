"use client";

import { Debater } from "@/types/ModeratePage.types";
import DebaterCard from "./DebaterCard";

export default function DebatersTab({ debaters }: { debaters: Debater[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {debaters.map((d) => (
        <DebaterCard key={d.id} debater={d} />
      ))}
    </div>
  );
}
