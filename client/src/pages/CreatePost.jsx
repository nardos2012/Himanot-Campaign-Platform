import { useState } from "react";
import API from "../api";
import {
  Helmet,
} from "react-helmet-async";
export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const create = async () => {
    await API.post("/posts", { title, content });
    alert("Post created");
  };

  return (
    <div className="page-container">
    <>
  <Helmet>

    <title>
      Create Post | GOGOT PARTY
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
      <h2>Create Post</h2>

      <input placeholder="title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="content" onChange={(e) => setContent(e.target.value)} />

      <button onClick={create}>Publish</button>
    </div>
    </>
    </div>
  );
}