import {
    useEffect,
    useState,
  } from "react";
  
  import axios from "axios";
  
  import {
    API_URL,
  } from "../config";
  import {
    Helmet,
  } from "react-helmet-async";
 
import Footer from "../components/Footer";
  
  export default function
  AdminDonations() {
  
    // STATES
    const [
      donations,
      setDonations
    ] = useState([]);
  
    // FETCH DONATIONS
    const fetchDonations =
      async () => {
  
        try {
  
          const token =
            localStorage.getItem(
              "token"
            );
  
          const response =
            await axios.get(
  
              `${API_URL}/api/donations`,
  
              {
                headers: token
                  ? {
                      Authorization:
                        `Bearer ${token}`,
                    }
                  : {},
              }
  
            );
  
          setDonations(
            response.data.donations
          );
  
        } catch (error) {
  
          console.error(error);
  
        }
  
      };
  
    // UPDATE STATUS
    const updateStatus =
      async (
        id,
        status
      ) => {
  
        try {
  
          const token =
            localStorage.getItem(
              "token"
            );
  
          await axios.put(
  
            `${API_URL}/api/donations/${id}`,
  
            { status },
  
            {
              headers: token
                ? {
                    Authorization:
                      `Bearer ${token}`,
                  }
                : {},
            }
  
          );
  
          fetchDonations();
  
        } catch (error) {
  
          console.error(error);
  
        }
  
      };
  
    // DELETE DONATION
    const deleteDonation =
      async (id) => {
  
        const confirmDelete =
          window.confirm(
  
            "Are you sure you want to delete this donation?"
  
          );
  
        if (!confirmDelete)
          return;
  
        try {
  
          const token =
            localStorage.getItem(
              "token"
            );
  
          await axios.delete(
  
            `${API_URL}/api/donations/${id}`,
  
            {
              headers: token
                ? {
                    Authorization:
                      `Bearer ${token}`,
                  }
                : {},
            }
  
          );
  
          fetchDonations();
  
        } catch (error) {
  
          console.error(error);
  
        }
  
      };
  
    useEffect(() => {
  
      fetchDonations();
  
    }, []);
  
    // STATISTICS
    const totalAmount =
      donations.reduce(
  
        (sum, item) =>
          sum + item.amount,
  
        0
  
      );
  
    const pendingCount =
      donations.filter(
  
        (item) =>
          item.status ===
          "pending"
  
      ).length;
  
    return (
      <div className="page-container">
      <>
      <Helmet>
    
        <title>
        Donation Dashboard | GOGOT PARTY
        </title>
    
        <meta
          name="description"
          content="
            The page you are looking for
            could not be found.
          "
        />
    
      </Helmet>
      <div
        className="
          min-h-screen
          bg-gray-100
          dark:bg-gray-900
        "
      >
  
        {/* HERO */}
        <section
          className="
            bg-gradient-to-r
            from-primary
            to-primaryDark
            text-white
            py-16
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
  
            Donation Dashboard
  
          </h1>
  
          <p
            className="
              text-white/80
              text-lg
            "
          >
  
            Monitor campaign
            donations and
            supporter activity.
  
          </p>
  
        </section>
  
        {/* STATS */}
        <section
          className="
            p-10
            grid
            md:grid-cols-3
            gap-6
          "
        >
  
          <div
            className="
              shadow-lg
              rounded-xl
              p-6
              bg-white
              dark:bg-gray-800
            "
          >
  
            <h2
              className="
                text-gray-500
                mb-2
              "
            >
  
              Total Donations
  
            </h2>
  
            <p
              className="
                text-4xl
                font-bold
                text-primary
              "
            >
  
              {donations.length}
  
            </p>
  
          </div>
  
          <div
            className="
              shadow-lg
              rounded-xl
              p-6
              bg-white
              dark:bg-gray-800
            "
          >
  
            <h2
              className="
                text-gray-500
                mb-2
              "
            >
  
              Total Amount
  
            </h2>
  
            <p
              className="
                text-4xl
                font-bold
                text-green-600
              "
            >
  
              {
                totalAmount.toLocaleString()
              } ETB
  
            </p>
  
          </div>
  
          <div
            className="
              shadow-lg
              rounded-xl
              p-6
              bg-white
              dark:bg-gray-800
            "
          >
  
            <h2
              className="
                text-gray-500
                mb-2
              "
            >
  
              Pending Donations
  
            </h2>
  
            <p
              className="
                text-4xl
                font-bold
                text-yellow-500
              "
            >
  
              {pendingCount}
  
            </p>
  
          </div>
  
        </section>
  
        {/* TABLE */}
        <section
          className="
            px-10
            pb-16
            overflow-x-auto
          "
        >
  
          <div
            className="
              bg-white
              dark:bg-gray-800
              shadow-lg
              rounded-xl
              overflow-hidden
              overflow-x-auto
              w-full
            "
          >
  
            <table
              className="
                w-full min-w-full
              "
            >
  
              <thead
                className="
                  bg-primary
                  text-white
                "
              >
  
                <tr>
  
                  <th className="p-4 text-left">
                    Donor
                  </th>
  
                  <th className="p-4 text-left">
                    Amount
                  </th>
  
                  <th className="p-4 text-left">
                    Method
                  </th>
  
                  <th className="p-4 text-left">
                    Status
                  </th>
  
                  <th className="p-4 text-left">
                    Message
                  </th>
  
                  <th className="p-4 text-left">
                    Actions
                  </th>
  
                </tr>
  
              </thead>
  
              <tbody>
  
                {
                  donations.map(
                    (donation) => (
  
                      <tr
                        key={
                          donation._id
                        }
                        className="
                          border-b
                          hover:bg-gray-50
                          dark:hover:bg-gray-700
                        "
                      >
  
                        <td
                          className="
                            p-4
                            font-semibold
                            dark:text-white
                          "
                        >
  
                          {
                            donation.donorName
                          }
  
                        </td>
  
                        <td
                          className="
                            p-4
                            dark:text-white
                          "
                        >
  
                          {
                            donation.amount
                          } ETB
  
                        </td>
  
                        <td
                          className="
                            p-4
                            dark:text-white
                          "
                        >
  
                          {
                            donation.method
                          }
  
                        </td>
  
                        <td className="p-4">
  
                          <span
                            className={`
                              px-3
                              py-1
                              rounded-full
                              text-sm
                              font-semibold
  
                              ${
                                donation.status ===
                                "confirmed"
  
                                  ? "bg-green-100 text-green-700"
  
                                  : donation.status ===
                                    "rejected"
  
                                  ? "bg-red-100 text-red-700"
  
                                  : "bg-yellow-100 text-yellow-700"
                              }
                            `}
                          >
  
                            {
                              donation.status
                            }
  
                          </span>
  
                        </td>
  
                        <td
                          className="
                            p-4
                            text-gray-600
                            dark:text-gray-300
                          "
                        >
  
                          {
                            donation.message
                          }
  
                        </td>
  
                        <td
                          className="
                            p-4
                            flex
                            gap-2
                          "
                        >
  
                          <button
                            onClick={() =>
                              updateStatus(
                                donation._id,
                                "confirmed"
                              )
                            }
                            className="
                              bg-green-500
                              hover:bg-green-600
                              text-white
                              px-3
                              py-1
                              rounded
                            "
                          >
  
                            Approve
  
                          </button>
  
                          <button
                            onClick={() =>
                              updateStatus(
                                donation._id,
                                "rejected"
                              )
                            }
                            className="
                              bg-red-500
                              hover:bg-red-600
                              text-white
                              px-3
                              py-1
                              rounded
                            "
                          >
  
                            Reject
  
                          </button>
  
                          <button
                            onClick={() =>
                              deleteDonation(
                                donation._id
                              )
                            }
                            className="
                              bg-gray-800
                              hover:bg-black
                              text-white
                              px-3
                              py-1
                              rounded
                            "
                          >
  
                            Delete
  
                          </button>
  
                        </td>
  
                      </tr>
  
                    )
                  )
                }
  
              </tbody>
  
            </table>
  
          </div>
  
        </section>
        <Footer />
      </div>
      </>
      </div>
    );
  }