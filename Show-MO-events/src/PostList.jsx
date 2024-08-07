import React, { useEffect, useState } from 'react';
import PostForm from './PostForm';
import EditPostForm from './EditPostForm';

const PostList = ({posts, addPost, updatePost }) => {
	const [postList, setPostList] = useState([]);
	const [currentPost, setCurrentPost] = useState(null);
	const [editTitle, setEditTitle] = useState('');
	const [editContent, setEditContent] = useState('');
	const [isEditing, setIsEditing] = useState(false);

	
	useEffect(() => {
		fetch('http://localhost:8080/api/posts')
		.then(response => response.json())
		.then(data => setPostList(data))
		.catch(error => console.error('Error fetching posts: ', error));
	}, []);
	
	const handleTitleChange = (e) => setEditTitle(e.target.value);
	const handleContentChange = (e) => setEditContent(e.target.value);
	
	const handleEdit = (index) => {
		const postToEdit = postList[index];
		setEditTitle(postToEdit.title);
		setEditContent(postToEdit.content);
		const updatedPosts = postList.map((post, i) =>
		    i === index ? { ...post, title: editTitle, content: editContent, isEditing : true } : post
			);
			
			setPostList(updatedPosts);
	};
	
	const handleEditSubmit = (e, index) => {
		e.preventDefault(); //Prevent the default form submission behavior...
		//Submit logic goes here...
		
		const updatedPosts = postList.map((post, i) =>
		    i === index ? { ...post, title: editTitle, content: editContent, isEditing : false } : post
			);
			
			setPostList(updatedPosts);
			setEditTitle("");
			setEditContent("");
			
			//Get the updated post's ID...
			const postID = postList[index].id;
			
			//Send a PUT request to our backend using fetch API...
			fetch(`http://localhost:8080/api/posts/${postID}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: editTitle,
					content: editContent
				})
			})
			.then(response => response.json())
			.then(data => {
				console.log('Post updated successfully: ', data);
			})
			.catch(error => {
				console.error('Error updating the post: ', error);
			});
	};
	
	
	const handleEditClick = (index) => {
		//Handle the edit functionality...
		setPostList((prevPosts) =>
		    prevPosts.map((post, i) =>
			i === index ? { ...post, isEditing: true } : post
		    )
		);
	};
	
	const handleDelete = async(index) => {
		try
		{
			//Get the updated post's ID...
			const postID = postList[index].id;
			
			const response = await fetch(`http://localhost:8080/api/posts/${postID}`, {
				method: 'DELETE',
			});
		if(response.ok)
		{
			//Filter out the deleted post...
			setPostList(postList.filter(post => post.id !== postID));
		}
		else
		{
			throw new Error('Network response was not OK during deletion of post...');
			console.error('Failed to delete the post!');
		}
		}
		catch(error)
		{
			console.error('There was an error deleting the post!', error);
		}
	};
			
    return (
	    <div>
		{postList.map((post,index) => (
		<div key={index} className="post">
			{post.isEditing ? (
			    <form onSubmit={(e) => handleEditSubmit(e,index)}>
				<input
				type="text"
				value={editTitle}
				onChange={(e) => setEditTitle(e.target.value)}
				/>
				<textarea
				value={editContent}
				onChange={(e) => setEditContent(e.target.value)}
				/>
			<button type="submit">Save</button>
	    </form>
		
		) : (
		<div>
		<h2>{post.title}</h2>
		<p>{post.content}</p>
		<button onClick={() => handleEdit(index)}>Edit</button>
		<button onClick={() => handleDelete(index)}>Delete</button>
		</div>
		)}
		</div>
		))}
		
		</div>
	);
};

export default PostList;