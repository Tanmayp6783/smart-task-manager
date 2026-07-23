import { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import SettingsCard from "../components/SettingsCard";
import ChangePasswordModal from "../components/ChangePasswordModal";

export default function Settings() {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("settings");

    return savedSettings
      ? JSON.parse(savedSettings)
      : {
          darkMode: false,
          notifications: true,
          language: "English",
        };
  });

  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // Save Settings
  useEffect(() => {
    localStorage.setItem(
      "settings",
      JSON.stringify(settings)
    );

    if (settings.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings]);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setSettings((prev) => ({
      ...prev,
      darkMode: !prev.darkMode,
    }));
  };

  // Toggle Notifications
  const toggleNotifications = () => {
    setSettings((prev) => ({
      ...prev,
      notifications: !prev.notifications,
    }));
  };

  // Change Language
  const changeLanguage = (language) => {
    setSettings((prev) => ({
      ...prev,
      language,
    }));
  };

  // Logout
  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "/";
    }
  };

  // Clear Local Storage
  const clearStorage = () => {
    const confirmClear = window.confirm(
      "This will remove all saved Tasks, Projects, Profile and Settings. Continue?"
    );

    if (confirmClear) {
      localStorage.removeItem("tasks");
      localStorage.removeItem("projects");
      localStorage.removeItem("profile");
      localStorage.removeItem("settings");

      alert("Local Storage cleared successfully.");

      window.location.reload();
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Settings
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Manage your application preferences and account settings.
          </p>
        </div>

        {/* Settings Card */}
        <SettingsCard
          settings={settings}
          onToggleDarkMode={toggleDarkMode}
          onToggleNotifications={toggleNotifications}
          onLanguageChange={changeLanguage}
          onChangePassword={() =>
            setShowPasswordModal(true)
          }
          onLogout={handleLogout}
          onClearStorage={clearStorage}
        />

        {/* Change Password Modal */}
        <ChangePasswordModal
          isOpen={showPasswordModal}
          onClose={() =>
            setShowPasswordModal(false)
          }
        />

      </div>
    </DashboardLayout>
  );
}