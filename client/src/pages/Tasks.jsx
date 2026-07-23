import { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import TaskTable from "../components/TaskTable";
import AddTaskModal from "../components/AddTaskModal";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask as deleteTaskAPI,
} from "../services/taskService";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);

  // ==========================
  // Load Tasks
  // ==========================

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const data = await getTasks();

      setTasks(data.tasks);
    } catch (error) {
      console.error("Error loading tasks:", error);
      alert("Failed to load tasks.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Add / Update Task
  // ==========================

  const saveTask = async (taskData) => {
    try {
      if (editingTask) {
        await updateTask(editingTask._id, taskData);

        alert("Task Updated Successfully");
      } else {
        await createTask(taskData);

        alert("Task Added Successfully");
      }

      setShowModal(false);
      setEditingTask(null);

      fetchTasks();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong."
      );
    }
  };

  // ==========================
  // Delete Task
  // ==========================

  const deleteTask = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTaskAPI(id);

      alert("Task Deleted Successfully");

      fetchTasks();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to delete task."
      );
    }
  };

  // ==========================
  // Edit Task
  // ==========================

  const editTask = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  // ==========================
  // Add Task
  // ==========================

  const addNewTask = () => {
    setEditingTask(null);
    setShowModal(true);
  };

  // ==========================
  // Search
  // ==========================

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Header */}

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              Task Management
            </h1>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Create, edit and manage your daily tasks.
            </p>
          </div>

          <button
            onClick={addNewTask}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow-md transition"
          >
            + Add Task
          </button>

        </div>

        {/* Search */}

        <div>
          <input
            type="text"
            placeholder="🔍 Search Task..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Loading */}

        {loading ? (
          <div className="text-center py-10 text-lg font-semibold">
            Loading Tasks...
          </div>
        ) : (
          <TaskTable
            tasks={filteredTasks}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        )}

        {/* Modal */}

        <AddTaskModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setEditingTask(null);
          }}
          onSave={saveTask}
          editingTask={editingTask}
        />

      </div>
    </DashboardLayout>
  );
}