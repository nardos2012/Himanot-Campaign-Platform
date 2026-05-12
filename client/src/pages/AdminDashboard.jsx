import { useEffect, useState } from "react";
import API from "../api";
import Card from "../components/ui/Card";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "../utils/animations";
import { useAuth } from "../context/AuthContext";


import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function AdminDashboard() {
  const { user } = useAuth();
  const [data, setData] = useState({
    donations: {},
    users: {},
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchStats = async () => {
    try {
      const res = await API.get("/admin/stats");
      setData(res.data);

      // ✅ MOVE IT HERE
      const res2 = await API.get("/donations");
      setRecent(res2.data.slice(0, 5));

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  fetchStats();

  const interval = setInterval(fetchStats, 10000);
  return () => clearInterval(interval);
}, []);

  if (loading) return <p>Loading dashboard...</p>;

  // ✅ SAFE DATA
  const d = data?.donations || {};
  const u = data?.users || {};

  // 📊 PIE DATA
  const pieData = [
    { name: "Confirmed", value: d.confirmed || 0 },
    { name: "Pending", value: d.pending || 0 },
    { name: "Rejected", value: d.rejected || 0 },
  ];

  const COLORS = ["#16a34a", "#f59e0b", "#ef4444"];

  // 📈 BAR DATA
  const barData = [
    { name: "Confirmed", amount: d.confirmed || 0 },
    { name: "Pending", amount: d.pending || 0 },
    { name: "Rejected", amount: d.rejected || 0 },
  ];

  return (
  <div className="min-h-screen bg-whiteGloss p-6">

    <h2 className="text-2xl font-bold text-primary mb-6">
      Admin Dashboard
    </h2>

    {/* CARDS */}
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <motion.div variants={fadeUp}>
        <Card title="Confirmed" value={d.confirmed ?? 0} />
      </motion.div>

      <motion.div variants={fadeUp}>
        <Card title="Pending" value={d.pending ?? 0} />
      </motion.div>

      <motion.div variants={fadeUp}>
        <Card title="Revenue" value={d.totalRevenue ?? 0} />
      </motion.div>

      <motion.div variants={fadeUp}>
        <Card title="Admins" value={u.admin ?? 0} />
      </motion.div>
    </motion.div>

    {/* CHARTS */}
    <div className="grid md:grid-cols-2 gap-6 mt-10">

      {/* PIE */}
      <div className="bg-white rounded-xl shadow-md p-4 h-[320px]">
        <h3 className="font-semibold text-primary mb-2">
          Donation Status
        </h3>

        <ResponsiveContainer>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={100}>
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i] || "#ccc"} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* BAR */}
      <div className="bg-white rounded-xl shadow-md p-4 h-[320px]">
        <h3 className="font-semibold text-primary mb-2">
          Donations Overview
        </h3>

        <ResponsiveContainer>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#0f766e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  </div>
);
              }