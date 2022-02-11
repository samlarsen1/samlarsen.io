import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = ({ id }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(
        `https://api.samlarsen-io.workers.dev/api/posts/${id}`
      );
      const postResp = await resp.json();
      setPost(postResp);
    };

    getPost();
  }, [id]);

  if (!Object.keys(post).length) return <div />;

  return (
    <div>
      <h1>{post.title}</h1>
      <div class="blog-post">
        <p>{post.text}</p>
        <p>
          <em>Published {new Date(post.published_at).toLocaleString()}</em>
        </p>
        <p>
        <a href={post.link}>Details ...</a>
        </p>
      </div>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};

export default Posts;
