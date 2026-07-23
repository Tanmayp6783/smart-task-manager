import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";

const initialForm = {
  title: "",
  project: "",
  priority: "Medium",
  status: "Pending",
  dueDate: "",
};

export default function AddTaskModal({
  isOpen,
  onClose,
  onSave,
  editingTask,
}) {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title || "",
        project: editingTask.project || "",
        priority: editingTask.priority || "Medium",
        status: editingTask.status || "Pending",
        dueDate: editingTask.dueDate
          ? editingTask.dueDate.substring(0, 10)
          : "",
      });
    } else {
      setFormData(initialForm);
    }
  }, [editingTask, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-lg p-6">

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {editingTask ? "Edit Task" : "Add Task"}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-red-500"
          >
            ×
          </button>
        </div>

        <TaskForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          editingTask={editingTask}
          onClose={onClose}
        />
      </div>
    </div>
  );
}