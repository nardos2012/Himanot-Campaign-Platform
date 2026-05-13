import { useEffect, useState } from "react";
import API from "../api";
import {
  Helmet,
} from "react-helmet-async";

export default function Donations() {
  const [data, setData] = useState([]);

  const load = async () => {
    const res = await API.get("/donations");
    setData(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const update = async (id, status) => {
    await API.put(`/donations/${id}`, { status });
    load();
  };

  return (
    <div className="page-container">
    <>
  <Helmet>

    <title>
      Manage Donations | GOGOT PARTY
    </title>

    <meta
      name="description"
      content="
        The page you are looking for
        could not be found.
      "
    />

  </Helmet>
    <div className="p-6">
      <h2 className="text-xl mb-4">Manage Donations</h2>

      {data.map((d) => (
        <div key={d._id} className="border p-3 mb-2">
          {d.name} - {d.amount} - {d.status}

          <div className="mt-2">
            <button onClick={() => update(d._id, "confirmed")}>
              ✅ Approve
            </button>

            <button onClick={() => update(d._id, "rejected")}>
              ❌ Reject
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
    </div>
  );
}