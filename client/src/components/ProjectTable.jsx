import { FaEdit, FaTrash } from "react-icons/fa";

export default function ProjectTable({
  projects,
  onDelete,
  onEdit,
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-x-auto transition-all duration-300">
      <table className="w-full min-w-[950px]">
        {/* Table Header */}
        <thead className="bg-slate-900 dark:bg-gray-950 text-white">
          <tr>
            <th className="p-4 text-left">Project</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-center">Progress</th>
            <th className="p-4 text-center">Status</th>
            <th className="p-4 text-center">Deadline</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {projects.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="py-10 text-center text-gray-500 dark:text-gray-400"
              >
                No projects found.
              </td>
            </tr>
          ) : (
            projects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                {/* Project Name */}
                <td className="p-4 font-semibold text-gray-800 dark:text-white">
                  {project.name}
                </td>

                {/* Description */}
                <td className="p-4 text-gray-600 dark:text-gray-300">
                  {project.description}
                </td>

                {/* Progress */}
                <td className="p-4">
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

                  <p className="text-center mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {project.progress}%
                  </p>
                </td>

                {/* Status */}
                <td className="p-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                      project.status === "Completed"
                        ? "bg-green-600"
                        : project.status === "In Progress"
                        ? "bg-blue-600"
                        : "bg-gray-500"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>

                {/* Deadline */}
                <td className="p-4 text-center text-gray-600 dark:text-gray-300">
                  {project.deadline}
                </td>

                {/* Actions */}
                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => onEdit(project)}
                      title="Edit Project"
                      className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 p-2 rounded-lg transition duration-300"
                    >
                      <FaEdit size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(project.id)}
                      title="Delete Project"
                      className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 p-2 rounded-lg transition duration-300"
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}