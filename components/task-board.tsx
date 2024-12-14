"use client";

import { useState } from "react";
import { useTaskStore } from "@/lib/store/task-store";
import { TaskList } from "./views/task-list";
import { TaskGrid } from "./views/task-grid";
import { TaskKanban } from "./views/task-kanban";
import { TaskDialog } from "./task-dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export function TaskBoard() {
  const viewMode = useTaskStore((state) => state.viewMode);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <Button onClick={() => setIsDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      {viewMode === "list" && <TaskList />}
      {viewMode === "grid" && <TaskGrid />}
      {viewMode === "kanban" && <TaskKanban />}

      <TaskDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
}