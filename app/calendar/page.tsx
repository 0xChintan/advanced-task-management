"use client";

import { Calendar } from "@/components/calendar";
import { PageHeader } from "@/components/page-header";

export default function CalendarPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Calendar"
        description="View and manage your tasks in a calendar view"
      />
      <Calendar />
    </div>
  );
}