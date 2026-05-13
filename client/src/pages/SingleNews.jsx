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

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[500px] object-cover"
          />

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

        <div className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">

          {post.content}

        </div>

      </section>

      <Footer />

    </div>
    </>
    </div>
  );
}