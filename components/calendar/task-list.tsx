"use client";

import { useTaskStore } from "@/lib/store/task-store";
import { formatDateString } from "@/lib/utils";

interface TaskListProps {
  selectedDate?: Date;
}

export function TaskList({ selectedDate }: TaskListProps) {
  const tasks = useTaskStore((state) => Object.values(state.tasks));
  const tasksWithDueDate = tasks.filter((task) => task.dueDate);

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Tasks Due Today</h3>
      <div className="space-y-2">
        {tasksWithDueDate.map((task) => (
          <div
            key={task.id}
            className="p-2 border rounded-md hover:bg-accent"
          >
            <div className="font-medium">{task.title}</div>
            <div className="text-sm text-muted-foreground">
              Due: {formatDateString(task.dueDate)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}