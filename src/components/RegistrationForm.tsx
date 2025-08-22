// RegistrationForm.tsx
import React, { useState } from "react";
import { Mail, User, CheckCircle, X } from "lucide-react";

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RegistrationData {
  name: string;
  email: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<RegistrationData>({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Read env variables inside component
  const MAILERLITE_API_KEY = import.meta.env.VITE_MAILERLITE_API_KEY;
  const MAILERLITE_GROUP_ID = import.meta.env.VITE_MAILERLITE_GROUP_ID;

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      if (!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
        throw new Error("MailerLite API key or Group ID is not defined");
      }

      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Authorization", `Bearer ${MAILERLITE_API_KEY}`);

      const res = await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            email: formData.email,
            fields: {
              name: formData.name, // ✅ correct placement
            },
            groups: [MAILERLITE_GROUP_ID],
            resubscribe: true,
          }),
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.error("MailerLite error:", errorText);
        throw new Error("Failed to add subscriber");
      }

      setIsSuccess(true);
      setTimeout(() => {
        setFormData({ name: "", email: "" });
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Register for Anniversary Event
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Registration Successful!
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for registering! You'll receive the Zoom link and
                event details in your email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                <p className="text-sm text-rose-700">
                  By registering, you'll receive the event details,
                  and updates from Love Connect.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Registering..." : "Register Now"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
