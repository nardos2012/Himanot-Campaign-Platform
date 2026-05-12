import { useState } from "react";
import API from "../api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("Registered successfully");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto mt-10 p-6 shadow rounded"
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-2 mb-3 border"
            placeholder="Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="w-full p-2 mb-3 border"
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            className="w-full p-2 mb-3 border"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button className="w-full bg-black text-white p-2 rounded">
            Register
          </button>
        </form>
      </motion.div>

      <Footer />
    </div>
  );
}