import React, { useState } from "react";
import { X } from "lucide-react";

const NewPasswordPopup = ({ onSave, onClose }) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData.newPassword);
    }
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-opacity-50">
      <div className="w-[350px] rounded-2xl bg-white shadow-lg relative p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Set New Password</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={22} />
          </button>
        </div>

        <hr className="border-gray-300 mb-4" />

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm text-gray-700 mb-2">
              New Password
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="Enter new password"
              className={`w-full px-4 py-3 border ${
                errors.newPassword ? "border-red-500" : "border-gray-300"
              } rounded-xl outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.newPassword}
              onChange={handleChange}
            />
            {errors.newPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.newPassword}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm text-gray-700 mb-2">
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter new password"
              className={`w-full px-4 py-3 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-xl outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#273e8e] rounded-full text-white hover:bg-[#1e327a]"
          >
            Save New Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordPopup;