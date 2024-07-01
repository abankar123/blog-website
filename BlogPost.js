import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://api.example.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="blog-post">
      <img src={post.image} alt={post.title} />
      <h1>{post.title}</h1>
      <p>By <a href={post.authorLinkedIn}>{post.author}</a></p>
      <div>{post.content}</div>
      <div className="social-media-buttons">
        <a href={`https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com/post/${post.id}`} target="_blank" rel="noopener noreferrer">Share on Facebook</a>
        <a href={`https://twitter.com/intent/tweet?url=https://yourwebsite.com/post/${post.id}`} target="_blank" rel="noopener noreferrer">Share on Twitter</a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://yourwebsite.com/post/${post.id}`} target="_blank" rel="noopener noreferrer">Share on LinkedIn</a>
      </div>
    </div>
  );
};

export default BlogPost;
