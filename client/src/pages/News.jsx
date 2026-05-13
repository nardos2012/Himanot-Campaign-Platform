import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

  import NewsSkeleton
  from "../components/NewsSkeleton";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { API_URL } from "../config";
import {
  API_URL,
} from "../config";

import {
  Helmet,
} from "react-helmet-async";


export default function News() {

  const [posts, setPosts] =
    useState([]);

    const [loading, setLoading] =
  useState(true);

  // FETCH POSTS
  const fetchPosts =
  async () => {

    try {

      setLoading(true);

      const response =
        await axios.get(

          `${API_URL}/api/posts`

        );

      setPosts(
        response.data.posts
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchPosts();

  }, []);

  if (loading) {

    return (
  
      <div
        className="
          min-h-screen
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          p-6
        "
      >
  
        {
  
          [...Array(6)].map(
  
            (_, index) => (
  
              <NewsSkeleton
                key={index}
              />
  
            )
  
          )
  
        }
  
      </div>
  
    );
  
  }

  return (
    <div className="page-container">
    <>
  <Helmet>

    <title>
      News | GOGOT PARTY
    </title>

    <meta
      name="description"
      content="
        Latest campaign news,
        announcements,
        and political updates from GOGOT PARTY.
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
      <section className="bg-gradient-to-r from-primary to-primaryDark text-white py-20 text-center">

        <h1 className="text-5xl font-extrabold mb-4">
          Campaign News
        </h1>

        <p className="text-white/80 text-lg">
          Latest updates from GOGOT PARTY
        </p>

      </section>

      {/* POSTS */}
      <section className="px-10 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post) => (

<Link
to={`/news/${post._id}`}
key={post._id}
>

              {/* IMAGE */}
              {
                post.image && (

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

              {/* CONTENT */}
              <div className="p-6">

                <h2 className="text-2xl font-bold mb-3">
                  {post.title}
                </h2>

                <p className="text-gray-600 dark:text-white leading-relaxed mb-6">

                  {
                    post.content.length > 180
                      ? post.content.slice(0, 180) + "..."
                      : post.content
                  }

                </p>

                {/* FOOTER */}
                <div className="flex justify-between items-center">

                  <span className="text-sm text-gray-400 dark:text-white">

                    {
                      new Date(
                        post.createdAt
                      ).toLocaleDateString()
                    }

                  </span>

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