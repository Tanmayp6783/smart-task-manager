import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardStats from "../components/DashboardStats";
import RecentTasks from "../components/RecentTasks";
import RecentProjects from "../components/RecentProjects";

import { getDashboardData } from "../services/dashboardService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    inProgressTasks: 0,
    totalProjects: 0,
    completedProjects: 0,
    pendingProjects: 0,
    activeProjects: 0,
  });

  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getDashboardData();

      setStats(data.stats);
      setTasks(data.recentTasks);
      setProjects(data.recentProjects);
    } catch (error) {
      console.error("Dashboard Error:", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-600">
            Welcome back! Here's an overview of your projects and tasks.
          </p>
        </div>

        <DashboardStats
          totalTasks={stats.totalTasks}
          completedTasks={stats.completedTasks}
          pendingTasks={stats.pendingTasks}
          inProgressTasks={stats.inProgressTasks}
          totalProjects={stats.totalProjects}
          completedProjects={stats.completedProjects}
          pendingProjects={stats.pendingProjects}
          activeProjects={stats.activeProjects}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentTasks tasks={tasks} />
          <RecentProjects projects={projects} />
        </div>

      </div>
    </DashboardLayout>
  );
}