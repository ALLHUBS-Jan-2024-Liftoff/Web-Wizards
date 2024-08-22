// src/App.jsx
import React, { useEffect, useState } from 'react';
import PostForm from './PostForm';
import SearchProfile from './SearchProfile';
import LoginForm from './components/loginForm/LoginForm';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import PasswordResetForm from './components/passwordReset/PasswordResetForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import CreateEvent from './pages/EventManager';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import UserProfile from './UserProfile';

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
			console.error('There was an error deleting the post!', error);
		}		
	};

	const addPost = (post) => {
	    setPosts([post, ...posts]);
	};
	
	return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="my-profile" element = { < UserProfile />} />
		  <Route path="create-post" element={<PostForm />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="forgot-password" element={<PasswordResetForm />} />
		  <Route path="search" element={<SearchProfile /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );

};

export default App;