import Navbar from './Navbar';
import LoginForm from './LoginForm';
import SlideShow from './SlideShow';
import AboutMe from './AboutMe';

const MainPage = () => {
    return (
        <div>
            <Navbar />
            <LoginForm />  <AboutMe />
            <SlideShow />
           
        </div>
    );
}

export default MainPage;
