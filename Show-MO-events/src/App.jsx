import React, { useEffect, useState } from 'react';
//import Routes from './Routes';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PostForm from './PostForm';
import UserProfile from './UserProfile';
import SearchProfile from './SearchProfile';

import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import CreateEvent from './pages/CreateEvent';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LoginForm from './components/loginForm/LoginForm';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import PasswordResetForm from './components/passwordReset/PasswordResetForm';

const user = {
	avatar:'https://via.placeholder.com/100',
	username: 'John Doe',
	bio: 'This is a short bio about the user.',
};

function App () {
    const [posts, setPosts] = useState([]);
	const [showComments, setShowComments] = useState([]);

	const handleToggleComments = postId => {
		setShowComments(prevState => ({
			...prevState,
			[postId]: !prevState[postId] || false,
		}));
	};

	useEffect(() => {
		const fetchPosts = async() => {
			try
			{
				const response = await fetch('http://localhost:8080/api/posts');

				if(response.ok)
				{
					const data = await response.json();
					setPosts(data);
				}
				else
				{
					console.error('Failed to fetch posts!');
				}
			}
			catch(error)
			{
				console.error('There was an error fetching the posts!', error);
			}	
		};

		fetchPosts();
	}, []);

	const handleEdit = async(post) => {
		//Handle the edit functionality...
		const updatedPost = {title: 'Updated Title', content: 'Updated Content'};

		try
		{
			const response = await fetch(`/api/posts/${post.id}`, {
				method: 'PUT', //Use PUT or PATCH for updating...
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedPost),
			});

			if(response.ok)
			{
				//Handle success response...
				const updatedData = await response.json();

				//Assuming we have a state variable called posts...
				setPosts((prevPosts) => prevPosts.map((p) => (p.id === post.id ? updatedData : p))
				);

				console.log('Post updated successfully!');

			}
			else
			{
				console.error('Failed to update the post!');
			}
		}
		catch(error)
		{
			console.error('There was an error updating the post!', error);
		}	
	};

	const handleDelete = async(id) => {
		//setPosts(posts.filter(post => post.id !=== id));
		try
		{
			const response = await fetch(`/api/posts/${id}`, {
				method: 'DELETE',
			});
			if(response.ok)
			{
				//Handle success response...
				setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
				console.log('Post deleted successfully!');
			}
			else
			{
				console.error('Failed to delete the post!');
			}
		}
		catch(error)
		{
			console.error('There was an error ddeleting the post!', error);
		}		
	};

	const addPost = (post) => {
	    setPosts([post, ...posts]);
	};

	return (
	<Router>
	<div>
	<nav>
	<ul>
	<li>
	<Link to="/create">Create Post</Link>
	</li>
	<li>
	<Link to="/profile">User Profile</Link>
	</li>
	<li>
	<Link to="/search">Search Posts</Link>
	</li>
	<li>
	<Link to="/login">Log in</Link>
	</li>
	<li>
	<Link to="/register">Register</Link>
	</li>
	</ul>
	</nav>
	    <Routes>
		<Route path="/create" element={<PostForm /> } />
		<Route path="/profile" element={<UserProfile /> } />
		<Route path="/search" element={<SearchProfile /> } />
		<Route path="home" element={<Home />} />
		
	  <Route path="create-post" element={<CreatePost />} />
	  <Route path="create-event" element={<CreateEvent />} />
	  <Route path="about-us" element={<AboutUs />} />
	  <Route path="contact-us" element={<ContactUs />} />
	  <Route path="/login" element={<LoginForm />} />
	  <Route path="/register" element={<RegistrationForm />} />
	  <Route path="/forgot-password" element={<PasswordResetForm />} />
		</Routes>
	</div>
	</Router>
	);

    const PostList = ({ posts }) => {
	    return (
		<div>
		{posts.map((post,index) => (
		    <div key = {index}>
			<h2> {post.title} </h2>
			<p> {post.content} </p>
			<button onClick = {() => onEdit(post)}>Edit</button>
		    <button onClick = {() => handleDelete(post.id)}>Delete</button>
			<button onClick = {() => handleToggleComments(post.id)}>Show Comments</button>
			</div>
		))}
		</div>
		);
    };
};

export default App;