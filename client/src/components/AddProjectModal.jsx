import { useState, useEffect } from "react";
import axios from "axios";

export default function AddProjectModal({
  isOpen,
  onClose,
  onSave,
  editingProject,
}) {
  const initialForm = {
    name: "",
    description: "",
    progress: 0,
    status: "Pending",
    deadline: "",
  };

  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (editingProject) {
      setFormData(editingProject);
    } else {
      setFormData(initialForm);
    }
  }, [editingProject, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "progress"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.description.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    const project = {
      ...formData,
      id: editingProject ? editingProject.id : Date.now(),
    };

    onSave(project);
    setFormData(initialForm);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300">

        {/* Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {editingProject ? "Edit Project" : "Add New Project"}
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Fill in the project details below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">

          {/* Project Name */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Project Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter project name"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Enter project description"
              required
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Progress */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Progress ({formData.progress}%)
            </label>

            <input
              type="range"
              name="progress"
              min="0"
              max="100"
              value={formData.progress}
              onChange={handleChange}
              className="w-full accent-blue-600 cursor-pointer"
            />
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

          {/* Deadline */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Deadline
            </label>

            <input
              type="date"
              name="deadline"
              value={formData.deadline}
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
              {editingProject ? "Update Project" : "Add Project"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}