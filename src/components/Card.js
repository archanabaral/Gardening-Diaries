import React, { useEffect, useState } from "react";
import DetailedPost from "./DetailedPost";
import Post from "./Post";

const Card = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState();

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        {post ? (
          <DetailedPost post={post} setPost={setPost} />
        ) : (
          posts.map((post) => (
            <Post key={post.id} post={post} setPost={setPost} />
          ))
        )}
      </div>
    </>
  );
};
export default Card;
