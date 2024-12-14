import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';
export type TaskStatus = 'todo' | 'in-progress' | 'review' | 'done';
export type ViewMode = 'list' | 'grid' | 'kanban';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
  assignedTo: string[];
  parentId: string | null;
  subtasks: string[];
  dependencies: string[];
  tags: string[];
  isRecurring: boolean;
  recurrencePattern?: string;
  completedAt: string | null;
  estimatedTime?: number;
  actualTime?: number;
}

interface TaskState {
  tasks: Record<string, Task>;
  viewMode: ViewMode;
  selectedTask: string | null;
  filters: {
    status: TaskStatus[];
    priority: TaskPriority[];
    tags: string[];
    assignedTo: string[];
  };
  actions: {
    addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
    updateTask: (id: string, updates: Partial<Task>) => void;
    deleteTask: (id: string) => void;
    setViewMode: (mode: ViewMode) => void;
    setSelectedTask: (id: string | null) => void;
    updateFilters: (filters: Partial<TaskState['filters']>) => void;
  };
}

export const useTaskStore = create<TaskState>()(
  immer((set) => ({
    tasks: {},
    viewMode: 'list',
    selectedTask: null,
    filters: {
      status: [],
      priority: [],
      tags: [],
      assignedTo: [],
    },
    actions: {
      addTask: (task) =>
        set((state) => {
          const id = crypto.randomUUID();
          const now = new Date().toISOString();
          state.tasks[id] = {
            ...task,
            id,
            createdAt: now,
            updatedAt: now,
          };
        }),
      updateTask: (id, updates) =>
        set((state) => {
          if (state.tasks[id]) {
            state.tasks[id] = {
              ...state.tasks[id],
              ...updates,
              updatedAt: new Date().toISOString(),
            };
          }
        }),
      deleteTask: (id) =>
        set((state) => {
          delete state.tasks[id];
        }),
      setViewMode: (mode) =>
        set((state) => {
          state.viewMode = mode;
        }),
      setSelectedTask: (id) =>
        set((state) => {
          state.selectedTask = id;
        }),
      updateFilters: (filters) =>
        set((state) => {
          state.filters = { ...state.filters, ...filters };
        }),
    },
  }))
);