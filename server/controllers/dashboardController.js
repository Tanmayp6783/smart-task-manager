const Task = require("../models/Task");
const Project = require("../models/Project");

exports.getDashboardStats = async (req, res) => {
  try {
    const userId = req.user._id;

    // ==========================
    // Task Statistics
    // ==========================

    const totalTasks = await Task.countDocuments({ user: userId });

    const completedTasks = await Task.countDocuments({
      user: userId,
      status: "Completed",
    });

    const pendingTasks = await Task.countDocuments({
      user: userId,
      status: "Pending",
    });

    const inProgressTasks = await Task.countDocuments({
      user: userId,
      status: "In Progress",
    });

    // ==========================
    // Project Statistics
    // ==========================

    const totalProjects = await Project.countDocuments({
      user: userId,
    });

    const completedProjects = await Project.countDocuments({
      user: userId,
      status: "Completed",
    });

    const pendingProjects = await Project.countDocuments({
      user: userId,
      status: "Pending",
    });

    const activeProjects = await Project.countDocuments({
      user: userId,
      status: "In Progress",
    });

    // ==========================
    // Recent Data
    // ==========================

    const recentTasks = await Task.find({ user: userId })
      .sort({ createdAt: -1 })
      .limit(5);

    const recentProjects = await Project.find({ user: userId })
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      stats: {
        totalTasks,
        completedTasks,
        pendingTasks,
        inProgressTasks,
        totalProjects,
        completedProjects,
        pendingProjects,
        activeProjects,
      },
      recentTasks,
      recentProjects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};