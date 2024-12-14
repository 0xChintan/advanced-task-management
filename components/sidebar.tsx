"use client";

import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  List,
  KanbanSquare,
  Plus,
  Calendar,
  Settings,
  BarChart2,
  Menu,
} from "lucide-react";
import { useTaskStore } from "@/lib/store/task-store";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { TaskDialog } from "./task-dialog";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { viewMode, actions } = useTaskStore((state) => ({
    viewMode: state.viewMode,
    actions: state.actions,
  }));
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  const viewOptions = [
    { id: "list", icon: List, label: "List View" },
    { id: "grid", icon: LayoutGrid, label: "Grid View" },
    { id: "kanban", icon: KanbanSquare, label: "Kanban Board" },
  ] as const;

  const SidebarContent = () => (
    <div className="flex flex-col h-full py-4">
      <div className="flex items-center justify-between mb-6 px-4">
        <h1 className="text-2xl font-bold">TaskMaster</h1>
      </div>

      <Button
        className="mb-6 mx-4"
        onClick={() => setIsNewTaskOpen(true)}
      >
        <Plus className="mr-2 h-4 w-4" />
        New Task
      </Button>

      <div className="space-y-2 px-2">
        {viewOptions.map(({ id, icon: Icon, label }) => (
          <Button
            key={id}
            variant={viewMode === id ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start",
              viewMode === id && "bg-secondary"
            )}
            onClick={() => actions.setViewMode(id)}
          >
            <Icon className="mr-2 h-4 w-4" />
            {label}
          </Button>
        ))}
      </div>

      <div className="mt-4 space-y-2 px-2">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => router.push("/calendar")}
        >
          <Calendar className="mr-2 h-4 w-4" />
          Calendar
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => router.push("/analytics")}
        >
          <BarChart2 className="mr-2 h-4 w-4" />
          Analytics
        </Button>
      </div>

      <div className="mt-auto px-2">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => router.push("/settings")}
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 border-r bg-card">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-2">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      <TaskDialog
        open={isNewTaskOpen}
        onOpenChange={setIsNewTaskOpen}
      />
    </>
  );
}