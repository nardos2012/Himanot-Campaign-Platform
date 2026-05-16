import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import { API_URL } from "../config";

import {
  API_URL,
} from "../config";

import {
  Helmet,
} from "react-helmet-async";

import toast
  from "react-hot-toast";

export default function Events() {

  const [events, setEvents] =
    useState([]);

  // FETCH EVENTS
  const fetchEvents = async () => {

    try {

      const response =
        await axios.get(
          `${API_URL}/api/events`
        );

      setEvents(response.data.events);

    } catch (error) {

      console.error(error);
    
      toast.error(
        "Offline mode: Unable to load latest updates."
      );
    
    }
  };

  useEffect(() => {

    fetchEvents();

  }, []);

  return (
    <div className="page-container">
    <>
  <Helmet>

    <title>
      Events | GOGOT PARTY
    </title>

    <meta
      name="description"
      content="
        Upcoming campaign events,
        public meetings,
        and rallies of GOGOT PARTY.
      "
    />

  </Helmet>

    <div
  className="
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
      <section className="bg-gradient-to-r  from-primary to-primaryDark text-white py-20 text-center">

        <h1 className="text-5xl font-extrabold mb-4">
          Campaign Events
        </h1>

        <p className="text-white/80 text-lg">
          Upcoming rallies and campaign activities.
        </p>

      </section>

      {/* EVENTS */}
      <section className="px-10 py-16">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{events.map((event) => (

  <Link
    to={`/events/${event._id}`}
    key={event._id}
    className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition block"
  >

    {/* IMAGE */}
    {
      event.image && (

<div
  className="
    w-full
    h-72
    bg-gray-100 
    flex
    items-center
    justify-center
    overflow-hidden
  "
>

{
  event.image && (

    <div
      className="
        w-full
        h-72
        bg-gray-100
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >

      <img
        src={event.image}
        alt={event.title}
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

</div>

      )
    }

    {/* CONTENT */}
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-4">
        {event.title}
      </h2>

      <p className="text-gray-600  mb-6 leading-relaxed">

        {
          event.description.length > 140
            ? event.description.slice(0, 140) + "..."
            : event.description
        }

      </p>

      {/* LOCATION */}
      <p className="font-semibold mb-3">
        📍 {event.location}
      </p>

      {/* DATE */}
      <p className="text-sm text-gray-500 mb-6">

        {
          new Date(
            event.eventDate
          ).toLocaleString()
        }

      </p>

      {/* STATUS */}
      <div className="bg-primary text-white text-center py-3 rounded-lg font-semibold">

        {
          new Date(event.eventDate) >
          new Date()
            ? "Upcoming Event"
            : "Event Completed"
        }

      </div>

    </div>

  </Link>

))}

</div>

      </section>

      <Footer />

    </div>
    </>
    </div>
  );
}