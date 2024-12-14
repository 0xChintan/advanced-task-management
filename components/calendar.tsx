"use client";

import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { TaskList } from "./calendar/task-list";

export function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card className="p-4">
      <CalendarComponent
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <TaskList selectedDate={date} />
    </Card>
  );
}