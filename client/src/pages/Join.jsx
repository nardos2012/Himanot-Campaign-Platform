import { useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Join() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      city: "",
      skills: "",
      message: "",
    });

  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  // SUBMIT
  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://${API_URL}/api/supporters",
        formData
      );

      alert(
        "Thank you for joining GOGOT PARTY!"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        skills: "",
        message: "",
      });

    } catch (error) {

      console.error(error);

      alert(
        "Submission failed"
      );

    }
  };

  return (

    <div
      className="
        min-h-screen
        bg-white
        dark:bg-gray-900
        text-black
        dark:text-white
        transition
        duration-300
      "
    >

      <Navbar />

      {/* HERO */}
      <section
        className="
          bg-gradient-to-r
          from-primary
          to-primaryDark
          text-white
          py-20
          text-center
        "
      >

        <h1
          className="
            text-5xl
            font-extrabold
            mb-4
          "
        >

          Join The Movement

        </h1>

        <p
          className="
            text-white/80
            text-lg
          "
        >

          Become part of the
          future of Ethiopia.

        </p>

      </section>

      {/* FORM */}
      <section
        className="
          max-w-4xl
          mx-auto
          p-10
        "
      >

        <div
          className="
            bg-white
            dark:bg-gray-800
            shadow-2xl
            rounded-2xl
            p-10
            transition
            duration-300
          "
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              className="
                w-full
                border
                bg-white
                dark:bg-gray-700
                dark:text-white
                dark:border-gray-600
                p-4
                rounded-lg
                focus:outline-none
                focus:ring-2
                focus:ring-primary
              "
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                border
                bg-white
                dark:bg-gray-700
                dark:text-white
                dark:border-gray-600
                p-4
                rounded-lg
                focus:outline-none
                focus:ring-2
                focus:ring-primary
              "
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="
                w-full
                border
                bg-white
                dark:bg-gray-700
                dark:text-white
                dark:border-gray-600
                p-4
                rounded-lg
                focus:outline-none
                focus:ring-2
                focus:ring-primary
              "
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="
                w-full
                border
                bg-white
                dark:bg-gray-700
                dark:text-white
                dark:border-gray-600
                p-4
                rounded-lg
                focus:outline-none
                focus:ring-2
                focus:ring-primary
              "
              required
            />

            <input
              type="text"
              name="skills"
              placeholder="Skills / Interests"
              value={formData.skills}
              onChange={handleChange}
              className="
                w-full
                border
                bg-white
                dark:bg-gray-700
                dark:text-white
                dark:border-gray-600
                p-4
                rounded-lg
                focus:outline-none
                focus:ring-2
                focus:ring-primary
              "
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="
                w-full
                border
                bg-white
                dark:bg-gray-700
                dark:text-white
                dark:border-gray-600
                p-4
                rounded-lg
                focus:outline-none
                focus:ring-2
                focus:ring-primary
              "
            />

            <button
              type="submit"
              className="
                w-full
                bg-primary
                hover:bg-primaryDark
                text-white
                py-4
                rounded-lg
                font-semibold
                transition
              "
            >

              Join Campaign

            </button>

          </form>

        </div>

      </section>

      <Footer />

    </div>
  );
}