import {
    useEffect,
    useState,
  } from "react";
  
  import {
    useParams,
  } from "react-router-dom";
  
  import axios from "axios";
  
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import { API_URL } from "../config";
  import {
    Helmet,
  } from "react-helmet-async";

  
  export default function SingleEvent() {
  
    const { id } = useParams();
  
    const [event, setEvent] =
      useState(null);
  
    const [timeLeft, setTimeLeft] =
      useState("");
  
    // FETCH EVENT
    const fetchEvent = async () => {
  
      try {
  
        const response =
          await axios.get(
            `${API_URL}/api/events/${id}`
          );
  
        setEvent(response.data.event);
  
      } catch (error) {
  
        console.error(error);
  
      }
    };
  
    // COUNTDOWN
    useEffect(() => {
  
      fetchEvent();
  
    }, []);
  
    useEffect(() => {
  
      if (!event) return;
  
      const interval =
        setInterval(() => {
  
          const now =
            new Date().getTime();
  
          const distance =
            new Date(
              event.eventDate
            ).getTime() - now;
  
          if (distance <= 0) {
  
            setTimeLeft(
              "Event Started"
            );
  
            return;
          }
  
          const days =
            Math.floor(
              distance /
              (1000 * 60 * 60 * 24)
            );
  
          const hours =
            Math.floor(
              (
                distance %
                (1000 * 60 * 60 * 24)
              ) /
              (1000 * 60 * 60)
            );
  
          const minutes =
            Math.floor(
              (
                distance %
                (1000 * 60 * 60)
              ) /
              (1000 * 60)
            );
  
          const seconds =
            Math.floor(
              (
                distance %
                (1000 * 60)
              ) / 1000
            );
  
          setTimeLeft(
            `${days}d ${hours}h ${minutes}m ${seconds}s`
          );
  
        }, 1000);
  
      return () =>
        clearInterval(interval);
  
    }, [event]);
  
    if (!event) {
  
      return (
  
<div className="flex justify-center py-20">
  <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-primary" />
</div>
  
      );
    }
  
    return (
      <div className="page-container">
      <>
      <Helmet>
    
        <title>
          {event?.title} | GOGOT PARTY
        </title>
    
        <meta
          name="description"
          content={
            event?.description?.slice(0, 150)
          }
        />
    
      </Helmet>
  
      <div>
  
        <Navbar />
  
        {/* IMAGE */}
        {
          event.image && (
  
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[500px] object-cover"
            />
  
          )
        }
  
        {/* CONTENT */}
        <section className="max-w-5xl mx-auto px-6 py-16">
  
          <h1 className="text-5xl font-extrabold mb-6">
            {event.title}
          </h1>
  
          {/* COUNTDOWN */}
          <div className="bg-primary text-white text-center py-6 rounded-2xl text-3xl font-bold mb-10">
  
            ⏳ {timeLeft}
  
          </div>
  
          {/* LOCATION */}
          <div className="mb-6 text-xl font-semibold">
  
            📍 {event.location}
  
          </div>
  
          {/* DATE */}
          <div className="mb-10 text-gray-500">
  
            {
              new Date(
                event.eventDate
              ).toLocaleString()
            }
  
          </div>
  
          {/* DESCRIPTION */}
          <div className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
  
            {event.description}
  
          </div>
  
        </section>
  
        <Footer />
  
      </div>
      </>
      </div>
    );
  }