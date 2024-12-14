"use client";

import { Task, TaskPriority } from "@/lib/store/task-store";
import { Card, CardContent, CardHeader } from "./card";
import { Badge } from "./badge";
import { Calendar, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface TaskCardProps {
  task: Task;
  variant?: "default" | "compact";
  onClick?: () => void;
}

const priorityColors: Record<TaskPriority, string> = {
  low: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  high: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  urgent: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

export function TaskCard({ task, variant = "default", onClick }: TaskCardProps) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <CardHeader className="p-4 pb-2">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold line-clamp-2">{task.title}</h3>
          <Badge className={priorityColors[task.priority]}>
            {task.priority}
          </Badge>
        </div>
      </CardHeader>
      {variant === "default" && (
        <CardContent className="p-4 pt-2">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {task.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {task.dueDate && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {formatDistanceToNow(new Date(task.dueDate), { addSuffix: true })}
                </span>
              </div>
            )}
            {task.estimatedTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{task.estimatedTime}h</span>
              </div>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  );
}