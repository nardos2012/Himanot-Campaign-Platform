import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import {
  Helmet,
} from "react-helmet-async";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        formData
      );

      // SAVE TOKEN
      localStorage.setItem(
        "token",
        response.data.token
      );

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      console.log(
        JSON.parse(localStorage.getItem("user"))
      );
      // alert("Login successful");
      console.log(response.data);

      navigate("/admin/donations");

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login failed"
      );

    }
  };

  return (
    <>
  <Helmet>

    <title>
      Admin Login | GOGOT PARTY
    </title>

    <meta
      name="description"
      content="
        Secure administrator access
        for GOGOT PARTY management system.
      "
    />

  </Helmet>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-primary mb-8">
          Admin Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="block mb-2 font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border p-3 rounded-lg"
              required
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full border p-3 rounded-lg"
              required
            />

          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primaryDark transition"
          >
            Login
          </button>

        </form>

      </div>

    </div>
    </>
  );
}