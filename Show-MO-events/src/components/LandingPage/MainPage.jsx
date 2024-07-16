import Navbar from './Navbar';
import LoginForm from './LoginForm';
import SlideShow from './SlideShow';


const MainPage = () => {
    return (
        <div>
            <Navbar />
            <LoginForm />
            <SlideShow />
            <AboutMe />
        </div>
    );
}

export default MainPage;
