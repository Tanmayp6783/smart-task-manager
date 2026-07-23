import {
  FaMoon,
  FaBell,
  FaGlobe,
  FaLock,
  FaSignOutAlt,
  FaTrash,
} from "react-icons/fa";

export default function SettingsCard({
  settings,
  onToggleDarkMode,
  onToggleNotifications,
  onLanguageChange,
  onChangePassword,
  onLogout,
  onClearStorage,
}) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8 transition-all duration-300">

      <div className="space-y-8">

        {/* Dark Mode */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200 dark:border-gray-700 pb-6">

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900">
              <FaMoon className="text-indigo-600 dark:text-indigo-300 text-xl" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Dark Mode
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enable or disable the dark theme.
              </p>
            </div>
          </div>

          <button
            onClick={onToggleDarkMode}
            className={`px-5 py-2 rounded-lg font-semibold text-white transition duration-300 ${
              settings.darkMode
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
          >
            {settings.darkMode ? "ON" : "OFF"}
          </button>

        </div>

        {/* Notifications */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200 dark:border-gray-700 pb-6">

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-yellow-100 dark:bg-yellow-900">
              <FaBell className="text-yellow-600 dark:text-yellow-300 text-xl" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Notifications
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive task and project notifications.
              </p>
            </div>
          </div>

          <button
            onClick={onToggleNotifications}
            className={`px-5 py-2 rounded-lg font-semibold text-white transition duration-300 ${
              settings.notifications
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
          >
            {settings.notifications ? "ON" : "OFF"}
          </button>

        </div>

        {/* Language */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200 dark:border-gray-700 pb-6">

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900">
              <FaGlobe className="text-blue-600 dark:text-blue-300 text-xl" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Language
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Choose your preferred language.
              </p>
            </div>
          </div>

          <select
            value={settings.language}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Japanese">Japanese</option>
          </select>

        </div>

        {/* Change Password */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200 dark:border-gray-700 pb-6">

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900">
              <FaLock className="text-red-600 dark:text-red-300 text-xl" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Change Password
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Update your account password.
              </p>
            </div>
          </div>

          <button
            onClick={onChangePassword}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition duration-300"
          >
            Change
          </button>

        </div>

        {/* Logout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200 dark:border-gray-700 pb-6">

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-900">
              <FaSignOutAlt className="text-orange-600 dark:text-orange-300 text-xl" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Logout
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Sign out of your account.
              </p>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-300"
          >
            Logout
          </button>

        </div>

        {/* Clear Storage */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900">
              <FaTrash className="text-red-600 dark:text-red-300 text-xl" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Clear Local Storage
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Remove all locally stored tasks, projects, profile and settings.
              </p>
            </div>
          </div>

          <button
            onClick={onClearStorage}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md transition duration-300"
          >
            Clear
          </button>

        </div>

      </div>

    </div>
  );
}