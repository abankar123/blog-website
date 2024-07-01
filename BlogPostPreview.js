import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostPreview = ({ post }) => (
  <div className="blog-post-preview">
    <img src={post.image} alt={post.title} />
    <h2>{post.title}</h2>
    <p>By {post.author}</p>
    <p>{post.contentSnippet}</p>
    <Link to={`/post/${post.id}`}>Read more</Link>
  </div>
);

export default BlogPostPreview;
