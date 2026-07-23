import { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ProfileCard from "../components/ProfileCard";
import EditProfileModal from "../components/EditProfileModal";
import {
  getProfile,
  updateProfile,
} from "../services/profileService";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Fetch profile from backend
  const fetchProfile = async () => {
    try {
      setLoading(true);
      const data = await getProfile();
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
      alert(error.message || "Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // Update profile
  const saveProfile = async (updatedProfile) => {
    try {
      const user = await updateProfile(updatedProfile);
      setProfile(user);
      setShowModal(false);

      alert("Profile updated successfully.");
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to update profile");
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-96">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
            Loading Profile...
          </h2>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Header */}

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              My Profile
            </h1>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              View and update your personal information.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow-md transition"
          >
            Edit Profile
          </button>

        </div>

        {/* Profile Card */}

        {profile && (
          <ProfileCard
            profile={profile}
            onEdit={() => setShowModal(true)}
          />
        )}

        {/* Edit Modal */}

        {profile && (
          <EditProfileModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onSave={saveProfile}
            editingProfile={profile}
          />
        )}

      </div>
    </DashboardLayout>
  );
}