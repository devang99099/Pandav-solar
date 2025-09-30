import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import footerLogo from "../assets/footer-logo.jpeg";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All fields are required!");
      return;
    }

    console.log("Form Submitted:", form);
    setSubmitted(true);
    setFadeOut(false);

    setForm({ name: "", email: "", message: "" });

    setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    setTimeout(() => {
      setSubmitted(false);
    }, 3500);
  };

  return (
    <div className="bg-cover bg-center flex items-center justify-center px-6 py-20 bg-gray-100">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg grid md:grid-cols-2">
        {/* Left: Contact Info */}
        <div className="bg-[#111827] text-white p-10 rounded-l-lg">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <img src={footerLogo} alt=" Logo " className="w-30" />
          <p className="text-gray-300 mb-8">
            We'd love to hear from you! Whether you have questions about our
            services, need support, or just want to say hello, feel free to
            reach out.
          </p>

          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-white text-black p-3 rounded-full">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400">Address</h4>
                <p className="text-sm text-gray-300">
                  4671 Sugar Camp Road,
                  <br />
                  Owatonna, Minnesota, 55060
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-white text-black p-3 rounded-full">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400">Phone</h4>
                <p className="text-sm text-gray-300">561-456-2321</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-white text-black p-3 rounded-full">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400">Email</h4>
                <p className="text-sm text-gray-300">example@email.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="p-10">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Send Message
          </h3>

          {submitted && (
            <div
              className={`bg-green-100 text-green-800 p-3 rounded text-center mb-4 transition-opacity duration-1000 ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
            >
              Thank you for reaching out! We will get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />

            <textarea
              name="message"
              placeholder="Type your Message..."
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full border-b border-gray-400 focus:outline-none py-2"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-2 font-semibold rounded-md hover:bg-cyan-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
