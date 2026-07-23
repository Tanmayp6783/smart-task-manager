export default function TaskForm({
  formData,
  handleChange,
  handleSubmit,
  editingTask,
  onClose,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {/* Task Title */}
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Task Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task title"
          required
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Project */}
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Project
        </label>

        <input
          type="text"
          name="project"
          value={formData.project}
          onChange={handleChange}
          placeholder="Enter project name"
          required
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Priority */}
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Priority
        </label>

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Status */}
      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Status
        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Due Date */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Due Date
        </label>

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg bg-gray-500 px-5 py-2.5 text-white hover:bg-gray-600 transition duration-300"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700 transition duration-300"
        >
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
}