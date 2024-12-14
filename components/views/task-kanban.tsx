"use client";

import { useTaskStore, TaskStatus } from "@/lib/store/task-store";
import { TaskCard } from "../ui/task-card";
import { ScrollArea } from "../ui/scroll-area";
import { Card, CardContent, CardHeader } from "../ui/card";

const STATUSES: { id: TaskStatus; label: string }[] = [
  { id: "todo", label: "To Do" },
  { id: "in-progress", label: "In Progress" },
  { id: "review", label: "Review" },
  { id: "done", label: "Done" },
];

export function TaskKanban() {
  const tasks = useTaskStore((state) => Object.values(state.tasks));
  const setSelectedTask = useTaskStore((state) => state.actions.setSelectedTask);

  const getTasksByStatus = (status: TaskStatus) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <ScrollArea className="h-[calc(100vh-2rem)]">
      <div className="flex flex-col sm:flex-row gap-4 min-h-[calc(100vh-4rem)]">
        {STATUSES.map(({ id, label }) => (
          <Card key={id} className="flex-1 min-w-[280px] sm:min-w-[300px]">
            <CardHeader className="p-4 pb-2">
              <h3 className="font-semibold">{label}</h3>
            </CardHeader>
            <CardContent className="p-2">
              <div className="space-y-2">
                {getTasksByStatus(id).map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    variant="compact"
                    onClick={() => setSelectedTask(task.id)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}