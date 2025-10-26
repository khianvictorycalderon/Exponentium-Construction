import { useState } from "react";
import SectionContainer from "../components/section-container";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    details: "",
  });

  const handleChange = (field: keyof typeof formData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const { name, email, message, details } = formData;

    if (!name || !email || !message || !details) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    alert("Your message has been successfully mock submitted.\n(Note: This is a demo — your message was not actually sent.)");
    setFormData({
      name: "",
      email: "",
      message: "",
      details: "",
    });
  };

  return (
    <SectionContainer className="mt-32 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
        Ready for your next Project?
      </h2>
      <h3 className="text-base md:text-lg lg:text-xl italic font-semibold text-gray-700">
        Let's build something exceptional together
      </h3>

      <div className="flex flex-col md:flex-row gap-4 pt-8">
        <div className="flex-1 flex flex-col text-left">
          <label className="font-medium mb-1">Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="bg-orange-50 border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="flex-1 flex flex-col text-left">
          <label className="font-medium mb-1">Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="bg-orange-50 border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-6">
        <div className="flex-1 flex flex-col text-left">
          <label className="font-medium mb-1">Inquiry/Message:</label>
          <textarea
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="bg-orange-50 border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 h-[20vh] md:h-[40vh] resize-none"
          />
        </div>

        <div className="flex-1 flex flex-col text-left">
          <label className="font-medium mb-1">Project Details:</label>
          <textarea
            value={formData.details}
            onChange={(e) => handleChange("details", e.target.value)}
            className="bg-orange-50 border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 h-[20vh] md:h-[40vh] resize-none"
          />
        </div>
      </div>

      <div className="pt-8">
        <button
          onClick={handleSubmit}
          className="bg-orange-500 text-white font-semibold px-40 py-4 rounded-md shadow-md hover:bg-orange-600 transition-all cursor-pointer"
        >
          Contact
        </button>
      </div>
    </SectionContainer>
  );
};
