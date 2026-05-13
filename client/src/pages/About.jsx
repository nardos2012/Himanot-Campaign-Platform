import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Helmet,
} from "react-helmet-async";


export default function About() {

  return (
    <div className="page-container">
    <>
  <Helmet>

    <title>
      About | GOGOT PARTY
    </title>

    <meta
      name="description"
      content="
        Learn about GOGOT PARTY,
        our mission, vision,
        leadership, and campaign goals.
      "
    />

  </Helmet>

    <div
  className="
    bg-white
    dark:bg-gray-900
    text-black
    transition
    duration-300
  "
>

      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-r from-primary to-primaryDark text-white py-20 text-center">

        <h1 className="text-5xl font-extrabold mb-4">
          About GOGOT PARTY
        </h1>

        <p className="text-white/80 text-lg">
          Unity • Progress • Prosperity
        </p>

      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white dark:bg-gray-900 dark:text-white shadow-xl rounded-2xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Our Vision
          </h2>

          <p className="text-gray-700 dark:text-white leading-relaxed mb-10">

            GOGOT PARTY is committed to
            building a united, prosperous,
            democratic, and inclusive Ethiopia
            where every citizen has equal
            opportunity and representation.

          </p>

          <h2 className="text-3xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-gray-700 dark:text-white leading-relaxed mb-10">

            We strive to promote transparent
            governance, economic development,
            youth empowerment, social justice,
            and national unity through peaceful
            democratic participation.

          </p>

          <h2 className="text-3xl dark:text-white font-bold mb-6">
            Core Values
          </h2>

          <ul className="space-y-4 text-gray-700 dark:text-white">

            <li>
              ✅ Unity and Equality
            </li>

            <li>
              ✅ Democracy and Justice
            </li>

            <li>
              ✅ Transparency and Accountability
            </li>

            <li>
              ✅ Economic Growth
            </li>

            <li>
              ✅ Peace and Stability
            </li>

          </ul>

        </div>

      </section>

      <Footer />

    </div>
    </>
    </div>
  );
}