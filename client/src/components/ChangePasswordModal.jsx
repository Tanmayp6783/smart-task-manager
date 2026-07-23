import { useState, useEffect } from "react";
import PasswordForm from "./PasswordForm";

export default function ChangePasswordModal({
  isOpen,
  onClose,
}) {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New Password and Confirm Password do not match.");
      return;
    }

    // Backend API integration will be added later
    alert("Password changed successfully!");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-2xl transition-all duration-300">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Change Password
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Update your account password securely.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-3xl leading-none text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          <PasswordForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onClose={onClose}
          />
        </div>

      </div>
    </div>
  );
}