//SearchProfile.jsx
import React, { useState } from 'react';
import './SearchProfile.css';

const posts = [
{ id: 1, title: 'First Post', content: 'This is the first post content' },
{ id: 2, title: 'Second Post', content: 'This is the second post content' },
{ id: 3, title: 'Third Post', content: 'This is the third post content' },
];

const SearchProfile = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredPosts, setFilteredPosts] = useState(posts);
	
	const handleSearch = (e) => {
		const value = e.target.value;
		setSearchTerm(value);
		const filtered = posts.filter(post => 
		post.title.toLowerCase().includes(value.toLowerCase())
		);
	};
	
	return (
	<div className = "search-profile">
	<h1>Search Your Posts</h1>
	<input type="text"
	       placeholder="Search by title..."
		   value = {searchTerm}
		   onChange = {handleSearch}
		   className = "search-input"
		   />
	<div className = "posts-list">
	{filteredPosts.map(post => (
	    <div key ={post.id} className = "post-item">
		<h2>{post.title}</h2>
		<p>{post.content}</p>
		</div>
	))}
	</div>
	</div>
	);
};
export default SearchProfile;