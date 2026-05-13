import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  API_URL,
} from "../config";
import {
  Helmet,
} from "react-helmet-async";

export default function
AdminPosts() {

  const [
    posts,
    setPosts
  ] = useState([]);

  const [
    loading,
    setLoading
  ] = useState(false);

  const [
    formData,
    setFormData
  ] = useState({

    title: "",
    content: "",
    image: null,

  });

  // FETCH POSTS
  const fetchPosts =
    async () => {

      try {

        const response =
          await axios.get(

            `${API_URL}/api/posts`

          );

        setPosts(

          response.data.posts

        );

      } catch (error) {

        console.error(error);

      }

    };

  useEffect(() => {

    fetchPosts();

  }, []);

  // INPUT CHANGE
  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,

      });

    };

  // IMAGE CHANGE
  const handleImageChange =
    (e) => {

      setFormData({

        ...formData,

        image:
          e.target.files[0],

      });

    };

  // CREATE POST
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const data =
          new FormData();

        data.append(
          "title",
          formData.title
        );

        data.append(
          "content",
          formData.content
        );

        if (formData.image) {

          data.append(
            "image",
            formData.image
          );

        }

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.post(

          `${API_URL}/api/posts`,

          data,

          {
            headers: {

              ...(token && {

                Authorization:
                  `Bearer ${token}`,

              }),

              "Content-Type":
                "multipart/form-data",

            },
          }

        );

        alert(
          "Post created successfully"
        );

        setFormData({

          title: "",
          content: "",
          image: null,

        });

        fetchPosts();

      } catch (error) {

        console.error(error);

        alert(

          error.response?.data
            ?.message ||

          "Upload failed"

        );

      } finally {

        setLoading(false);

      }

    };

  // DELETE POST
  const deletePost =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this post?"
        );

      if (!confirmDelete)
        return;

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        await axios.delete(

          `${API_URL}/api/posts/${id}`,

          {
            headers: token
              ? {
                  Authorization:
                    `Bearer ${token}`,
                }
              : {},
          }

        );

        alert(
          "Post deleted"
        );

        fetchPosts();

      } catch (error) {

        console.error(error);

      }

    };

  return (
    <div className="page-container">
<>
  <Helmet>

    <title>
      Campaign Posts | GOGOT PARTY
    </title>

    <meta
      name="description"
      content="
        The page you are looking for
        could not be found.
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

      {/* HERO */}
      <section
        className="
          bg-gradient-to-r
          from-primary
          to-primaryDark
          text-white
          py-16
          text-center
        "
      >

        <h1
          className="
            text-5xl
            font-extrabold
            mb-4
          "
        >

          Campaign Posts

        </h1>

        <p
          className="
            text-white/80
            text-lg
          "
        >

          Manage campaign
          news and
          announcements.

        </p>

      </section>

      {/* CREATE FORM */}
      <section
        className="
          max-w-4xl
          mx-auto
          px-6
          py-16
        "
      >

        <div
          className="
            bg-white
            dark:bg-gray-800
            shadow-2xl
            rounded-2xl
            p-10
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              mb-8
              dark:text-white
            "
          >

            Create New Post

          </h2>

          <form
            onSubmit={
              handleSubmit
            }
            className="
              space-y-6
            "
          >

            {/* TITLE */}
            <div>

              <label
                className="
                  block
                  mb-2
                  font-semibold
                  dark:text-white
                "
              >

                Title

              </label>

              <input
                type="text"
                name="title"
                value={
                  formData.title
                }
                onChange={
                  handleChange
                }
                placeholder="Post title"
                className="
                  w-full
                  border
                  border-gray-300
                  dark:border-gray-600
                  bg-white
                  dark:bg-gray-700
                  dark:text-white
                  p-4
                  rounded-lg
                "
                required
              />

            </div>

            {/* CONTENT */}
            <div>

              <label
                className="
                  block
                  mb-2
                  font-semibold
                  dark:text-white
                "
              >

                Content

              </label>

              <textarea
                name="content"
                value={
                  formData.content
                }
                onChange={
                  handleChange
                }
                rows="6"
                placeholder="Write campaign post..."
                className="
                  w-full
                  border
                  border-gray-300
                  dark:border-gray-600
                  bg-white
                  dark:bg-gray-700
                  dark:text-white
                  p-4
                  rounded-lg
                "
                required
              />

            </div>

            {/* IMAGE */}
            <div>

              <label
                className="
                  block
                  mb-2
                  font-semibold
                  dark:text-white
                "
              >

                Upload Image

              </label>

              <input
                type="file"
                accept="image/*"
                onChange={
                  handleImageChange
                }
                className="
                  w-full
                  border
                  border-gray-300
                  dark:border-gray-600
                  bg-white
                  dark:bg-gray-700
                  dark:text-white
                  p-4
                  rounded-lg
                "
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-primary
                hover:bg-primaryDark
                text-white
                py-4
                rounded-xl
                font-bold
                transition
              "
            >

              {
                loading
                  ? "Uploading..."
                  : "Create Post"
              }

            </button>

          </form>

        </div>

      </section>

      {/* POSTS */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-6
          pb-20
        "
      >

        <h2
          className="
            text-4xl
            font-extrabold
            mb-10
            dark:text-white
          "
        >

          All Posts

        </h2>

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {
            posts.map(
              (post) => (

                <div
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

                  <div
                    className="
                      p-6
                    "
                  >

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
                        mb-6
                      "
                    >

                      {
                        post.content.slice(
                          0,
                          120
                        )
                      }...

                    </p>

                    <button
                      onClick={() =>
                        deletePost(
                          post._id
                        )
                      }
                      className="
                        w-full
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        py-3
                        rounded-xl
                        font-semibold
                      "
                    >

                      Delete Post

                    </button>

                  </div>

                </div>

              )
            )
          }

        </div>

      </section>

    </div>
</>
</div>
  );
}