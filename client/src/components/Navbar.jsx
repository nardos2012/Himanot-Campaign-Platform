import {
  useState,
  useEffect,
} from "react";

import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import {
  useTranslation,
} from "react-i18next";

export default function Navbar() {

  const { t, i18n } =
    useTranslation(
      "navbar"
    );

  const navigate =
    useNavigate();

  // MOBILE MENU
  const [
    mobileMenu,
    setMobileMenu
  ] = useState(false);

  // DROPDOWNS
  const [
    adminOpen,
    setAdminOpen
  ] = useState(false);

  const [
    participateOpen,
    setParticipateOpen
  ] = useState(false);

  // DARK MODE
  const [
    darkMode,
    setDarkMode
  ] = useState(

    localStorage.getItem(
      "theme"
    ) === "dark"

  );

  // USER
  const user = JSON.parse(

    localStorage.getItem(
      "user"
    )

  );

  // APPLY DARK MODE
  useEffect(() => {

    if (darkMode) {

      document.documentElement
        .classList.add("dark");

      localStorage.setItem(
        "theme",
        "dark"
      );

    } else {

      document.documentElement
        .classList.remove(
          "dark"
        );

      localStorage.setItem(
        "theme",
        "light"
      );

    }

  }, [darkMode]);

  // LOGOUT
  const handleLogout =
    () => {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "user"
      );

      navigate(
        "/admin/login"
      );

    };

  // LANGUAGE
  const changeLanguage =
    (lng) => {

      i18n.changeLanguage(
        lng
      );

    };

  // ACTIVE STYLE
  const navStyle =
    ({ isActive }) => `

      px-2
      py-1
      transition
      border-b-2

      ${
        isActive

          ? "border-yellow-300 text-yellow-300 font-bold"

          : "border-transparent hover:text-gray-200"

      }

    `;

  return (

    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-[9999]
        bg-primary
        dark:bg-gray-900
        text-white
        shadow-lg
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          justify-between
          items-center
        "
      >

        {/* LOGO */}
        <Link
          to="/"
          className="
            text-3xl
            font-extrabold
            leading-none
          "
        >

          GOGOT
          <br />
          PARTY

        </Link>

        {/* DESKTOP MENU */}
        <div
          className="
            hidden
            lg:flex
            items-center
            gap-8
          "
        >

          <NavLink
            to="/"
            className={navStyle}
          >
            {t("Home")}
          </NavLink>

          <NavLink
            to="/about"
            className={navStyle}
          >
            {t("About")}
          </NavLink>

          <NavLink
            to="/news"
            className={navStyle}
          >
            {t("News")}
          </NavLink>

          <NavLink
            to="/events"
            className={navStyle}
          >
            {t("Events")}
          </NavLink>

          {/* PARTICIPATE */}
          <div
            className="
              relative
              group
            "
          >

            <button
              className="
                flex
                items-center
                gap-1
                hover:text-gray-200
              "
            >

              Participate

              <ChevronDown
                size={18}
              />

            </button>

            <div
              className="
                absolute
                top-full
                left-0
                pt-2
                bg-white
                dark:bg-gray-800
                text-black
                dark:text-white
                rounded-xl
                shadow-2xl
                w-52
                opacity-0
                invisible
                group-hover:opacity-100
                group-hover:visible
                transition
                overflow-hidden
                z-50
              "
            >

              <Link
                to="/join"
                className="
                  block
                  px-5
                  py-3
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                "
              >
                Join
              </Link>

              <Link
                to="/donate"
                className="
                  block
                  px-5
                  py-3
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                "
              >
                Donate
              </Link>

              <Link
                to="/supporters"
                className="
                  block
                  px-5
                  py-3
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                "
              >
                Supporters
              </Link>

            </div>

          </div>

          {/* ADMIN */}
          {
            user?.isAdmin && (

              <NavLink
                to="/admin/analytics"
                className={navStyle}
              >

                Admin

              </NavLink>

            )
          }

          {/* LANGUAGE */}
          <div
            className="
              flex
              gap-2
            "
          >

            <button
              onClick={() =>
                changeLanguage("en")
              }
              className="
                border
                px-3
                py-2
                rounded-lg
              "
            >
              EN
            </button>

            <button
              onClick={() =>
                changeLanguage("am")
              }
              className="
                border
                px-3
                py-2
                rounded-lg
              "
            >
              አማ
            </button>

          </div>

          {/* DARK MODE */}
          <button
            onClick={() =>
              setDarkMode(
                !darkMode
              )
            }
            className="
              border
              px-3
              py-2
              rounded-lg
            "
          >

            {
              darkMode
                ? "☀️"
                : "🌙"
            }

          </button>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() =>
            setMobileMenu(
              !mobileMenu
            )
          }
          className="
            lg:hidden
            z-[10000]
          "
        >

          {
            mobileMenu
              ? <X size={32} />
              : <Menu size={32} />
          }

        </button>

      </div>

      {/* MOBILE MENU */}
      {
        mobileMenu && (

          <div
            className="
              lg:hidden
              bg-white
              dark:bg-gray-900
              text-black
              dark:text-white
              px-6
              py-6
              space-y-5
              shadow-2xl
              border-t
              border-gray-200
              dark:border-gray-700
            "
          >

            <NavLink
              to="/"
              className="block"
              onClick={() =>
                setMobileMenu(false)
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="block"
              onClick={() =>
                setMobileMenu(false)
              }
            >
              About
            </NavLink>

            <NavLink
              to="/news"
              className="block"
              onClick={() =>
                setMobileMenu(false)
              }
            >
              News
            </NavLink>

            <NavLink
              to="/events"
              className="block"
              onClick={() =>
                setMobileMenu(false)
              }
            >
              Events
            </NavLink>

            {/* PARTICIPATE */}
            <div>

              <button
                onClick={() =>
                  setParticipateOpen(
                    !participateOpen
                  )
                }
                className="
                  flex
                  items-center
                  gap-2
                  font-semibold
                "
              >

                Participate

                <ChevronDown
                  size={18}
                />

              </button>

              {
                participateOpen && (

                  <div
                    className="
                      mt-3
                      ml-4
                      space-y-3
                    "
                  >

                    <Link
                      to="/join"
                      onClick={() =>
                        setMobileMenu(false)
                      }
                      className="block"
                    >
                      Join
                    </Link>

                    <Link
                      to="/donate"
                      onClick={() =>
                        setMobileMenu(false)
                      }
                      className="block"
                    >
                      Donate
                    </Link>

                    <Link
                      to="/supporters"
                      onClick={() =>
                        setMobileMenu(false)
                      }
                      className="block"
                    >
                      Supporters
                    </Link>

                  </div>

                )
              }

            </div>

            {/* ADMIN */}
            {
              user?.isAdmin && (

                <Link
                  to="/admin/analytics"
                  className="block"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                >

                  Admin Dashboard

                </Link>

              )
            }

            {/* LANGUAGE */}
            <div
              className="
                flex
                gap-3
              "
            >

              <button
                onClick={() =>
                  changeLanguage("en")
                }
                className="
                  border
                  px-3
                  py-2
                  rounded-lg
                "
              >
                EN
              </button>

              <button
                onClick={() =>
                  changeLanguage("am")
                }
                className="
                  border
                  px-3
                  py-2
                  rounded-lg
                "
              >
                አማ
              </button>

            </div>

            {/* DARK MODE */}
            <button
              onClick={() =>
                setDarkMode(
                  !darkMode
                )
              }
              className="
                border
                px-4
                py-2
                rounded-lg
              "
            >

              {
                darkMode
                  ? "Light Mode ☀️"
                  : "Dark Mode 🌙"
              }

            </button>

            {/* LOGIN */}
            {
              user ? (

                <button
                  onClick={
                    handleLogout
                  }
                  className="
                    w-full
                    bg-primary
                    text-white
                    py-3
                    rounded-xl
                    font-bold
                  "
                >

                  Logout

                </button>

              ) : (

                <Link
                  to="/admin/login"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                  className="
                    block
                    text-center
                    bg-primary
                    text-white
                    py-3
                    rounded-xl
                    font-bold
                  "
                >

                  Login

                </Link>

              )
            }

          </div>

        )
      }

    </nav>

  );
}