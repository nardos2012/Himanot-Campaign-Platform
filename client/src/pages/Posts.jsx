import { useEffect, useState } from "react";
import API from "../api";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    const fetchPosts = async () => {
      try {
        const { data } = await API.get("/posts");

        if (!active) return;

        setPosts(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        console.error("Failed to load posts:", err);

        if (active) {
          setError("Failed to load posts");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      active = false;
    };
  }, []);

  if (loading) return <p>Loading posts...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <div>
      <h2>Campaign News Feed</h2>

      {posts.map((post) => {
        const {
          _id = Math.random(),
          title = "Untitled",
          content = "",
          createdBy = {},
        } = post || {};

        const name = createdBy.name || "Unknown";
        const role = createdBy.role || "user";

        return (
          <div
            key={_id}
            style={{
              border: "1px solid #ccc",
              margin: 10,
              padding: 10,
            }}
          >
            <h3>{title}</h3>
            <p>{content}</p>

            <small>
              By {name} ({role})
            </small>
          </div>
        );
      })}
    </div>
  );
}