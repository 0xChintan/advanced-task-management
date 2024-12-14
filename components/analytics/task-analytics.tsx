"use client";

import { StatusDistributionChart } from "./charts/status-distribution";

export function TaskAnalytics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StatusDistributionChart />
    </div>
  );
}