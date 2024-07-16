import React, { useState } from 'react';
import PostList from './PostList';
import './App.css';

const PostForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPost] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({title, content});

        setTitle('');
        setContent('');
    };

    //Unexpected token...????
    return (
    <div>
    <form onSubmit = {handleSubmit}>
    <div>
        <label>Title:</label>
        <input type = "text" value = {title} onChange={(e) => setTitle(e.target.value)} />
    </div>
    <div>
        <label>Content: </label>
        <textarea value = {content} onChange = {(e) => setContent(e.target.value)}> </textarea>
    </div>
    <button type = "submit">Add Post </button>
    </form>
    <PostList posts={posts} />
    </div>
    );
};

export default PostForm;
