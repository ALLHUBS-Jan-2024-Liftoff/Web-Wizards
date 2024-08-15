//Comments.jsx
import React, { useState, useEffect } from 'react';

const Comments = ({ userId, postId }) => {
    const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState('');
	
	useEffect(() => {
	    //fetchComments();
		//Fetch comments for the Post...
		fetch(`http://localhost:8080/comments/${postId}`)
		.then(response => response.json())
		.then(data => {
			if(Array.isArray(data)) {
				
			    setComments(data);
			}
			else {
				setComments([]);
			}
		})
		.catch(error => {
			console.error('There was an error fetching the comments!', error);
			setComments([]);
		});
	}, [postId]);
	
	const fetchComments = async() => {
	    try
		{
		    const response = await fetch(`http://localhost:8080/comments/${postId}`);
			
			const data = await response.json();
			
			setComments(data);
			}
		catch(error)
		{
			console.error('There was an error fetching comments:', error);
		}
	};
		
	const handleAddComment = async(postId, userId, newComment) => {
		try
		{
			if(newComment.trim() === '') return;
			
			const response = await fetch(`http://localhost:8080/comments/${postId}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ 
				    postId: postId,
					userId: userId || 'guest',
				    text: newComment ,
					createdAt: new Date().toISOString(), //Current date...
				}),
			});
			
			if(!response.ok)
			{
				throw new Error('Failed to add comment...');
			}
			
			const data = await response.json();
			console.log('Comment added successfully: ', data);
		}
		catch(error)
		{
			console.error('Error adding comment: ', error);
		}
	};
				
return (
<div>
	<h3>Comments</h3>
	<ul>
	{comments.map(comment => (
	    <li key={comment.id}>{comment.content}</li>
	))}
	</ul>
	<div>
	<input
		type="text"
		value={newComment}
		onChange={e => setNewComment(e.target.value)}
		placeholder="Add a comment"
		/>
	<button onClick={() => handleAddComment(postId, userId, newComment)}>Add Comment</button>
	</div>
</div>
);
};
				
export default Comments;