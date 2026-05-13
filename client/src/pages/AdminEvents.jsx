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

export default function
AdminEvents() {

  const [
    events,
    setEvents
  ] = useState([]);

  const [
    formData,
    setFormData
  ] = useState({

    title: "",
    description: "",
    location: "",
    eventDate: "",
    image: null,

  });

  // FETCH EVENTS
  const fetchEvents =
    async () => {

      try {

        const response =
          await axios.get(

            `${API_URL}/api/events`

          );

        setEvents(
          response.data.events
        );

      } catch (error) {

        console.error(error);

      }

    };

  useEffect(() => {

    fetchEvents();

  }, []);

  // HANDLE INPUT
  const handleChange =
    (e) => {

      if (
        e.target.name ===
        "image"
      ) {

        setFormData({

          ...formData,

          image:
            e.target.files[0],

        });

      } else {

        setFormData({

          ...formData,

          [e.target.name]:
            e.target.value,

        });

      }

    };

  // CREATE EVENT
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const data =
          new FormData();

        Object.keys(
          formData
        ).forEach((key) => {

          data.append(
            key,
            formData[key]
          );

        });

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.post(

          `${API_URL}/api/events`,

          data,

          {
            headers: {

              ...(token && {

                Authorization:
                  `Bearer ${token}`,

              }),

              "Content-Type":
                "multipart/form-data",

            },
          }

        );

        alert(
          "Event created successfully"
        );

        // RESET FORM
        setFormData({

          title: "",
          description: "",
          location: "",
          eventDate: "",
          image: null,

        });

        // REFRESH EVENTS
        fetchEvents();

      } catch (error) {

        console.error(error);

      }

    };

  // DELETE EVENT
  const deleteEvent =
    async (id) => {

      const confirmDelete =
        window.confirm(

          "Delete this event?"

        );

      if (!confirmDelete)
        return;

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.delete(

          `${API_URL}/api/events/${id}`,

          {
            headers: token
              ? {
                  Authorization:
                    `Bearer ${token}`,
                }
              : {},
          }

        );

        fetchEvents();

      } catch (error) {

        console.error(error);

      }

    };

  return (
    <div className="page-container">
<>
  <Helmet>

    <title>
    Campaign Events | GOGOT PARTY
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

          Campaign Events

        </h1>

        <p
          className="
            text-white/80
            text-lg
          "
        >

          Manage rallies and
          campaign activities.

        </p>

      </section>

      {/* FORM */}
      <section
        className="
          max-w-4xl
          mx-auto
          p-10
        "
      >

        <div
          className="
            bg-white
            dark:bg-gray-800
            shadow-xl
            rounded-xl
            p-8
          "
        >

          <form
            onSubmit={
              handleSubmit
            }
            className="
              space-y-6
            "
          >

            <input
              type="text"
              name="title"
              placeholder="Event title"
              value={
                formData.title
              }
              onChange={
                handleChange
              }
              className="
                w-full
                border
                p-3
                rounded-lg
                dark:bg-gray-700
                dark:text-white
              "
              required
            />

            <textarea
              name="description"
              placeholder="Event description"
              value={
                formData.description
              }
              onChange={
                handleChange
              }
              rows="5"
              className="
                w-full
                border
                p-3
                rounded-lg
                dark:bg-gray-700
                dark:text-white
              "
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={
                formData.location
              }
              onChange={
                handleChange
              }
              className="
                w-full
                border
                p-3
                rounded-lg
                dark:bg-gray-700
                dark:text-white
              "
              required
            />

            <input
              type="datetime-local"
              name="eventDate"
              value={
                formData.eventDate
              }
              onChange={
                handleChange
              }
              className="
                w-full
                border
                p-3
                rounded-lg
                dark:bg-gray-700
                dark:text-white
              "
              required
            />

            <input
              type="file"
              name="image"
              onChange={
                handleChange
              }
              className="
                w-full
              "
            />

            <button
              type="submit"
              className="
                bg-primary
                hover:bg-primaryDark
                text-white
                px-8
                py-3
                rounded-lg
                font-semibold
              "
            >

              Publish Event

            </button>

          </form>

        </div>

      </section>

      {/* EVENT CARDS */}
      <section
        className="
          px-10
          pb-16
        "
      >

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {
            events.map(
              (event) => (

                <div
                  key={
                    event._id
                  }
                  className="
                    bg-white
                    dark:bg-gray-800
                    shadow-xl
                    rounded-2xl
                    overflow-hidden
                  "
                >

                  {
                    event.image && (

                      <img
                        src={
                          event.image
                        }
                        alt={
                          event.title
                        }
                        className="
                          w-full
                          h-56
                          object-cover
                        "
                      />

                    )
                  }

                  <div
                    className="
                      p-6
                    "
                  >

                    <h2
                      className="
                        text-2xl
                        font-bold
                        mb-3
                        dark:text-white
                      "
                    >

                      {
                        event.title
                      }

                    </h2>

                    <p
                      className="
                        text-gray-600
                        dark:text-gray-300
                        mb-4
                      "
                    >

                      {
                        event.description.slice(
                          0,
                          120
                        )
                      }
                      ...

                    </p>

                    <p
                      className="
                        font-semibold
                        mb-2
                        dark:text-white
                      "
                    >

                      📍 {
                        event.location
                      }

                    </p>

                    <p
                      className="
                        text-sm
                        text-gray-500
                        mb-6
                      "
                    >

                      {
                        new Date(
                          event.eventDate
                        ).toLocaleString()
                      }

                    </p>

                    <button
                      onClick={() =>
                        deleteEvent(
                          event._id
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

                  </div>

                </div>

              )
            )
          }

        </div>

      </section>

    </div>
</>
</div>
  );
}