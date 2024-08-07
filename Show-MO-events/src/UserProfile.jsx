//UserProfile.jsx
import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
    display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	background-color: #f0f2f5;
	min-height: 100vh;
	`;
	
const ProfileHeader = styled.div`
    display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
`;

const Avatar = styled.img`
    width: 100px;
	height: 100px;
	border-radius: 50%;
	margin-bottom: 10px;
`;

const Username = styled.h1`
    font-size: 24px;
	color: #333;
`;

const Bio = styled.p`
    font-size: 16px;
	color: #666;
	text-align: center;
	max-width: 600px;
`;

const PostsContainer = styled.div`
    width: 100%;
	max-width: 800px;
`;

const Post = styled.div`
    background-color: #fff;
	border-radius: 8px;
	padding: 15px;
	margin-bottom: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h2`
    font-size: 20px;
	color: #333;
	margin-bottom: 10px;
`;

const PostContent = styled.p`
    font-size: 16px;
	color: #666;
`;

const UserProfile = ({ user, posts }) => {
    return (
	    <ProfileContainer>
		    <ProfileHeader>
			<Avatar src={user.avatar} alt="User Avatar" />
			
			<Username>{user.username}</Username>
			<Bio>{user.bio}></Bio>
			</ProfileHeader>
			
			<PostsContainer>
			{posts.map((post) => (
			    <Post key = {post.id}>
				<PostTitle>{post.title}</PostTitle>
				<PostContent>{post.content}</PostContent>
				</Post>
			))}
			</PostsContainer>
			</ProfileContainer>
		);
	};
	
export default UserProfile;