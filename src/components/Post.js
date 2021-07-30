import React from "react";

const Post = ({ post, setPost }) => {
  const { id, title, image, excerpt } = post;

  return (
    <div className="card" key={id}>
      <img className="small" src={image} alt={title} />
      <h2 className="title">{title}</h2>
      <p className="description">{excerpt}</p>
      <button onClick={() => setPost(post)} className="btn">
        Show Detail
      </button>
    </div>
  );
};
export default Post;
