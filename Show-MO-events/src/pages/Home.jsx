import React from 'react';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px'
  };

  const titleStyle = {
    fontSize: '2em',
    margin: '0'
  };

  const subtitleStyle = {
    fontSize: '1.2em',
    marginTop: '10px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to ShowMOEvents!</h1>
      <p style={subtitleStyle}>Your local go-to app!</p>
      <ImageSlider />
      <p>
<h1>Discover, Connect, and Share with ShowMOEvents!</h1>

Explore local events and connect with people in Missouri through ShowMOEvents. Post your own events, discover exciting gatherings, and engage with your community effortlessly. Join us and make the most of your local scene!

</p>
    </div>
  );
};

export default Home;
