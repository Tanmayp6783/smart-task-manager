import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaBuilding,
  FaEdit,
} from "react-icons/fa";

export default function ProfileCard({
  profile,
  onEdit,
}) {
  if (!profile) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 transition-all duration-300">

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-8">

        <img
          src={
            profile.avatar ||
            "https://i.pravatar.cc/150?img=3"
          }
          alt="Profile"
          className="w-36 h-36 rounded-full border-4 border-blue-500 object-cover shadow-lg"
        />

        <div className="flex-1 text-center md:text-left">

          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            {profile.name}
          </h2>

          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
            {profile.role || "User"}
          </p>

          <button
            onClick={onEdit}
            className="mt-5 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow-md transition"
          >
            <FaEdit />
            Edit Profile
          </button>

        </div>

      </div>

      {/* Information */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
          <FaEnvelope className="text-blue-600 text-2xl" />

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Email
            </p>

            <p className="font-medium text-gray-800 dark:text-white">
              {profile.email || "-"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
          <FaPhone className="text-green-600 text-2xl" />

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Phone
            </p>

            <p className="font-medium text-gray-800 dark:text-white">
              {profile.phone || "-"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
          <FaBuilding className="text-purple-600 text-2xl" />

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Department
            </p>

            <p className="font-medium text-gray-800 dark:text-white">
              {profile.department || "-"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
          <FaMapMarkerAlt className="text-red-600 text-2xl" />

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Location
            </p>

            <p className="font-medium text-gray-800 dark:text-white">
              {profile.location || "-"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
          <FaBriefcase className="text-orange-600 text-2xl" />

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Role
            </p>

            <p className="font-medium text-gray-800 dark:text-white">
              {profile.role || "User"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
          <FaUser className="text-indigo-600 text-2xl" />

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              User ID
            </p>

            <p className="font-medium text-gray-800 dark:text-white break-all">
              {profile._id}
            </p>
          </div>
        </div>

      </div>

      {/* About */}

      <div className="mt-10">

        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
          About
        </h3>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5">

          <p className="leading-7 text-gray-600 dark:text-gray-300">
            {profile.bio || "No bio added yet."}
          </p>

        </div>

      </div>

      {/* Skills */}

      <div className="mt-10">

        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Skills
        </h3>

        {profile.skills && profile.skills.length > 0 ? (
          <div className="flex flex-wrap gap-3">

            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}

          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            No skills added.
          </p>
        )}

      </div>

    </div>
  );
}