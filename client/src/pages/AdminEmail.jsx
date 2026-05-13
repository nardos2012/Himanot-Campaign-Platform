import {
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
AdminEmail() {

  const [
    subject,
    setSubject
  ] = useState("");

  const [
    message,
    setMessage
  ] = useState("");

  const [
    loading,
    setLoading
  ] = useState(false);

  // SEND EMAIL
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.post(

          `${API_URL}/api/email/send`,

          {
            subject,
            message,
          },

          {
            headers: token
              ? {
                  Authorization:
                    `Bearer ${token}`,
                }
              : {},
          }

        );

        alert(
          "Emails sent successfully"
        );

        setSubject("");
        setMessage("");

      } catch (error) {

        console.error(error);

        alert(

          error.response?.data
            ?.message ||

          "Failed to send emails"

        );

      } finally {

        setLoading(false);

      }

    };

  return (
<>
  <Helmet>

    <title>
    Email Broadcasting | GOGOT PARTY
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

          Email Broadcasting

        </h1>

        <p
          className="
            text-white/80
            text-lg
          "
        >

          Send campaign
          updates to
          supporters.

        </p>

      </section>

      {/* FORM */}
      <section
        className="
          max-w-4xl
          mx-auto
          px-6
          py-16
        "
      >

        <div
          className="
            bg-white
            dark:bg-gray-800
            shadow-2xl
            rounded-2xl
            p-10
            transition
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

            {/* SUBJECT */}
            <div>

              <label
                className="
                  block
                  mb-2
                  font-semibold
                  dark:text-white
                "
              >

                Subject

              </label>

              <input
                type="text"
                value={subject}
                onChange={(e) =>
                  setSubject(
                    e.target.value
                  )
                }
                className="
                  w-full
                  border
                  border-gray-300
                  dark:border-gray-600
                  bg-white
                  dark:bg-gray-700
                  dark:text-white
                  p-4
                  rounded-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary
                "
                required
              />

            </div>

            {/* MESSAGE */}
            <div>

              <label
                className="
                  block
                  mb-2
                  font-semibold
                  dark:text-white
                "
              >

                Message

              </label>

              <textarea
                rows="10"
                value={message}
                onChange={(e) =>
                  setMessage(
                    e.target.value
                  )
                }
                className="
                  w-full
                  border
                  border-gray-300
                  dark:border-gray-600
                  bg-white
                  dark:bg-gray-700
                  dark:text-white
                  p-4
                  rounded-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary
                "
                required
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-primary
                hover:bg-primaryDark
                text-white
                py-4
                rounded-xl
                font-bold
                transition
                disabled:opacity-60
              "
            >

              {
                loading
                  ? "Sending..."
                  : "Send Email"
              }

            </button>

          </form>

        </div>

      </section>

    </div>
</>
  );
}