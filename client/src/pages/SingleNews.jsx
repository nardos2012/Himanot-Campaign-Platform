import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { API_URL } from "../config";
import {
  Helmet,
} from "react-helmet-async";

export default function SingleNews() {

  const { id } = useParams();

  const [post, setPost] =
    useState(null);

  // FETCH POST
  const fetchPost = async () => {

    try {

      const response =
        await axios.get(
          `${API_URL}/api/posts/${id}`
        );

      setPost(response.data.post);

    } catch (error) {

      console.error(error);

    }
  };

  useEffect(() => {

    fetchPost();

  }, []);

  if (!post) {

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
      Single News | GOGOT PARTY
    </title>

    <meta
      name="description"
      content="
        The page you are looking for
        could not be found.
      "
    />

  </Helmet>

    <div>

      <Navbar />

      {/* HERO IMAGE */}
      {
        post.image && (

          <div
          className="
            w-full
            max-w-5xl
            mx-auto
            overflow-hidden
            rounded-3xl
            shadow-2xl
          "
        >
        
          <img
        
            src={post.image}
        
            alt={post.title}
        
            className="
              w-full
              h-auto
              max-h-[700px]
              object-cover
            "
        
          />
        
        </div>

        )
      }

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-extrabold mb-6">
          {post.title}
        </h1>

        <p className="text-gray-400 mb-10">

          {
            new Date(
              post.createdAt
            ).toLocaleDateString()
          }

        </p>

        <div
  className="
    max-w-4xl
    mx-auto
    mt-10
    px-4
    sm:px-6
    lg:px-8
  "
>

  <div
    className="
      bg-white
      dark:bg-gray-900

      rounded-3xl
      shadow-xl

      p-6
      md:p-10

      text-gray-800
      dark:text-gray-200

      text-lg
      leading-[2.2]

      tracking-wide

      whitespace-pre-line

      text-justify

      break-words
    "
  >

    {post.content}

  </div>

</div>

      </section>

      <Footer />

    </div>
    </>
    </div>
  );
}