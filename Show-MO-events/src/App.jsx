import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import CreateEvent from './pages/EventManager';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import LoginForm from './components/loginForm/LoginForm';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import ResetPasswordPage from './pages/ResetPasswordPage'; // Corrected component name
import LogOut from './components/logOut/LogOut';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* If you want LandingPage to be the first page */}
        <Route path="/" element={<LandingPage />} /> {/* Update to LandingPage if needed */}

        {/* Layout wraps the other pages */}
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="forgot-password" element={<ResetPasswordPage />} /> {/* Consistent name */}
          <Route path="logout" element={<LogOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
