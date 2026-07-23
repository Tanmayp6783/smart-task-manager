import { FaTasks } from "react-icons/fa";

export default function RecentTasks({ tasks }) {
  // Show latest 5 tasks
  const recentTasks = [...tasks].slice(-5).reverse();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <FaTasks className="text-blue-600 text-2xl" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Recent Tasks
        </h2>
      </div>

      {/* Empty State */}
      {recentTasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
          No tasks available.
        </p>
      ) : (
        <div className="space-y-4">
          {recentTasks.map((task) => (
            <div
              key={task.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {/* Top */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {task.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {task.project}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                    task.status === "Completed"
                      ? "bg-green-600"
                      : task.status === "In Progress"
                      ? "bg-blue-600"
                      : "bg-yellow-500"
                  }`}
                >
                  {task.status}
                </span>
              </div>

              {/* Bottom */}
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">
                  Priority:{" "}
                  <strong className="text-gray-800 dark:text-white">
                    {task.priority}
                  </strong>
                </span>

                <span className="text-gray-600 dark:text-gray-300">
                  Due:{" "}
                  <strong className="text-gray-800 dark:text-white">
                    {task.dueDate || "N/A"}
                  </strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}