import { Sidebar } from '@/components/sidebar';
import { TaskBoard } from '@/components/task-board';

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <TaskBoard />
      </main>
    </div>
  );
}