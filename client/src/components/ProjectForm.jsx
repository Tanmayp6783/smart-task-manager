export default function ProfileForm({
  formData,
  handleChange,
  handleSubmit,
  onClose,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Full Name */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Phone
        </label>

        <input
          type="text"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          placeholder="Enter phone number"
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Role */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Role
        </label>

        <input
          type="text"
          name="role"
          value={formData.role || ""}
          onChange={handleChange}
          placeholder="Enter role"
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Department */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Department
        </label>

        <input
          type="text"
          name="department"
          value={formData.department || ""}
          onChange={handleChange}
          placeholder="Enter department"
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Location
        </label>

        <input
          type="text"
          name="location"
          value={formData.location || ""}
          onChange={handleChange}
          placeholder="Enter location"
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Avatar */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Avatar URL
        </label>

        <input
          type="text"
          name="avatar"
          value={formData.avatar || ""}
          onChange={handleChange}
          placeholder="https://example.com/avatar.jpg"
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Skills */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Skills (comma separated)
        </label>

        <input
          type="text"
          name="skills"
          value={
            Array.isArray(formData.skills)
              ? formData.skills.join(", ")
              : ""
          }
          onChange={handleChange}
          placeholder="React, Node.js, MongoDB, Java"
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Bio */}
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Bio
        </label>

        <textarea
          name="bio"
          rows="5"
          value={formData.bio || ""}
          onChange={handleChange}
          placeholder="Write something about yourself..."
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-2">

        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2.5 rounded-lg bg-gray-500 text-white hover:bg-gray-600 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Save Changes
        </button>

      </div>

    </form>
  );
}