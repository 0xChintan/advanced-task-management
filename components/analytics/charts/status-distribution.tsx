"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useTaskStatusData } from "@/hooks/use-task-status";

export function StatusDistributionChart() {
  const chartData = useTaskStatusData();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Status Distribution</CardTitle>
        <CardDescription>Overview of tasks by their current status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis 
                dataKey="status"
                tickFormatter={(value) => value}
              />
              <YAxis 
                allowDecimals={false}
                tickFormatter={(value) => value.toString()}
              />
              <Tooltip />
              <Bar dataKey="count" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}