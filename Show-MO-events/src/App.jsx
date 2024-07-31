// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import CreateEvent from './pages/CreateEvent';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}