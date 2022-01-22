import React  from 'react'
import './components/index.css'
import Profile from './components/Profile/Profile'
import './components/index.css'
import About from './components/About/About'
import Ideology from './components/Ideology/Ideology'
import Faq from './components/Faq/Faq'
import ContactForm from './components/ContactForm/ContactForm'
import Events from './components/Events/Events'
import {Typography} from '@material-ui/core'
// import MainSection from './components/MainSection/MainSection'
import OurCoordinator from './components/OurCoordinator/OurCoordinator'
import Social from './components/Social/Social'
import ImageCarousel from './components/ImageCarousel/ImageCarousel'

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';


// Nav
// import Nav from './components/Nav/Nav'
import faqData from './components/Faq/faqData'
import techData from './components/Profile/TechData'
import markData from './components/Profile/MarketData'

// time line
import Timeline from './components/Timeline/Timeline'
import Footer from './components/Footer/Footer'
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'
import MainPage from './components/MainPage/MainPage'
import Navigation from './components/Navigation/Navigation'
// import SocialMedia from './components/SocialMedia/SocialMedia'
import MorePageNav from './components/MorePageNav/MorePageNav'
import NewsLetter from './components/NewsLetter/NewsLetter'
// import EventsNew from './components/EventsNew/EventsNew'
// import TimeLineComp from './components/TimeLineComp/TimeLineComp'
// import UEvents from './components/UEvents/UEvents'
// import DataTime from './components/UEvents/DataTime'
// import TimeLineComp from './components/TimeLineComp/TimeLineComp'
{/* <TimeLineComp />, */}

const upcomingEvent1 = {
        id: 1, 
        title: "Event Name 1",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde porro culpa perspiciatis aliquam quidem ab, incidunt vitae eligendi illo similique exercitationem corrupti ad sunt. Laborum dolor officia aspernatur ratione perspiciatis consectetur similique optio minima accusamus, enim delectus corporis ullam obcaecati omnis a quisquam labore. Fugiat impedit a facere labore deleniti!",
        image1: "https://images.unsplash.com/photo-1639760694089-d10de9ef9d5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        image2: "https://images.unsplash.com/photo-1641611605871-ae20d4514b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        date: 12,
        hours: 40, 
        minutes: 0,
        seconds: 5
    }

    const upcomingEvent2 = {
        id: 2, 
        title: "Event Name 2",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde porro culpa perspiciatis aliquam quidem ab, incidunt vitae eligendi illo similique exercitationem corrupti ad sunt. Laborum dolor officia aspernatur ratione perspiciatis consectetur similique optio minima accusamus, enim delectus corporis ullam obcaecati omnis a quisquam labore. Fugiat impedit a facere labore deleniti!",
        image1: "https://images.unsplash.com/photo-1641573851537-da4342deddec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        image2: "https://images.unsplash.com/photo-1641664664882-419aadf0b1cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        date: 9,
        hours: 22, 
        minutes: 19,
        seconds: 10
    }

    const upcomingEvent3 = {
        id: 3, 
        title: "Event Name 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde porro culpa perspiciatis aliquam quidem ab, incidunt vitae eligendi illo similique exercitationem corrupti ad sunt. Laborum dolor officia aspernatur ratione perspiciatis consectetur similique optio minima accusamus, enim delectus corporis ullam obcaecati omnis a quisquam labore. Fugiat impedit a facere labore deleniti!",
        image1: "https://images.unsplash.com/photo-1641719516709-882d5ed5f66e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        image2: "https://images.unsplash.com/photo-1641621393945-881745ee9978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        date: 23,
        hours: 24, 
        minutes: 0,
        seconds: 0
    }


const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                <Route path="/" element={[<Navigation />,<MainPage />, <ImageCarousel />, <About />, <OurCoordinator />, <Ideology />,
                <div className="title" id="events"><Typography variant="h2">Events</Typography>
                <div className="underline"></div>
            </div>,
                <Events />, 
                // <EventsNew />,
                <div className="title" id="profile"><Typography variant="h2">Our Crew</Typography>
                    <div className="underline"></div>
                    <Typography variant="h6" className="tag">Click on the profile for more info</Typography>
                </div>, 
            <Profile data={techData} title={'Technical Department'} />,<Profile data={markData} title={'Marketing Department'}/>,<Social /> , <Footer />]} />
            {/* more */}
                    <Route path='/more' element={[<MorePageNav />, <NewsLetter />, <Timeline  />,
                    <div className="title" id="upcomingEvents"><h1 className="upcomingheadingTitle">Upcoming Events</h1>
                        <div className="underline"></div>
                    </div>,
                    <UpcomingEvents upcomingEvent = {upcomingEvent1} />,
                    <UpcomingEvents upcomingEvent = {upcomingEvent2} />,
                    <UpcomingEvents upcomingEvent = {upcomingEvent3} />,
                    <Faq faq={faqData}/>, <ContactForm />, <Footer />]} />
                </Routes>
            </Router>
        </div>

    )
}

export default App

// onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}

// https://dev.to/germavinsmoke/how-to-create-a-page-load-animated-loader-in-react-3cen