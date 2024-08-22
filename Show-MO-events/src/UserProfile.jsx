import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    
    // State to hold profile data
    const [profile, setProfile] = useState({
        name: '',
        bio: '',
        avatarUrl: ''
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate saving profile data to the server or local storage here
        alert('Profile saved!');
    };

    // Navigate to the Create Post page
    const handleCreatePostClick = () => {
        navigate('/create-post');
    };

    // Navigate to the Create Event page
    const handleCreateEventClick = () => {
        navigate('/event-manager');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Profile Form */}
            <div style={{ flex: 1, padding: '20px', maxWidth: '500px' }}>
                <h2>Create Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={profile.name} 
                            onChange={handleChange} 
                            style={{ width: '100%', padding: '8px' }}
                            required 
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="bio">Bio:</label>
                        <textarea 
                            id="bio" 
                            name="bio" 
                            value={profile.bio} 
                            onChange={handleChange} 
                            style={{ width: '100%', padding: '8px' }}
                            required 
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="avatarUrl">Avatar URL:</label>
                        <input 
                            type="text" 
                            id="avatarUrl" 
                            name="avatarUrl" 
                            value={profile.avatarUrl} 
                            onChange={handleChange} 
                            style={{ width: '100%', padding: '8px' }}
                        />
                    </div>
                    <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Save Profile</button>
                </form>
            </div>

            {/* Profile Display */}
            <div style={{ flex: 1, padding: '20px', maxWidth: '500px' }}>
                <h2>My Profile</h2>
                <div style={{ textAlign: 'center' }}>
                    <img 
                        src={profile.avatarUrl || 'default_avatar_url'} 
                        alt="Avatar" 
                        style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '20px' }} 
                    />
                    <h3>{profile.name || 'User Name'}</h3>
                    <p>{profile.bio || 'User bio goes here...'}</p>
                    <button 
                        onClick={handleCreatePostClick} 
                        style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px', cursor: 'pointer' }}
                    >
                        Create Post
                    </button>
                    <button 
                        onClick={handleCreateEventClick} 
                        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                    >
                        Create Event
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
