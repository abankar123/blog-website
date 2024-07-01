import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPostPreview from './BlogPostPreview';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home">
      {posts.map(post => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
