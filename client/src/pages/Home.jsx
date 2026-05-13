import {
  useEffect,
  useState,
} from "react";

import {
  useTranslation,
} from "react-i18next";

import axios from "axios";

import {
  Link,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Helmet,
} from "react-helmet-async";

import { API_URL } from "../config";

export default function Home() {

  const { t } =
    useTranslation();
  const [posts, setPosts] =
    useState([]);
  const [events, setEvents] =
    useState([]);

  const electionDate =
    new Date(
      "2026-06-01T00:00:00"
    ).getTime();

  const [
    timeLeft,
    setTimeLeft
  ] = useState({

    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,

  });
  const [
    supporters,
    setSupporters
  ] = useState([]);
  useEffect(() => {

    const timer =
      setInterval(() => {

        const now =
          new Date().getTime();

        const distance =
          electionDate - now;

        if (distance < 0) {

          clearInterval(timer);

          return;

        }

        setTimeLeft({

          days: Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
          ),

          hours: Math.floor(
            (
              distance %
              (
                1000 *
                60 *
                60 *
                24
              )
            ) /
            (
              1000 *
              60 *
              60
            )
          ),

          minutes: Math.floor(
            (
              distance %
              (
                1000 *
                60 *
                60
              )
            ) /
            (
              1000 * 60
            )
          ),

          seconds: Math.floor(
            (
              distance %
              (
                1000 * 60
              )
            ) / 1000
          ),

        });

      }, 1000);

    return () =>
      clearInterval(timer);

  }, []);

  // const [
  //   supporters,
  //   setSupporters
  // ] = useState([]);

  // FETCH DATA
  const fetchData = async () => {

    try {

      // POSTS
      const postRes =
        await axios.get(
          `${API_URL}/api/posts`
        );

      setPosts(
        postRes.data.posts
          ?.slice(0, 3) || []
      );

      // EVENTS
      const eventRes =
        await axios.get(
          `${API_URL}/api/events`
        );

      setEvents(
        eventRes.data.events
          ?.slice(0, 3) || []
      );

      const token =
        localStorage.getItem(
          "token"
        );

      // const supporterRes =
      //   await axios.get(

      //     `${API_URL}/api/supporters`,

      //     {
      //       headers: token
      //         ? {
      //             Authorization:
      //               `Bearer ${token}`,
      //           }
      //         : {},
      //     }

      //   );

      // setSupporters(

      //   supporterRes.data
      //     .supporters || []

      // );

      // setSupporters(
      //   supporterRes.data
      //     .supporters || []
      // );

    } catch (error) {

      console.error(error);

    }
  };

  useEffect(() => {

    fetchData();

  }, []);

  return (
<div className="page-container">
<>

      <Helmet>

        <title>
          GOGOT PARTY | New Generation Bright Future
        </title>

        <meta
          name="description"
          content="
      Official campaign platform of GOGOT PARTY.
      Together for change, leadership,
      democracy, and development in Ethiopia.
    "
        />

        <meta
          property="og:title"
          content="
      GOGOT PARTY
    "
        />

        <meta
          property="og:description"
          content="
      Official campaign platform of GOGOT PARTY.
    "
        />

      </Helmet>
      <div
        className="
    bg-white
    dark:bg-gray-900
    text-black
    dark:text-white
    min-h-screen
    transition
  "
      >

        <Navbar />

        {/* HERO */}
        <section
          className="
    bg-gradient-to-r
    from-primary
    to-primaryDark
    text-white 
    py-20
    px-6
  "
        >

          <div
            className="
      max-w-7xl
      mx-auto
      grid
      md:grid-cols-2
      gap-16
      items-center
    "
          >

            {/* LEFT CONTENT */}
            <div>

              <p
                className="
          uppercase
          tracking-[0.3em]
          text-white/70
          font-semibold
          mb-4
        "
              >

                Gogot Party

              </p>

              <h1
                className="
          text-5xl 
          md:text-7xl
          font-extrabold
          leading-tight
          mb-8
        "
              >

                {t("home.heroTitle")}

              </h1>

              <p
                className="
          text-xl
          text-white/80
          leading-relaxed
          mb-10
          max-w-2xl
        "
              >

                {t("home.heroSubtitle")}

              </p>

              <div
                className="
          flex
          flex-wrap
          gap-4
        "
              >

                <Link
                  to="/join"
                  className="
            bg-white
            text-primary 
            px-8
            py-4
            rounded-2xl
            font-bold
            shadow-xl
            hover:scale-105
            transition
          "
                >

                  {t("home.joinMovement")}

                </Link>

                <Link
                  to="/donate"
                  className="
            border-2
            border-white
            px-8
            py-4
            rounded-2xl
            font-bold
            hover:bg-white
            hover:text-primary
            transition
          "
                >

                  {t("home.supportCampaign")}

                </Link>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div
              className="
    flex
    justify-center
  "
            >

              <div
                className="
    relative
    group
    w-full
    max-w-[650px]
    aspect-square
  "
              >

                {/* GLOW EFFECT */}
                <div
                  className="
        absolute
        inset-0
        bg-white/30
        blur-[120px]
        rounded-full
        scale-110
        animate-pulse
      "
                />

                {/* FLOATING RING */}
                <div
                  className="
        absolute
        -inset-4
        border
        border-white/20
        rounded-[40px]
        animate-spin
      "
                  style={{
                    animationDuration:
                      "12s",
                  }}
                />

                {/* IMAGE */}
                <img
                  src="/hime5.jpg"
                  alt="Engineer Endalkachew Awol"
                  className="
    relative
    w-full
    h-full
    object-cover
    rounded-[40px]
    border-4
    border-white/30
    shadow-[0_25px_80px_rgba(0,0,0,0.45)]
    transition
    duration-500
    group-hover:scale-105
    group-hover:rotate-1
  "
                />

                {/* BADGE */}
                <div
                  className="
        absolute
        -bottom-5
        left-1/2
        -translate-x-1/2
        bg-white
        text-primary
        px-6
        py-3
        rounded-2xl
        shadow-2xl
        font-bold
      "
                >

                  Candidate 2026

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ELECTION COUNTDOWN */}
        <section
          className="
    relative
    overflow-hidden
    py-24
    bg-gradient-to-br
    from-primary
    via-primaryDark
    to-black
    text-white
  "
        >

          {/* BACKGROUND GLOW */}
          <div
            className="
      absolute
      top-0
      left-0
      w-full
      h-full
      opacity-20
      pointer-events-none
    "
          >

            <div
              className="
        absolute
        w-[500px]
        h-[500px]
        bg-yellow-400
        rounded-full
        blur-3xl
        -top-32
        -left-32
      "
            />

            <div
              className="
        absolute
        w-[400px]
        h-[400px]
        bg-white
        rounded-full
        blur-3xl
        bottom-0
        right-0
      "
            />

          </div>

          <div
            className="
      relative
      z-10
      max-w-7xl
      mx-auto
      px-6
      text-center
    "
          >

            {/* TITLE */}
            <p
              className="
        uppercase
        tracking-[0.35em]
        text-yellow-300
        font-bold
        mb-5
      "
            >

              Election Countdown

            </p>

            <h2
              className="
        text-5xl
        md:text-7xl
        font-black
        mb-6
        leading-tight
      "
            >

              June 01, 2026

            </h2>

            <p
              className="
        text-xl
        text-white/80
        max-w-3xl
        mx-auto
        mb-14
      "
            >

              The future of Ethiopia
              begins with your vote.
              Every second counts
              toward a new generation
              and a brighter future.

            </p>

            {/* COUNTDOWN */}
            <div
              id="countdown"
              className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-6
        max-w-5xl
        mx-auto
      "
            >

              {/* DAYS */}
              <div
                className="
          backdrop-blur-xl
          bg-white/10
          border
          border-white/20
          rounded-[30px]
          py-10
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
              >

                <h3
                  id="days"
                  className="
            text-6xl
            md:text-7xl
            font-black
            text-yellow-300
          "
                >

                  {timeLeft.days}

                </h3>

                <p
                  className="
            mt-4
            uppercase
            tracking-[0.2em]
            text-white/70
            font-semibold
          "
                >

                  Days

                </p>

              </div>

              {/* HOURS */}
              <div
                className="
          backdrop-blur-xl
          bg-white/10
          border
          border-white/20
          rounded-[30px]
          py-10
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
              >

                <h3
                  id="hours"
                  className="
            text-6xl
            md:text-7xl
            font-black
            text-yellow-300
          "
                >

                  {timeLeft.hours}

                </h3>

                <p
                  className="
            mt-4
            uppercase
            tracking-[0.2em]
            text-white/70
            font-semibold
          "
                >

                  Hours

                </p>

              </div>

              {/* MINUTES */}
              <div
                className="
          backdrop-blur-xl
          bg-white/10
          border
          border-white/20
          rounded-[30px]
          py-10
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
              >

                <h3
                  id="minutes"
                  className="
            text-6xl
            md:text-7xl
            font-black
            text-yellow-300
          "
                >

                  {timeLeft.minutes}

                </h3>

                <p
                  className="
            mt-4
            uppercase
            tracking-[0.2em]
            text-white/70
            font-semibold
          "
                >

                  Minutes

                </p>

              </div>

              {/* SECONDS */}
              <div
                className="
          backdrop-blur-xl
          bg-white/10
          border
          border-white/20
          rounded-[30px]
          py-10
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
              >

                <h3
                  id="seconds"
                  className="
            text-6xl
            md:text-7xl
            font-black
            text-yellow-300
          "
                >

                  {timeLeft.seconds}

                </h3>

                <p
                  className="
            mt-4
            uppercase
            tracking-[0.2em]
            text-white/70
            font-semibold
          "
                >

                  Seconds

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ABOUT CANDIDATE */}

        {/* STATS */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div
            className="
    grid
    md:grid-cols-2
    gap-14
    items-stretch
  "
          >

            {/* IMAGE CARD */}
            <div
              className="
      relative
      rounded-[40px]
      overflow-hidden
      shadow-[0_30px_80px_rgba(0,0,0,0.18)]
      border
      border-gray-200
      bg-white
      dark:bg-gray-800
      h-full
      min-h-[650px]
    "
            >

              {/* GLOW */}
              <div
                className="
        absolute
        inset-0
        bg-primary/10
        blur-3xl
        opacity-40
      "
              />

              <img
                src="/hime4.jpg"
                alt="Haimanot Gebre"
                className="
        relative
        w-full
        h-full
        object-cover
        transition
        duration-700
        hover:scale-105
      "
              />

              {/* OVERLAY */}
              <div
                className="
        absolute
        bottom-0
        left-0
        right-0
        bg-gradient-to-t
        from-black/80
        to-transparent
        p-8
      "
              >

                <h3
                  className="
          text-white 
          text-3xl
          font-extrabold
        "
                >

                  Haimanot Gebre

                </h3>

                <p
                  className="
          text-white/80
          mt-2
          text-lg
        "
                >

                  Candidate for Central Ethiopia Region

                </p>

              </div>

            </div>

            {/* CONTENT CARD */}
            <div
              className="
      bg-white
      dark:bg-gray-900
      dark:text-white
      rounded-[40px]
      shadow-[0_20px_60px_rgba(0,0,0,0.10)]
      border
      border-gray-100
      p-10
      flex
      flex-col
      justify-center
      min-h-[650px]
    "
            >

              <p
                className="
        text-primary 
        font-bold
        uppercase
        tracking-[0.25em]
        mb-5
      "
              >

                Candidate Profile

              </p>

              <h2
                className="
        text-5xl 
        font-extrabold
        leading-tight
        mb-8
        text-gray-900 dark:text-white
      "
              >

                Haimanot Gebre Shikur

              </h2>

              <p
                className="
        text-gray-700 dark:text-white
        text-xl
        leading-relaxed
        mb-6
      "
              >

                Haimanot Gebre Shikur
                is a visionary leader
                committed to democracy,
                youth empowerment,
                justice, development,
                and national unity.

              </p>

              <p
                className="
        text-gray-700 dark:text-white
        text-xl
        leading-relaxed
        mb-10
      "
              >

                His mission is to build
                a transparent,
                inclusive, and
                prosperous future for
                all citizens through
                innovation,
                accountability, and
                strong public
                participation.

              </p>

              {/* STATS */}
              <div
                className="
        grid
        grid-cols-2
        gap-6
        mt-auto
      "
              >

                <div
                  className="
          bg-gray-50
          rounded-2xl
          p-6
          border
          border-gray-100
        "
                >

                  <h3
                    className="
            text-4xl
            font-extrabold
            text-primary
          "
                  >



                  </h3>

                  <p
                    className="
            text-gray-600
            mt-2
          "
                  >

                    Years Leadership

                  </p>

                </div>

                <div
                  className="
          bg-gray-50
          rounded-2xl
          p-6
          border
          border-gray-100
        "
                >

                  <h3
                    className="
            text-4xl
            font-extrabold
            text-primary
          "
                  >



                  </h3>

                  <p
                    className="
            text-gray-600
            mt-2
          "
                  >

                    Public Commitment

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>
        {/* OTHER CANDIDATES */}
        <section
          className="
    max-w-7xl
    mx-auto
    px-6
    py-20
  "
        >

          {/* SECTION TITLE */}
          <div
            className="
      text-center
      mb-16
    "
          >

            <p
              className="
        text-primary
        font-bold
        uppercase
        tracking-[0.25em]
        mb-4
      "
            >

              Leadership Team

            </p>

            <h2
              className="
        text-5xl
        font-extrabold
        dark:text-white
        mb-6
      "
            >

              Federal and Regional Candidates

            </h2>

            <p
              className="
        text-gray-600
        dark:text-gray-300
        max-w-3xl
        mx-auto
        text-lg
      "
            >

              Meet the next generation
              of leaders committed to
              democracy, development,
              and national unity.

            </p>

          </div>


          {/* CANDIDATE GRID */}
          <div
            className="
    grid
    md:grid-cols-2
    lg:grid-cols-3
    gap-10
  "
          >

            {/* CANDIDATE 1 */}
            <div
              className="
      bg-white
      dark:bg-gray-800
      rounded-[30px]
      overflow-hidden
      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      border
      border-gray-100
      dark:border-gray-700
      hover:-translate-y-2
      transition
      duration-500
    "
            >

              {/* IMAGE */}
              <div
                className="
        relative
        min-h-[420px]
        md:h-[500px]
        bg-gray-100
        dark:bg-gray-700
        flex
        items-center
        justify-center
        overflow-hidden
      "
              >

                <img
                  src="https://res.cloudinary.com/dg3muzlqj/image/upload/f_auto,q_auto/v1778615381/endaleN_sdxbto.png"
                  alt="Endale Nida"
                  loading="lazy"
                  className="
          w-full
          h-full
          object-contain
          transition
          duration-700
          hover:scale-105
        "
                />

                <div
                  className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          to-transparent
        "
                />

                <div
                  className="
          absolute
          bottom-6
          left-6
        "
                >

                  <h3
                    className="
            text-white
            text-2xl
            font-extrabold
          "
                  >

                    Endale Nida

                  </h3>

                  <p
                    className="
            text-white/80
            mt-1
          "
                  >

                    Federal Candidate

                  </p>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-7">

                <div className="mb-5">

                  <p
                    className="
            text-primary
            font-bold
            uppercase
            tracking-wider
            mb-2
          "
                  >

                    Education

                  </p>

                  <p
                    className="
            text-gray-700
            dark:text-gray-300
            leading-relaxed
          "
                  >

                    Bsc in Chemical Engineering.
                    Msc with MBA

                  </p>

                </div>

                <div
                  className="
          border-t
          border-gray-100
          dark:border-gray-700
          pt-5
        "
                >

                  <p
                    className="
            text-gray-600
            dark:text-gray-300
          "
                  >

                    Dedicated to youth
                    empowerment,
                    education reform,
                    and transparent
                    leadership.

                  </p>

                </div>

              </div>

            </div>

            {/* CANDIDATE 2 */}
            <div
              className="
      bg-white
      dark:bg-gray-800
      rounded-[30px]
      overflow-hidden
      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      border
      border-gray-100
      dark:border-gray-700
      hover:-translate-y-2
      transition
      duration-500
    "
            >

              <div
                className="
        relative
        min-h-[420px]
        md:h-[500px]
        bg-gray-100
        dark:bg-gray-700
        flex
        items-center
        justify-center
        overflow-hidden
      "
              >

                <img
                  src="https://res.cloudinary.com/dg3muzlqj/image/upload/f_auto,q_auto/v1778615384/ahmedinA_mujfmb.png"
                  alt="Ahmedin Alemu"
                  loading="lazy"
                  className="
          w-full
          h-full
          object-contain
          transition
          duration-700
          hover:scale-105
        "
                />

                <div
                  className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          to-transparent
        "
                />

                <div
                  className="
          absolute
          bottom-6
          left-6
        "
                >

                  <h3
                    className="
            text-white
            text-2xl
            font-extrabold
          "
                  >

                    Ahmedin Alemu

                  </h3>

                  <p
                    className="
            text-white/80
            mt-1
          "
                  >

                    Regional Candidate

                  </p>

                </div>

              </div>

              <div className="p-7">

                <div className="mb-5">

                  <p
                    className="
            text-primary
            font-bold
            uppercase
            tracking-wider
            mb-2
          "
                  >

                    Education

                  </p>

                  <p
                    className="
            text-gray-700
            dark:text-gray-300
            leading-relaxed
          "
                  >

                    BSC in Electrical Engineering.


                  </p>

                </div>

                <div
                  className="
          border-t
          border-gray-100
          dark:border-gray-700
          pt-5
        "
                >

                  <p
                    className="
            text-gray-600
            dark:text-gray-300
          "
                  >

                    Focused on regional
                    growth, investment,
                    and employment creation.

                  </p>

                </div>

              </div>

            </div>

            {/* CANDIDATE 3 */}
            <div
              className="
      bg-white
      dark:bg-gray-800
      rounded-[30px]
      overflow-hidden
      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      border
      border-gray-100
      dark:border-gray-700
      hover:-translate-y-2
      transition
      duration-500
    "
            >

              <div
                className="
        relative
        min-h-[420px]
        md:h-[500px]
        bg-gray-100
        dark:bg-gray-700
        flex
        items-center
        justify-center
        overflow-hidden
      "
              >

                <img
                  src="https://res.cloudinary.com/dg3muzlqj/image/upload/f_auto,q_auto/v1778615380/hayatuB_vu3ayp.png"
                  alt="Hayatu Bediru"
                  loading="lazy"
                  className="
          w-full
          h-full
          object-contain
          transition
          duration-700
          hover:scale-105
        "
                />

                <div
                  className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          to-transparent
        "
                />

                <div
                  className="
          absolute
          bottom-6
          left-6
        "
                >

                  <h3
                    className="
            text-white
            text-2xl
            font-extrabold
          "
                  >

                    Hayatu Bediru

                  </h3>

                  <p
                    className="
            text-white/80
            mt-1
          "
                  >

                    Regional Candidate

                  </p>

                </div>

              </div>

              <div className="p-7">

                <div className="mb-5">

                  <p
                    className="
            text-primary
            font-bold
            uppercase
            tracking-wider
            mb-2
          "
                  >

                    Education

                  </p>

                  <p
                    className="
            text-gray-700
            dark:text-gray-300
            leading-relaxed
          "
                  >

                    BSc in Applied Mathematics.

                  </p>

                </div>

                <div
                  className="
          border-t
          border-gray-100
          dark:border-gray-700
          pt-5
        "
                >

                  <p
                    className="
            text-gray-600
            dark:text-gray-300
          "
                  >

                    Advocates justice,
                    accountability,
                    and equal public
                    representation.

                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* NEWS */}
        {/* NEWS */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="flex justify-between items-center mb-10">

            <h2
              className="
        text-4xl
        font-extrabold
        dark:text-white
      "
            >
              Latest News
            </h2>

            <Link
              to="/news"
              className="text-primary font-semibold"
            >
              View All
            </Link>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {posts.map((post) => (

              <Link
                to={`/news/${post._id}`}
                key={post._id}
                className="
          bg-white
          dark:bg-gray-800
          shadow-xl
          rounded-2xl
          overflow-hidden
          hover:shadow-2xl
          transition
        "
              >

                {
                  post.image && (

                    <div
                      className="
                w-full
                h-72
                bg-gray-100
                dark:bg-gray-700
                flex
                items-center
                justify-center
                overflow-hidden
              "
                    >

                      <img
                        src={post.image}
                        alt={post.title}
                        className="
                  w-full
                  h-full
                  object-contain
                  transition
                  duration-300
                  hover:scale-105
                "
                      />

                    </div>

                  )
                }

                <div className="p-6">

                  <h3
                    className="
              text-2xl
              font-bold
              mb-4
              dark:text-white
            "
                  >

                    {post.title}

                  </h3>

                  <p
                    className="
              text-gray-600
              dark:text-gray-300
            "
                  >

                    {
                      post.content
                        ?.slice(0, 120)
                    }...

                  </p>

                </div>

              </Link>

            ))}

          </div>

        </section>

        {/* EVENTS */}
        <section className="bg-gray-100 dark:bg-gray-800 py-16">

          <div className="max-w-7xl mx-auto px-6">

            <div className="flex justify-between items-center mb-10">

              <h2
                className="
          text-4xl
          font-extrabold
          dark:text-white
        "
              >
                Upcoming Events
              </h2>

              <Link
                to="/events"
                className="text-primary font-semibold"
              >
                View All
              </Link>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {events.map((event) => (

                <Link
                  to={`/events/${event._id}`}
                  key={event._id}
                  className="
            bg-white
            dark:bg-gray-900
            shadow-xl
            rounded-2xl
            overflow-hidden
            hover:shadow-2xl
            transition
          "
                >

                  {
                    event.image && (

                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-56 object-cover"
                      />

                    )
                  }

                  <div className="p-6">

                    <h3
                      className="
                text-2xl
                font-bold
                mb-4
                dark:text-white
              "
                    >

                      {event.title}

                    </h3>

                    <p
                      className="
                text-gray-600
                dark:text-gray-300
                mb-4
              "
                    >

                      {
                        event.description
                          ?.slice(0, 120)
                      }...

                    </p>

                    <p
                      className="
                font-semibold
                dark:text-white
              "
                    >

                      📍 {event.location}

                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

        {/* STATS */}
        <div
          className="
    bg-gray-50
    dark:bg-gray-800
    rounded-2xl
    p-6
    border
    border-gray-100
    dark:border-gray-700
  "
        >

          <h3
            className="
      text-4xl
      font-extrabold
      text-primary
    "
          >

            15+

          </h3>

          <p
            className="
      text-gray-600
      dark:text-gray-300
      mt-2
    "
          >

            Years Leadership

          </p>

        </div>

        <div
          className="
    bg-gray-50
    dark:bg-gray-800
    rounded-2xl
    p-6
    border
    border-gray-100
    dark:border-gray-700
  "
        >

          <h3
            className="
      text-4xl
      font-extrabold
      text-primary
    "
          >

            100%

          </h3>

          <p
            className="
      text-gray-600
      dark:text-gray-300
      mt-2
    "
          >

            Public Commitment

          </p>

        </div>

        {/* EVENTS */}
        {/* <section className="bg-gray-100 dark:bg-gray-800 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">

            <h2 className="text-4xl font-extrabold">
              Upcoming Events
            </h2>

            <Link
              to="/events"
              className="text-primary font-semibold"
            >
              View All
            </Link>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {events.map((event) => (

              <Link
                to={`/events/${event._id}`}
                key={event._id}
                className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition"
              >

                {
                  event.image && (

                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-56 object-cover"
                    />

                  )
                }

                <div className="p-6">

                  <h3 className="text-2xl font-bold mb-4">

                    {event.title}

                  </h3>

                  <p className="text-gray-600 mb-4">

                    {
                      event.description
                        ?.slice(0, 120)
                    }...

                  </p>

                  <p className="font-semibold">

                    📍 {event.location}

                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section> */}

        {/* CTA */}
        <section className="bg-primary text-white text-center py-24 px-6">

          <h2 className="text-5xl font-extrabold mb-6">

            Join The Movement

          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">

            Together we can build a
            stronger, united, and
            prosperous Ethiopia.

          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              to="/join"
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              Become Volunteer
            </Link>

            <Link
              to="/donate"
              className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-primary transition"
            >
              Donate Now
            </Link>

          </div>

        </section>

        <Footer />

      </div>
      

</>
</div>
      );
}