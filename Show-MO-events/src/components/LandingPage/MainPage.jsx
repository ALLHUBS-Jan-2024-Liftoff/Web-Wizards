import Navbar from './Navbar';
import LoginForm from './LoginForm';
import SlideShow from './SlideShow';
import AboutMe from './AboutMe';
import EventForm from './EventForm';
const MainPage = () => {
    return (
        <div>
            <Navbar />
            <LoginForm />  <AboutMe />
            <SlideShow />
            <div className="App">
            <EventForm
                errorMsg=""
                event={{}}
                categories={[]}
                handleSubmit={() => {}}
            />
        </div>
           
        </div>
    );
}

export default MainPage;
