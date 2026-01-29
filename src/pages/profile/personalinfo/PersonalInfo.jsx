import React, { useEffect, useState } from "react";
import { User, MessageCircle, Phone, Edit2, Save, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  updateProfile,
} from "../../../redux/thunks/profileThunks";
import { toast } from "react-toastify";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const { agent, loading, error } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "Male",
    occupation: "",
    state: "",
    pincode: "",
    email: "",
    phone: "",
  });

  const [editSections, setEditSections] = useState({
    personalInfo: false,
    email: false,
    phone: false,
  });

  // Fetch profile on mount
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  // Set local form state when agent data arrives
  useEffect(() => {
    if (agent) {
      const nameParts = agent.name ? agent.name.split(" ") : ["", ""];
      setFormData({
        firstName: nameParts[0] || "",
        lastName: nameParts[1] || "",
        gender: agent.gender
          ? agent.gender.charAt(0).toUpperCase() + agent.gender.slice(1)
          : "Male",
        occupation: agent.occupation || "",
        state: agent.state || "",
        pincode: agent.pincode || "",
        email: agent.email || "",
        phone: agent.phone || "",
      });
    }
  }, [agent]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenderChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
  };

  const toggleEdit = (section) => {
    setEditSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleUpdate = () => {
    // Prepare payload for API
    const payload = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      gender: formData.gender.toLowerCase(),
      occupation: formData.occupation,
      state: formData.state,
      pincode: formData.pincode,
      email: formData.email,
      phone: formData.phone,
    };

    dispatch(updateProfile(payload))
      .unwrap()
      .then(() => {
        toast.success("Profile updated successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
        // Reset all edit modes
        setEditSections({
          personalInfo: false,
          email: false,
          phone: false,
        });
      })
      .catch((err) => {
        toast.error(
          `Failed to update profile: ${err.message || "Unknown error"}`,
          {
            position: "top-right",
            autoClose: 3000,
          },
        );
      });
  };

  if (loading) return <p className="p-4 text-center">Loading profile...</p>;
  if (error) return <p className="p-4 text-center text-red-500">{error}</p>;
  if (!agent) return null;

  return (
    <div className="flex-1 p-3 sm:p-6 lg:p-8 bg-gray-50 mt-5 w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
        {/* Personal Information Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                Personal Information
              </h2>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
              <div className="flex flex-col items-start sm:items-end gap-1">
                {agent.isKycCompleted ? (
                  <p className="text-xs sm:text-sm font-semibold flex items-center gap-2 text-green-600">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="hidden xs:inline">KYC Approved</span>
                    <span className="xs:hidden">KYC Approved</span>
                  </p>
                ) : agent.kycStatus === "submitted" ? (
                  <p className="text-xs sm:text-sm font-semibold flex items-center gap-2 text-yellow-600">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500 animate-pulse"></span>
                    <span className="hidden sm:inline">
                      KYC submitted. Approval in progress
                    </span>
                    <span className="sm:hidden">Pending</span>
                  </p>
                ) : (
                  <p className="text-xs sm:text-sm font-semibold flex items-center gap-2 text-red-600">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500"></span>
                    <span className="hidden sm:inline">
                      Please submit your KYC details
                    </span>
                    <span className="sm:hidden">Submit KYC</span>
                  </p>
                )}
              </div>
              <button
                onClick={() => toggleEdit("personalInfo")}
                className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300 flex-shrink-0"
                title={editSections.personalInfo ? "Cancel" : "Edit"}
              >
                {editSections.personalInfo ? (
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                ) : (
                  <Edit2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <EditableInfoBox
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              disabled={!editSections.personalInfo}
            />
            <EditableInfoBox
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              disabled={!editSections.personalInfo}
            />

            {/* Gender */}
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
              <p className="text-xs text-gray-500 mb-2 uppercase font-semibold">
                Gender
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {["Male", "Female", "Other"].map((g) => (
                  <label
                    key={g}
                    className={`flex items-center gap-2 ${
                      editSections.personalInfo
                        ? "cursor-pointer"
                        : "cursor-not-allowed opacity-60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={formData.gender === g}
                      onChange={handleGenderChange}
                      disabled={!editSections.personalInfo}
                      className="disabled:cursor-not-allowed w-4 h-4"
                    />
                    <span className="text-sm sm:text-base font-semibold text-gray-800">
                      {g}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <EditableInfoBox
              label="Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              disabled={!editSections.personalInfo}
            />
            <EditableInfoBox
              label="State"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              disabled={!editSections.personalInfo}
            />
            <EditableInfoBox
              label="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              disabled={!editSections.personalInfo}
            />
          </div>
        </div>

        {/* Email Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 border border-gray-200">
          <div className="flex items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-6 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              </div>
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                Email Address
              </h2>
            </div>
            <button
              onClick={() => toggleEdit("email")}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300 flex-shrink-0"
              title={editSections.email ? "Cancel" : "Edit"}
            >
              {editSections.email ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              ) : (
                <Edit2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              )}
            </button>
          </div>

          <EditableInfoBox
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            disabled={!editSections.email}
          />
        </div>

        {/* Mobile Number Section */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8 border border-gray-200">
          <div className="flex items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-6 pb-4 border-b border-gray-200">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              </div>
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                Mobile Number
              </h2>
            </div>
            <button
              onClick={() => toggleEdit("phone")}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300 flex-shrink-0"
              title={editSections.phone ? "Cancel" : "Edit"}
            >
              {editSections.phone ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              ) : (
                <Edit2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              )}
            </button>
          </div>

          <EditableInfoBox
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            type="tel"
            prefix="+91 "
            disabled={!editSections.phone}
          />
        </div>

        {/* Update Button */}
        <div className="flex justify-center sm:justify-end px-2 sm:px-0">
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-2 px-6 sm:px-8 rounded-lg disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
          >
            <Save className="w-4 h-4" />
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

/* Editable Info Box */
const EditableInfoBox = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  prefix = "",
  disabled = false,
}) => (
  <div
    className={`bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200 transition-all ${
      disabled ? "opacity-60" : ""
    }`}
  >
    <p className="text-xs text-gray-500 mb-2 uppercase font-semibold">
      {label}
    </p>
    <div className="flex items-center">
      {prefix && (
        <span className="text-sm sm:text-base text-gray-800 font-semibold mr-1">
          {prefix}
        </span>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`text-sm sm:text-base text-gray-800 font-semibold bg-transparent border-none outline-none focus:ring-0 w-full ${
          disabled ? "cursor-not-allowed" : ""
        }`}
      />
    </div>
  </div>
);

export default PersonalInfo;
