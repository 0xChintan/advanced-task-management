"use client";

import { useTaskStore } from "@/lib/store/task-store";
import { TaskCard } from "../ui/task-card";
import { ScrollArea } from "../ui/scroll-area";

export function TaskList() {
  const tasks = useTaskStore((state) => Object.values(state.tasks));
  const setSelectedTask = useTaskStore((state) => state.actions.setSelectedTask);

  return (
    <ScrollArea className="h-[calc(100vh-2rem)]">
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onClick={() => setSelectedTask(task.id)}
          />
        ))}
        {tasks.length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            No tasks yet. Create your first task to get started!
          </div>
        )}
      </div>
    </ScrollArea>
  );
}