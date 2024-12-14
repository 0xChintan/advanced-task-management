"use client";

import { useTaskStore } from "@/lib/store/task-store";
import { TaskCard } from "../ui/task-card";
import { ScrollArea } from "../ui/scroll-area";

export function TaskGrid() {
  const tasks = useTaskStore((state) => Object.values(state.tasks));
  const setSelectedTask = useTaskStore((state) => state.actions.setSelectedTask);

  return (
    <ScrollArea className="h-[calc(100vh-2rem)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            variant="compact"
            onClick={() => setSelectedTask(task.id)}
          />
        ))}
        {tasks.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-8">
            No tasks yet. Create your first task to get started!
          </div>
        )}
      </div>
    </ScrollArea>
  );
}