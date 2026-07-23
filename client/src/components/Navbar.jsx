import { FaBell } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-5 flex justify-between items-center transition-colors duration-300">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Dashboard
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Notification */}
        <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
          <FaBell size={22} />
        </button>

        {/* User Avatar */}
        <img
          src="https://i.pravatar.cc/45"
          alt="User"
          className="w-11 h-11 rounded-full border-2 border-blue-500 object-cover"
        />
      </div>
    </header>
  );
}