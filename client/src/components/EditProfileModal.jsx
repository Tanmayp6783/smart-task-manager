import { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";

export default function EditProfileModal({
  isOpen,
  onClose,
  onSave,
  editingProfile,
}) {
  const initialProfile = {
    name: "",
    email: "",
    phone: "",
    role: "",
    department: "",
    location: "",
    bio: "",
    skills: [],
    avatar: "",
  };

  const [formData, setFormData] = useState(initialProfile);

  useEffect(() => {
    if (editingProfile) {
      setFormData({
        name: editingProfile.name || "",
        email: editingProfile.email || "",
        phone: editingProfile.phone || "",
        role: editingProfile.role || "",
        department: editingProfile.department || "",
        location: editingProfile.location || "",
        bio: editingProfile.bio || "",
        avatar: editingProfile.avatar || "",
        skills: editingProfile.skills || [],
      });
    } else {
      setFormData(initialProfile);
    }
  }, [editingProfile, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "skills") {
      setFormData((prev) => ({
        ...prev,
        skills: value
          .split(",")
          .map((skill) => skill.trim())
          .filter((skill) => skill !== ""),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-2xl">

        {/* Header */}
        <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-5">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Edit Profile
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Update your personal information.
          </p>
        </div>

        {/* Form */}
        <div className="p-6">
          <ProfileForm
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