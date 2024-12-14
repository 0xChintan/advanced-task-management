"use client";

import { PageHeader } from "@/components/page-header";
import { TaskAnalytics } from "@/components/analytics/task-analytics";

export default function AnalyticsPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Analytics"
        description="View insights about your tasks and productivity"
      />
      <TaskAnalytics />
    </div>
  );
}