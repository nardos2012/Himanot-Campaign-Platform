import {
  Link,
} from "react-router-dom";

import logo4
  from "../assets/logo4.png";

export default function Footer() {

  return (

    <footer
      className="
        bg-primary
        dark:bg-black
        text-white
        mt-16
        transition
        duration-300
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-12
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
          items-start
        "
      >

        {/* BRAND */}
        <div>

          <img
            src={logo4}
            alt="GOGOT PARTY"
            className="
              w-24
              mb-4
              rounded-full
              shadow-xl
              bg-white
              p-1
            "
          />

          <h3
            className="
              font-bold
              text-3xl
              mb-4
              leading-tight
            "
          >

            GOGOT PARTY

          </h3>

          <p
            className="
              text-white/80
              leading-relaxed
            "
          >

            Building a better
            future through
            unity, democracy,
            and leadership.

          </p>

        </div>

        {/* QR INSTALL */}
        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >

          <div
            className="
              bg-white
              p-3
              rounded-3xl
              shadow-2xl
            "
          >

            <img

              src="/Enor1-Campaign.png"

              alt="Install App QR"

              className="
                w-40
                h-40
                object-cover
                rounded-2xl
              "
            />

          </div>

          <p
            className="
              mt-4
              text-sm
              font-semibold
              leading-relaxed
              text-white/90
            "
          >

            Scan to Install
            the Official
            GOGOT Campaign App

          </p>

        </div>

        {/* LINKS */}
        <div>

          <h4
            className="
              font-semibold
              text-xl
              mb-4
            "
          >

            Quick Links

          </h4>

          <ul
            className="
              space-y-3
              text-white/80
            "
          >

            <li>

              <Link
                to="/"
                className="
                  hover:text-yellow-300
                  transition
                "
              >

                Home

              </Link>

            </li>

            <li>

              <Link
                to="/about"
                className="
                  hover:text-yellow-300
                  transition
                "
              >

                Vision

              </Link>

            </li>

            <li>

              <Link
                to="/news"
                className="
                  hover:text-yellow-300
                  transition
                "
              >

                News

              </Link>

            </li>

            <li>

              <Link
                to="/events"
                className="
                  hover:text-yellow-300
                  transition
                "
              >

                Events

              </Link>

            </li>

            <li>

              <Link
                to="/join"
                className="
                  hover:text-yellow-300
                  transition
                "
              >

                Join Movement

              </Link>

            </li>

            <li>

              <Link
                to="/donate"
                className="
                  hover:text-yellow-300
                  transition
                "
              >

                Donate

              </Link>

            </li>

          </ul>

        </div>

        {/* CONTACT */}
        <div>

          <h4
            className="
              font-semibold
              text-xl
              mb-4
            "
          >

            Contact

          </h4>

          <div
            className="
              space-y-3
              text-white/80
              leading-relaxed
            "
          >

            <p>

              Addis Ababa,
              Ethiopia

            </p>

            <p>

              Official Campaign
              Platform

            </p>

            <p
              className="
                text-yellow-300
                font-semibold
              "
            >

              Vote for
              the New Generation

            </p>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div
        className="
          border-t
          border-white/10
          text-center
          text-white/70
          text-sm
          py-5
          px-4
        "
      >

        © {
          new Date()
            .getFullYear()
        } GOGOT PARTY ·
        Developed by
        Haimanot ·
        All Rights Reserved

      </div>

    </footer>

  );

}