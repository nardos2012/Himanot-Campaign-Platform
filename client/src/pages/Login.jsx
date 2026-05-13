import { useState } from "react";
import API from "../api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      login(res.data);
      navigate("/admin/dashboard");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="page-container">
      <>
    
    <Helmet>

      <title>
      Welcome Back | GOGOT PARTY
      </title>

      <meta
        name="description"
        content="
          Support the GOGOT PARTY campaign
          and help build a brighter future.
        "
      />

    </Helmet>
    <div className="bg-whiteGloss min-h-screen">
      <Navbar />

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="bg-gradient-to-r from-primary to-primaryDark text-white py-16 text-center"
      >
        <h1 className="text-4xl font-extrabold">Welcome Back</h1>
        <p className="text-white/80">Login to continue</p>
      </motion.section>

      {/* FORM */}
      <div className="max-w-md mx-auto px-6 py-12">
        <motion.form
          onSubmit={submit}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="bg-white rounded-xl shadow-lg p-6 space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded focus:outline-primary"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded focus:outline-primary"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primaryDark transition"
          >
            Login
          </button>
        </motion.form>
      </div>

      <Footer />
    </div>
</>
    </div>
  );
}