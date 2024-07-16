import React, { useState } from 'react';
import PostForm from './PostForm';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div>
        <h1> ShowMOEvents </h1>
        <PostForm addPost = {addPost} />
        <PostList posts = {posts} />
    </div>
  );
};

  const PostList = ({ posts }) => {
    return (
      <div>
      {posts.map((post,index) => (
        <div key = {index}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
      ))}
      </div>
      );
};

export default App;
