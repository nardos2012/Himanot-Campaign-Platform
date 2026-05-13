import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  API_URL,
} from "../config";
import {
  Helmet,
} from "react-helmet-async";

export default function
Analytics() {

  const [
    donations,
    setDonations
  ] = useState([]);

  const [
    supporters,
    setSupporters
  ] = useState([]);

  const [
    events,
    setEvents
  ] = useState([]);

  // DOWNLOAD EXPORT FILES
  const downloadFile =
    async (
      endpoint,
      filename
    ) => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.get(

            `${API_URL}/api/export/${endpoint}`,

            {
              headers: token
                ? {
                    Authorization:
                      `Bearer ${token}`,
                  }
                : {},

              responseType:
                "blob",
            }

          );

        const url =
          window.URL.createObjectURL(

            new Blob([
              response.data
            ])

          );

        const link =
          document.createElement(
            "a"
          );

        link.href = url;

        link.setAttribute(
          "download",
          filename
        );

        document.body.appendChild(
          link
        );

        link.click();

        link.remove();

      } catch (error) {

        console.error(error);

      }

    };

  // FETCH DATA
  const fetchData =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        // DONATIONS
        const donationRes =
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
          donationRes.data
            .donations || []
        );

        // SUPPORTERS
        const supporterRes =
          await axios.get(

            `${API_URL}/api/supporters`,

            {
              headers: token
                ? {
                    Authorization:
                      `Bearer ${token}`,
                  }
                : {},
            }

          );

        setSupporters(
          supporterRes.data
            .supporters || []
        );

        // EVENTS
        const eventRes =
          await axios.get(

            `${API_URL}/api/events`

          );

        setEvents(
          eventRes.data
            .events || []
        );

      } catch (error) {

        console.error(error);

      }

    };

  useEffect(() => {

    fetchData();

  }, []);

  // TOTAL REVENUE
  const totalRevenue =
    donations.reduce(

      (sum, item) =>
        sum + item.amount,

      0

    );

  // DONATION CHART
  const donationChart = [

    {
      name: "Confirmed",
      value:
        donations.filter(
          (d) =>
            d.status ===
            "confirmed"
        ).length,
    },

    {
      name: "Pending",
      value:
        donations.filter(
          (d) =>
            d.status ===
            "pending"
        ).length,
    },

    {
      name: "Rejected",
      value:
        donations.filter(
          (d) =>
            d.status ===
            "rejected"
        ).length,
    },

  ];

  // COLORS
  const COLORS = [

    "#0F766E",

    "#EAB308",

    "#EF4444",

  ];

  // RECENT SUPPORTERS
  const recentSupporters =
    supporters.slice(0, 5);

  return (
    <div className="page-container">
<>
  <Helmet>

    <title>
      Campaign Analysis | GOGOT PARTY
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
        bg-white
        dark:bg-gray-900
        text-black
        dark:text-white
        transition
        duration-300
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

          Campaign Analytics

        </h1>

        <p
          className="
            text-white/80
            text-lg
          "
        >

          Real-time campaign
          insights and
          statistics.

        </p>

      </section>

      {/* KPI CARDS */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          py-12
        "
      >

        <div
          className="
            grid
            md:grid-cols-4
            gap-6
          "
        >

          {/* SUPPORTERS */}
          <div
            className="
              bg-white
              dark:bg-gray-800
              shadow-xl
              rounded-2xl
              p-8
            "
          >

            <h2
              className="
                text-gray-500
                dark:text-gray-300
                mb-3
              "
            >

              Supporters

            </h2>

            <p
              className="
                text-5xl
                font-extrabold
                text-primary
              "
            >

              {supporters.length}

            </p>

          </div>

          {/* DONATIONS */}
          <div
            className="
              bg-white
              dark:bg-gray-800
              shadow-xl
              rounded-2xl
              p-8
            "
          >

            <h2
              className="
                text-gray-500
                dark:text-gray-300
                mb-3
              "
            >

              Donations

            </h2>

            <p
              className="
                text-5xl
                font-extrabold
                text-primary
              "
            >

              {donations.length}

            </p>

          </div>

          {/* REVENUE */}
          <div
            className="
              bg-white
              dark:bg-gray-800
              shadow-xl
              rounded-2xl
              p-8
            "
          >

            <h2
              className="
                text-gray-500
                dark:text-gray-300
                mb-3
              "
            >

              Revenue

            </h2>

            <p
              className="
                text-4xl
                font-extrabold
                text-green-600
              "
            >

              {
                totalRevenue
                  .toLocaleString()
              } ETB

            </p>

          </div>

          {/* EVENTS */}
          <div
            className="
              bg-white
              dark:bg-gray-800
              shadow-xl
              rounded-2xl
              p-8
            "
          >

            <h2
              className="
                text-gray-500
                dark:text-gray-300
                mb-3
              "
            >

              Events

            </h2>

            <p
              className="
                text-5xl
                font-extrabold
                text-primary
              "
            >

              {events.length}

            </p>

          </div>

        </div>

      </section>

      {/* EXPORT BUTTONS */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          pb-12
        "
      >

        <div
          className="
            flex
            flex-wrap
            gap-4
          "
        >

          <button
            onClick={() =>
              downloadFile(
                "supporters",
                "supporters.csv"
              )
            }
            className="
              bg-primary
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-primaryDark
              transition
            "
          >

            Export Supporters

          </button>

          <button
            onClick={() =>
              downloadFile(
                "donations",
                "donations.csv"
              )
            }
            className="
              bg-green-600
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-green-700
              transition
            "
          >

            Export Donations

          </button>

          <button
            onClick={() =>
              downloadFile(
                "events",
                "events.csv"
              )
            }
            className="
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-blue-700
              transition
            "
          >

            Export Events

          </button>

        </div>

      </section>

      {/* CHARTS */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          pb-16
        "
      >

        <div
          className="
            grid
            lg:grid-cols-2
            gap-8
          "
        >

          {/* BAR CHART */}
          <div
            className="
              bg-white
              dark:bg-gray-800
              shadow-xl
              rounded-2xl
              p-6
            "
          >

            <h2
              className="
                text-2xl
                font-bold
                mb-6
                dark:text-white
              "
            >

              Donation Status

            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <BarChart
                data={
                  donationChart
                }
              >

                <XAxis
                  dataKey="name"
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#0F766E"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          {/* PIE CHART */}
          <div
            className="
              bg-white
              dark:bg-gray-800
              shadow-xl
              rounded-2xl
              p-6
            "
          >

            <h2
              className="
                text-2xl
                font-bold
                mb-6
                dark:text-white
              "
            >

              Donation Distribution

            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <PieChart>

                <Pie
                  data={
                    donationChart
                  }
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >

                  {
                    donationChart.map(
                      (
                        entry,
                        index
                      ) => (

                        <Cell
                          key={`cell-${index}`}
                          fill={
                            COLORS[
                              index %
                              COLORS.length
                            ]
                          }
                        />

                      )
                    )
                  }

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </section>

      {/* RECENT SUPPORTERS */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          pb-20
        "
      >

        <div
          className="
            bg-white
            dark:bg-gray-800
            shadow-xl
            rounded-2xl
            p-8
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              mb-8
              dark:text-white
            "
          >

            Recent Supporters

          </h2>

          <div
            className="
              space-y-4
            "
          >

            {
              recentSupporters.map(
                (
                  supporter
                ) => (

                  <div
                    key={
                      supporter._id
                    }
                    className="
                      flex
                      flex-col
                      md:flex-row
                      md:justify-between
                      bg-gray-50
                      dark:bg-gray-700
                      rounded-xl
                      p-4
                    "
                  >

                    <div>

                      <h3
                        className="
                          font-bold
                          text-lg
                          dark:text-white
                        "
                      >

                        {
                          supporter.name
                        }

                      </h3>

                      <p
                        className="
                          text-gray-500
                          dark:text-gray-300
                        "
                      >

                        {
                          supporter.city
                        }

                      </p>

                    </div>

                    <div
                      className="
                        text-gray-600
                        dark:text-gray-300
                        mt-2
                        md:mt-0
                      "
                    >

                      {
                        supporter.email
                      }

                    </div>

                  </div>

                )
              )
            }

          </div>

        </div>

      </section>

    </div>
</>
</div>
  );
}