"use client";

import { useTaskStore } from "@/lib/store/task-store";
import { useMemo } from "react";
import { formatStatusLabel } from "@/lib/utils";

export function useTaskStatusData() {
  const tasks = useTaskStore((state) => Object.values(state.tasks));

  return useMemo(() => {
    const tasksByStatus = tasks.reduce((acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(tasksByStatus).map(([status, count]) => ({
      status: formatStatusLabel(status),
      count,
    }));
  }, [tasks]);
}