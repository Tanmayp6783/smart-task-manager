import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaProjectDiagram,
  FaCog,
  FaUser,
} from "react-icons/fa";

const menu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaHome />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: <FaTasks />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaUser />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FaCog />,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 dark:bg-gray-950 text-white shadow-xl transition-colors duration-300">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-center">
          Task Manager
        </h1>
      </div>

      {/* Navigation */}
      <nav className="mt-5">
        {menu.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `mx-3 mb-2 flex items-center gap-4 rounded-lg px-5 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-6 left-0 w-64 px-6">
        <div className="border-t border-slate-700 dark:border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            Smart Task Manager
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Version 1.0
          </p>
        </div>
      </div>
    </aside>
  );
}