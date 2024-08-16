//Comments.jsx
import React, { useState, useEffect } from 'react';

const Comments = ({ userId, postId, onCommentAdded }) => {
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
		
	const handleAddComment = async () => {
		const commentData = {
			text: newComment,
			postId: postId,
			userId: userId,
			created_at: new Date().toISOString().split('T')[0] //Format date as YYYY-MM-DD...
		};
		
		//Log the comment data...
		console.log('Comment data to be sent: ', commentData);
		
		try
        {
            const response = await fetch(`http://localhost:8080/comments/${postId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(commentData)
            });

            if(response.ok)
            {
                const data = await response.json();
                //Comment added successfully, update UI as needed...
				console.log('Comment added successfully: ', data);
				onCommentAdded();
            }
            else
            {
                //Handle errors if the request was not successful...
				console.error('Error adding comment: ', response.statusText);
            }
		}
        catch(error)
        {
            console.error('Error adding comment...: ', error);
        }			
	};
	
return (
<div>
	<h3>Comments</h3>
	<ul>
	{comments.map(comment => (
	    <li key={comment.id}>{comment.text}</li>
	))}
	</ul>
	<div>
	<input
		type="text"
		value={newComment}
		onChange={e => setNewComment(e.target.value)}
		placeholder="Add a comment"
		/>
	<button onClick={handleAddComment}>Add Comment</button>
	</div>
</div>
);
};
				
export default Comments;