//Comments.jsx
import React, { useState, useEffect } from 'react';

const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState('');
	
	useEffect(() => {
	    fetchComments();
	}, [postId]);
	
	const fetchComments = async() => {
	    try
		{
		    const response = await fetch(`/comments/post/${postId}`);
			
			const data = await response.json();
			
			setComments(data);
			}
			catch(error)
			{
			    console.error('There was an error fetching comments:', error);
			}
		};
		
		const handleAddComment = async() => {
		    try
			{
			    const response = await fetch('/comments',
				{
				    method: 'POST',
					headers: {
					    'Content-Type': 'application/json',
					},
					body: JSON.stringify({ postId: postId, text: newComment }),
					});
					const data = await response.json();
					
					setComments([...comments, data]);
					setNewComment('');
					}
					catch(error)
					{
					    console.error('There was an error adding the comment: ', error);
						}
					};
					
					return (
					    <div>
						<h3>Comments</h3>
						<ul>
						{comments.map(comment => (
						    <li key = {comment.id}>{comment.text}</li>
						</ul>
						<input
						    type="text"
							value={newComment}
							onChange={e => setNewComment(e.target.value)}
							placeholder="Add a comment"
							/>
						<button onClick={handleAddComment}>Add Comment</button>
						</div>
					);
				};
				
				export default Comments;