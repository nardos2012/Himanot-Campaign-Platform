import {
  Link,
} from "react-router-dom";

export default function
Footer() {

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
          max-w-6xl
          mx-auto
          px-6
          py-10
          grid
          md:grid-cols-3
          gap-8
        "
      >

        {/* BRAND */}
        <div>

          <h3
            className="
              font-bold
              text-2xl
              mb-3
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
            unity and
            leadership.

          </p>

        </div>

        {/* LINKS */}
        <div>

          <h4
            className="
              font-semibold
              text-lg
              mb-3
            "
          >

            Links

          </h4>

          <ul
            className="
              space-y-2
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
                to="/donate"
                className="
                  hover:text-yellow-300
                  transition
                "
              >

                Donate

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

                Join

              </Link>

            </li>

          </ul>

        </div>

        {/* CONTACT */}
        <div>

          <h4
            className="
              font-semibold
              text-lg
              mb-3
            "
          >

            Contact

          </h4>

          <p
            className="
              text-white/80
            "
          >

            Addis Ababa,
            Ethiopia

          </p>

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
          py-4
        "
      >

        © {
          new Date()
            .getFullYear()
        } GOGOT PARTY

      </div>

    </footer>

  );
}