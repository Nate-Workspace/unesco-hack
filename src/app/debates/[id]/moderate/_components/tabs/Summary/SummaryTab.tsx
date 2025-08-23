"use client";

import DebateStatisticsCard from "./DebateStatisticsCard";
import DebaterPerformanceCard from "./DebaterPerformanceCard";
import KeyTopicsCard from "./KeyTopicsCard";
import SummaryEditorCard from "./SummaryEditorCard";
import { Debater } from "@/types/ModeratePage.types";

export default function SummaryTab({
  debaters,
  value,
  setValue,
  onSave,
}: {
  debaters: Debater[];
  value: string;
  setValue: (v: string) => void;
  onSave: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DebateStatisticsCard />
        <DebaterPerformanceCard debaters={debaters} />
        <KeyTopicsCard />
      </div>
      <SummaryEditorCard value={value} setValue={setValue} onSave={onSave} />
    </div>
  );
}
