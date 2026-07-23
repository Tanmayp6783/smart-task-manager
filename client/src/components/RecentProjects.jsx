import { FaProjectDiagram } from "react-icons/fa";

export default function RecentProjects({ projects }) {
  // Show latest 5 projects
  const recentProjects = [...projects].slice(-5).reverse();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <FaProjectDiagram className="text-indigo-600 text-2xl" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Recent Projects
        </h2>
      </div>

      {/* Empty State */}
      {recentProjects.length === 0 ? (
        <p className="text-center py-8 text-gray-500 dark:text-gray-400">
          No projects available.
        </p>
      ) : (
        <div className="space-y-4">
          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {/* Project Info */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {project.name}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                    project.status === "Completed"
                      ? "bg-green-600"
                      : project.status === "In Progress"
                      ? "bg-blue-600"
                      : "bg-yellow-500"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Progress */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${
                      project.progress >= 100
                        ? "bg-green-600"
                        : project.progress >= 70
                        ? "bg-blue-600"
                        : project.progress >= 40
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>

                <div className="flex justify-between mt-3 text-sm">
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>{project.progress}%</strong> Complete
                  </span>

                  <span className="text-gray-600 dark:text-gray-300">
                    📅 {project.deadline || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}