import { useState } from "react";
import API from "../api";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const create = async () => {
    await API.post("/posts", { title, content });
    alert("Post created");
  };

  return (
    <div>
      <h2>Create Post</h2>

      <input placeholder="title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="content" onChange={(e) => setContent(e.target.value)} />

      <button onClick={create}>Publish</button>
    </div>
  );
}