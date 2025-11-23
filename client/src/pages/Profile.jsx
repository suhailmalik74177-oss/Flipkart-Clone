// client/src/pages/Profile.jsx
import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiEdit2, FiCheckCircle } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";

function Profile() {
  const { user, clearUser, saveUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profilePic: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return navigate("/login");

    setFormData({
      name: user.name || "",
      email: user.email || "",
      profilePic: user.profilePic || "",
    });
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData((prev) => ({
        ...prev,
        profilePic: URL.createObjectURL(file),
      }));
    }
  };

  const handleSave = () => {
    if (!user) return;

    const updated = {
      ...user,
      name: formData.name,
      email: formData.email,
      profilePic: formData.profilePic,
    };

    // saveUser will update local storage & context
    saveUser(updated, user.token);
    setIsEditing(false);

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleLogout = () => {
    clearUser();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="relative bg-gradient-to-r from-green-600 to-green-500 h-44 flex items-center justify-center">
          <div className="absolute bottom-[-60px]">
            <div className="relative">
              <img
                src={formData.profilePic}
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
              />

              {isEditing && (
                <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <FiEdit2 className="text-green-600" size={18} />
                </label>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 px-10 pb-10">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
            My Profile
          </h2>

          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <label className="text-gray-600 font-medium flex items-center gap-2">
                <CgProfile className="text-green-600" /> Full Name
              </label>

              {isEditing ? (
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-b border-gray-300 focus:border-green-600 py-2 w-2/3 bg-transparent"
                />
              ) : (
                <p className="text-gray-800 font-semibold">{formData.name}</p>
              )}
            </div>

            <div className="flex justify-between items-center">
              <label className="text-gray-600 font-medium flex items-center gap-2">
                <MdEmail className="text-green-600" /> Email Address
              </label>

              {isEditing ? (
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b border-gray-300 focus:border-green-600 py-2 w-2/3 bg-transparent"
                />
              ) : (
                <p className="text-gray-800 font-semibold">{formData.email}</p>
              )}
            </div>

            <div className="flex justify-between items-center">
              <label className="text-gray-600 font-medium flex items-center gap-2">
                <AiOutlineCalendar className="text-green-600" /> Member Since
              </label>
              <p className="text-gray-800 font-semibold">
                {user.joinedDate ? new Date(user.joinedDate).toLocaleDateString() : "—"}
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-10">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md font-semibold"
                >
                  <FiCheckCircle size={18} /> Save Changes
                </button>

                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md"
                >
                  <FiEdit2 size={18} /> Edit Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md"
                >
                  <IoMdLogOut size={18} /> Logout
                </button>
              </>
            )}
          </div>

          {isSaved && (
            <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow">
              <FiCheckCircle size={20} /> Profile updated successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
