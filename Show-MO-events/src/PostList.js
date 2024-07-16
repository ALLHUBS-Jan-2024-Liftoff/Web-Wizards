import React from 'react';

const PostList = ({ posts }) => {
return (
    <div>
    {posts.map((post,index) => (
    <div key={index} className="post">
    <div className = "post-title">{post.title}</div>
    <div className = "post-content">{post.content} </div>
    </div>
    ))}
    </div>
);
};

export default PostList;
