import React, { useState } from 'react';
import PostList from './PostList';
import './App.css';

const PostForm = ({ addPost}) => {
    const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [posts, setPost] = useState([]);
	
	const handleSubmit = async (e) => {
	    e.preventDefault();
		const response = await fetch('http://localhost:8080/api/posts/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title, content }),
		});
		if (response.ok)
		{
			console.log('Post created successfully.');
		}
		else
		{
			console.log('Failed to create post.');
		}
	};
	
	return (
	<div>
	<form onSubmit = {handleSubmit}>
	<div>
	    <label>Title: </label>
		<input type = "text" value = {title} onChange = {(e) => setTitle(e.target.value)} />
	</div>
	<div>
	    <label>Content: </label>
		<textarea value = {content} onChange = {(e) => setContent(e.target.value)}> </textarea>
	</div>
	<button type = "submit"> Add Post </button>
	</form>
	<PostList posts={posts} />
	</div>
	);
};
	
export default PostForm;