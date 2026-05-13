import {
  useState,
} from "react";

import axios from "axios";

import {
  motion,
} from "framer-motion";

import Navbar
  from "../components/Navbar";

import Footer
  from "../components/Footer";

import {
  fadeUp,
} from "../utils/animations";

import {
  API_URL,
} from "../config";
import {
  Helmet,
} from "react-helmet-async";

export default function
Donate() {

  const [
    formData,
    setFormData
  ] = useState({

    donorName: "",
    amount: "",
    method: "",
    message: "",

  });

  // HANDLE INPUTS
  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,

      });

    };

  // SUBMIT DONATION
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const response =
          await axios.post(

            `${API_URL}/api/donations`,

            {
              donorName:
                formData.donorName,

              amount:
                formData.amount,

              method:
                formData.method,

              message:
                formData.message,
            }

          );

        console.log(
          response.data
        );

        alert(
          "Donation submitted successfully"
        );

        setFormData({

          donorName: "",
          amount: "",
          method: "",
          message: "",

        });

      } catch (error) {

        console.error(error);

        alert(

          error.response?.data
            ?.message ||

          "Error submitting donation"

        );

      }

    };

  return (
    
      <>
    
        <Helmet>
    
          <title>
            Donate | GOGOT PARTY
          </title>
    
          <meta
            name="description"
            content="
              Support the GOGOT PARTY campaign
              and help build a brighter future.
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

      <Navbar />

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{
          duration: 0.8
        }}
        className="
          bg-gradient-to-r
          from-primary
          to-primaryDark
          text-white
          text-center
          py-20
        "
      >

        <motion.h1
          variants={fadeUp}
          className="
            text-5xl
            font-extrabold
            mb-4
          "
        >

          Support GOGOT PARTY

        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="
            text-white/80
            text-lg
            max-w-2xl
            mx-auto
          "
        >

          Your contribution
          helps strengthen
          democratic participation,
          support campaign
          activities, and build
          a better future for
          our people.

        </motion.p>

      </motion.section>

      {/* DONATION FORM */}
      <section
        className="
          p-10
          flex
          justify-center
        "
      >

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{
            duration: 0.8
          }}
          className="
            shadow-xl
            p-8
            rounded-xl
            w-full
            max-w-2xl
            bg-white
            dark:bg-gray-800
            transition
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              text-center
              mb-8
              text-primary
            "
          >

            Make a Donation

          </h2>

          <form
            onSubmit={
              handleSubmit
            }
            className="
              space-y-6
            "
          >

            {/* FULL NAME */}
            <div>

              <label
                className="
                  block
                  mb-2
                  font-semibold
                  dark:text-white
                "
              >

                Full Name

              </label>

              <input
                type="text"
                name="donorName"
                placeholder="Enter your full name"
                value={
                  formData.donorName
                }
                onChange={
                  handleChange
                }
                className="
                  w-full
                  border
                  p-3
                  bg-white
                  dark:bg-gray-700
                  dark:text-white
                  dark:border-gray-600
                  rounded-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary
                "
                required
              />

            </div>

            {/* AMOUNT */}
            <div>

              <label
                className="
                  block
                  mb-2
                  font-semibold
                  dark:text-white
                "
              >

                Donation Amount

              </label>

              <input
                type="number"
                name="amount"
                placeholder="Enter amount"
                value={
                  formData.amount
                }
                onChange={
                  handleChange
                }
                className="
                  w-full
                  border
                  p-3
                  bg-white
                  dark:bg-gray-700
                  dark:text-white
                  dark:border-gray-600
                  rounded-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary
                "
                required
              />

            </div>

            {/* PAYMENT METHOD */}
            <div>

              <label
                className="
                  block
                  mb-2
                  font-semibold
                  dark:text-white
                "
              >

                Payment Method

              </label>

              <select
                name="method"
                value={
                  formData.method
                }
                onChange={
                  handleChange
                }
                className="
                  w-full
                  border
                  bg-white
                  dark:bg-gray-700
                  dark:text-white
                  dark:border-gray-600
                  p-3
                  rounded-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary
                "
                required
              >

                <option value="">
                  Select Method
                </option>

                <option value="Telebirr">
                  Telebirr
                </option>

                <option value="Bank">
                  Bank Transfer
                </option>

              </select>

            </div>

            {/* TELEBIRR DETAILS */}
            {
              formData.method ===
              "Telebirr" && (

                <div
                  className="
                    bg-gray-100
                    dark:bg-gray-700
                    rounded-xl
                    p-6
                  "
                >

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-primary
                      mb-3
                    "
                  >

                    Telebirr Payment

                  </h3>

                  <p
                    className="
                      text-lg
                      font-semibold
                      dark:text-white
                    "
                  >

                    Send payment to:

                  </p>

                  <p
                    className="
                      text-3xl
                      font-extrabold
                      mt-2
                      dark:text-white
                    "
                  >

                    0912097074

                  </p>

                </div>

              )
            }

            {/* BANK DETAILS */}
            {
              formData.method ===
              "Bank" && (

                <div
                  className="
                    bg-gray-100
                    dark:bg-gray-700
                    rounded-xl
                    p-6
                    space-y-4
                  "
                >

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-primary
                      mb-4
                    "
                  >

                    Bank Accounts

                  </h3>

                  {/* CBE */}
                  <div
                    className="
                      bg-white
                      dark:bg-gray-800
                      p-4
                      rounded-lg
                      shadow
                    "
                  >

                    <p
                      className="
                        font-bold
                        dark:text-white
                      "
                    >

                      CBE Bank

                    </p>

                    <p
                      className="
                        text-lg
                        dark:text-gray-200
                      "
                    >

                      1000060960163

                    </p>

                  </div>

                  {/* AWASH */}
                  <div
                    className="
                      bg-white
                      dark:bg-gray-800
                      p-4
                      rounded-lg
                      shadow
                    "
                  >

                    <p
                      className="
                        font-bold
                        dark:text-white
                      "
                    >

                      Awash Bank

                    </p>

                    <p
                      className="
                        text-lg
                        dark:text-gray-200
                      "
                    >

                      01320457269400

                    </p>

                  </div>

                  {/* ABYSSINIA */}
                  <div
                    className="
                      bg-white
                      dark:bg-gray-800
                      p-4
                      rounded-lg
                      shadow
                    "
                  >

                    <p
                      className="
                        font-bold
                        dark:text-white
                      "
                    >

                      Abyssinia Bank

                    </p>

                    <p
                      className="
                        text-lg
                        dark:text-gray-200
                      "
                    >

                      61157069

                    </p>

                  </div>

                </div>

              )
            }

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
                name="message"
                placeholder="Write your support message"
                value={
                  formData.message
                }
                onChange={
                  handleChange
                }
                rows="5"
                className="
                  w-full
                  border
                  bg-white
                  dark:bg-gray-700
                  dark:text-white
                  dark:border-gray-600
                  p-3
                  rounded-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary
                "
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full
                bg-primary
                text-white
                py-3
                rounded-lg
                font-semibold
                hover:bg-primaryDark
                transition
              "
            >

              Submit Donation

            </button>

          </form>

        </motion.div>

      </section>

      <Footer />

    </div>
    </>
    

  );
}