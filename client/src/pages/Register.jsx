import { useState } from "react";

import axios from "axios";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { API_URL } from "../config";
import {
  Helmet,
} from "react-helmet-async";

export default function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(

        `${API_URL}/api/auth/register`,

        form

      );

      toast.success(
        "Registered successfully"
      );

      setForm({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message ||
        "Registration failed"
      );

    }

  };

  return (
    <div className="page-container">
    <>
  <Helmet>

    <title>
      Register | GOGOT PARTY
    </title>

    <meta
      name="description"
      content="
        Register to access the
        GOGOT PARTY campaign platform.
      "
    />

  </Helmet>

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

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        className="
          max-w-md
          mx-auto
          mt-10
          p-8
          shadow-2xl
          rounded-2xl
          bg-white
          dark:bg-gray-800
        "
      >

        <h2
          className="
            text-3xl
            font-extrabold
            mb-6
            text-center
          "
        >

          Register

        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input

            type="text"

            value={form.name}

            placeholder="Name"

            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }

            className="
              w-full
              p-3
              rounded-lg
              border
              bg-white
              dark:bg-gray-700
              dark:border-gray-600
              dark:text-white
            "

            required

          />

          <input

            type="email"

            value={form.email}

            placeholder="Email"

            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }

            className="
              w-full
              p-3
              rounded-lg
              border
              bg-white
              dark:bg-gray-700
              dark:border-gray-600
              dark:text-white
            "

            required

          />

          <input

            type="password"

            value={form.password}

            placeholder="Password"

            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }

            className="
              w-full
              p-3
              rounded-lg
              border
              bg-white
              dark:bg-gray-700
              dark:border-gray-600
              dark:text-white
            "

            required

          />

          <button

            type="submit"

            className="
              w-full
              bg-primary
              hover:bg-primaryDark
              text-white
              py-3
              rounded-xl
              font-bold
              transition
            "
          >

            Register

          </button>

        </form>

      </motion.div>

      <Footer />

    </div>
    </>
</div>
  );

}