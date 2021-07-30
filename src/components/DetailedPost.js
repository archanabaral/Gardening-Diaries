import React from "react";

const DetailedPost = ({ post, setPost }) => {
  const { id, title, image, description } = post;
  return (
    <div className="detail" key={id}>
      {post && (
        <button className="btn" onClick={() => setPost(null)}>
          Back
        </button>
      )}
      <img className="large" src={image} alt={title} />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};
export default DetailedPost;
