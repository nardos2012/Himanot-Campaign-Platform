import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  API_URL,
} from "../config";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Helmet,
} from "react-helmet-async";


export default function
AdminSupporters() {

  const [
    supporters,
    setSupporters
  ] = useState([]);

  // FETCH SUPPORTERS
  const fetchSupporters =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
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

          response.data
            .supporters || []

        );

      } catch (error) {

        console.error(error);

      }

    };

  useEffect(() => {

    fetchSupporters();

  }, []);

  // DELETE SUPPORTER
  const deleteSupporter =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete supporter?"
        );

      if (!confirmDelete)
        return;

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.delete(

          `${API_URL}/api/supporters/${id}`,

          {
            headers: token
              ? {
                  Authorization:
                    `Bearer ${token}`,
                }
              : {},
          }

        );

        fetchSupporters();

      } catch (error) {

        console.error(error);

      }

    };

  return (
    <div className="page-container">
    <>
  <Helmet>

    <title>
      Supporters | GOGOT PARTY
    </title>

    <meta
      name="description"
      content="
        View supporters and community members
        supporting GOGOT PARTY.
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
<Navbar></Navbar>
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

          Supporter Dashboard

        </h1>

        <p
          className="
            text-white/80
            text-lg
          "
        >

          Manage volunteers
          and campaign
          supporters.

        </p>

      </section>

      {/* STATS */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-10
          py-10
        "
      >

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
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
                text-gray-500
                dark:text-gray-300
                mb-3
              "
            >

              Total Supporters

            </h2>

            <p
              className="
                text-5xl
                font-bold
                text-primary
              "
            >

              {supporters.length}

            </p>

          </div>

        </div>

      </section>

      {/* DESKTOP TABLE */}
      <section
        className="
          hidden
          md:block
          max-w-7xl
          mx-auto
          px-10
          pb-16
          overflow-x-auto
        "
      >

        <div
          className="
            bg-white
            dark:bg-gray-800
            shadow-xl
            rounded-2xl
            overflow-hidden
          "
        >

          <table
            className="
              w-full
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
                  Name
                </th>

                <th className="p-4 text-left">
                  Email
                </th>

                <th className="p-4 text-left">
                  Phone
                </th>

                <th className="p-4 text-left">
                  City
                </th>

                <th className="p-4 text-left">
                  Skills
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {
                supporters.map(
                  (supporter) => (

                    <tr
                      key={
                        supporter._id
                      }
                      className="
                        border-b
                        border-gray-200
                        dark:border-gray-700
                        hover:bg-gray-50
                        dark:hover:bg-gray-700
                        transition
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
                          supporter.name
                        }

                      </td>

                      <td
                        className="
                          p-4
                          dark:text-gray-300
                        "
                      >

                        {
                          supporter.email
                        }

                      </td>

                      <td
                        className="
                          p-4
                          dark:text-gray-300
                        "
                      >

                        {
                          supporter.phone
                        }

                      </td>

                      <td
                        className="
                          p-4
                          dark:text-gray-300
                        "
                      >

                        {
                          supporter.city
                        }

                      </td>

                      <td
                        className="
                          p-4
                          dark:text-gray-300
                        "
                      >

                        {
                          supporter.skills
                        }

                      </td>

                      <td className="p-4">

                        <button
                          onClick={() =>
                            deleteSupporter(
                              supporter._id
                            )
                          }
                          className="
                            bg-red-500
                            hover:bg-red-600
                            text-white
                            px-4
                            py-2
                            rounded-lg
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

      {/* MOBILE CARDS */}
      <section
        className="
          md:hidden
          px-4
          pb-16
          space-y-6
        "
      >

        {
          supporters.map(
            (supporter) => (

              <div
                key={
                  supporter._id
                }
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
                    mb-4
                    text-primary
                  "
                >

                  {
                    supporter.name
                  }

                </h2>

                <div
                  className="
                    space-y-3
                    text-gray-700
                    dark:text-gray-300
                  "
                >

                  <p>

                    <span className="font-semibold">
                      Email:
                    </span>{" "}

                    {
                      supporter.email
                    }

                  </p>

                  <p>

                    <span className="font-semibold">
                      Phone:
                    </span>{" "}

                    {
                      supporter.phone
                    }

                  </p>

                  <p>

                    <span className="font-semibold">
                      City:
                    </span>{" "}

                    {
                      supporter.city
                    }

                  </p>

                  <p>

                    <span className="font-semibold">
                      Skills:
                    </span>{" "}

                    {
                      supporter.skills
                    }

                  </p>

                </div>

                <button
                  onClick={() =>
                    deleteSupporter(
                      supporter._id
                    )
                  }
                  className="
                    mt-6
                    w-full
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                  "
                >

                  Delete

                </button>

              </div>

            )
          )
        }

      </section>
      <Footer/>
    </div>
</>
</div>
  );
}