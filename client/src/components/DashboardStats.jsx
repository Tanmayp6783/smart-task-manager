import {
  FaTasks,
  FaProjectDiagram,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

export default function DashboardStats({
  totalTasks,
  completedTasks,
  pendingTasks,
  inProgressTasks,
  totalProjects,
  completedProjects,
  pendingProjects,
  activeProjects,
}) {
  const cards = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: <FaTasks size={28} />,
      color: "bg-blue-600",
    },
    {
      title: "Completed Tasks",
      value: completedTasks,
      icon: <FaCheckCircle size={28} />,
      color: "bg-green-600",
    },
    {
      title: "Pending Tasks",
      value: pendingTasks,
      icon: <FaClock size={28} />,
      color: "bg-yellow-500",
    },
    {
      title: "In Progress Tasks",
      value: inProgressTasks,
      icon: <FaTasks size={28} />,
      color: "bg-purple-600",
    },
    {
      title: "Total Projects",
      value: totalProjects,
      icon: <FaProjectDiagram size={28} />,
      color: "bg-indigo-600",
    },
    {
      title: "Completed Projects",
      value: completedProjects,
      icon: <FaCheckCircle size={28} />,
      color: "bg-emerald-600",
    },
    {
      title: "Pending Projects",
      value: pendingProjects,
      icon: <FaClock size={28} />,
      color: "bg-red-500",
    },
    {
      title: "Active Projects",
      value: activeProjects,
      icon: <FaProjectDiagram size={28} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex justify-between items-center">
            {/* Left */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {card.title}
              </h3>

              <p className="mt-3 text-3xl font-bold text-gray-800 dark:text-white">
                {card.value}
              </p>
            </div>

            {/* Right */}
            <div
              className={`${card.color} text-white p-4 rounded-full shadow-lg`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}