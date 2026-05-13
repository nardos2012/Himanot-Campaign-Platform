import { useEffect, useState } from "react";
import API from "../api";
import {
  Helmet,
} from "react-helmet-async";
// export default function UserDashboard() {
//   const [donations, setDonations] = useState([]);

//   useEffect(() => {
//     API.get("/donations/my").then(res => setDonations(res.data));
//   }, []);

//   return (
//     <div className="bg-whiteGloss min-h-screen p-6">
//       <h2 className="text-2xl font-bold text-primary mb-6">
//         My Donations
//       </h2>

//       {donations.map((d) => (
//         <div key={d._id} className="bg-white p-4 shadow rounded mb-3">
//           {d.amount} ETB - {d.status}
//         </div>
//       ))}
//     </div>
//   );
// }

export default function UserDashboard() {
  return (
    <div className="page-container">
    <>
  <Helmet>

    <title>
      User Dashboard | GOGOT PARTY
    </title>

    <meta
      name="description"
      content="
        The page you are looking for
        could not be found.
      "
    />

  </Helmet>
    <div className="bg-whiteGloss min-h-screen p-6">
      <h2 className="text-2xl font-bold text-primary">
        User Dashboard
      </h2>

      <p className="mt-4 text-gray-600">
        Welcome! Your activity will appear here.
      </p>
    </div>
    </>
    </div>
  );
}