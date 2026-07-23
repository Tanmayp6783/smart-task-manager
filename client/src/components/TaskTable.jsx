import { FaEdit, FaTrash } from "react-icons/fa";

export default function TaskTable({
  tasks,
  onDelete,
  onEdit,
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-x-auto transition-all duration-300">
      <table className="w-full min-w-[900px]">

        {/* Table Header */}

        <thead className="bg-slate-900 dark:bg-gray-950 text-white">
          <tr>
            <th className="p-4 text-left">Task</th>
            <th className="p-4 text-left">Project</th>
            <th className="p-4 text-center">Priority</th>
            <th className="p-4 text-center">Status</th>
            <th className="p-4 text-center">Due Date</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}

        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="py-10 text-center text-gray-500 dark:text-gray-400"
              >
                No tasks found.
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr
                key={task._id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >

                {/* Task */}

                <td className="p-4 font-semibold text-gray-800 dark:text-white">
                  {task.title}
                </td>

                {/* Project */}

                <td className="p-4 text-gray-600 dark:text-gray-300">
                  {task.project}
                </td>

                {/* Priority */}

                <td className="p-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                      task.priority === "High"
                        ? "bg-red-500"
                        : task.priority === "Medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {task.priority}
                  </span>
                </td>

                {/* Status */}

                <td className="p-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                      task.status === "Completed"
                        ? "bg-green-600"
                        : task.status === "In Progress"
                        ? "bg-blue-600"
                        : "bg-gray-500"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>

                {/* Due Date */}

                <td className="p-4 text-center text-gray-600 dark:text-gray-300">
                  {task.dueDate
                    ? new Date(task.dueDate).toLocaleDateString()
                    : "-"}
                </td>

                {/* Actions */}

                <td className="p-4">
                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() => onEdit(task)}
                      title="Edit Task"
                      className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 p-2 rounded-lg transition"
                    >
                      <FaEdit size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(task._id)}
                      title="Delete Task"
                      className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 p-2 rounded-lg transition"
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