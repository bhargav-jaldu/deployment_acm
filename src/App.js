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
import faqData from './components/Faq/faqData'
// import techData from './components/Profile/TechData'
// import markData from './components/Profile/MarketData'
import admin from './components/Profile/Admin'
import lead from './components/Profile/lead'
import developedBy from './components/Profile/developedBy'
import managingBy from './components/Profile/managingBy'

// time line
import Timeline from './components/Timeline/Timeline'
import Footer from './components/Footer/Footer'
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents'
import MainPage from './components/MainPage/MainPage'
import Navigation from './components/Navigation/Navigation'
import MorePageNav from './components/MorePageNav/MorePageNav'
import NewsLetter from './components/NewsLetter/NewsLetter'


// upcoming events links
import eventOneImageOne from './components/UpcomingEventsImages/eventOneImageOne.jpg'
import eventTwoImageTwo from './components/UpcomingEventsImages/eventTwoImageTwo.jpg'

const upcomingEvent1 = {
        id: 1, 
        title: "ACM TECH TALKS",
        description: "Are you planning to do any internships..? Are internships mandatory for engineering students....? How to build a good resume..? Is internship Certificate is mandatory for future job opportunities..? Soo many doubts!! But nobody to clarify them!! Worry not!! Get to learn about all these topics in our ACM_TechTalk series-3 and take a step ahead towards bulding a career you always dreamt of✨",
        image1: eventOneImageOne,
        image2: eventTwoImageTwo,
        registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdVjAW4AjZvPjmdzF_LGzyu17BUhBvnMncO5cee4cIC2poarw/viewform',
        date: 12,
        hours: 40, 
        minutes: 0,
        seconds: 5
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
            // <Profile data={techData} title={'Technical Department'} />,
            // <Profile data={markData} title={'Marketing Department'}/>, 
            <Profile data={admin} title={'Admins'} />,
            <Profile data={lead} title={'Leads'} />,
            <Profile data={developedBy} title={'Developed By'} />,
            <Profile data={managingBy} title={'Managing By'} />,
            <Social /> , <Footer />]} />
            {/* more */}
                    <Route path='/more' element={[<MorePageNav />, <NewsLetter />, <Timeline  />,
                    <div className="title" id="upcomingEvents"><h1 className="upcomingheadingTitle">Upcoming Events</h1>
                        <div className="underline"></div>
                    </div>,
                    <UpcomingEvents upcomingEvent = {upcomingEvent1} />,
                    // <UpcomingEvents upcomingEvent = {upcomingEvent2} />,
                    // <UpcomingEvents upcomingEvent = {upcomingEvent3} />,
                    <Faq faq={faqData}/>, <ContactForm />, <Footer />]} />
                </Routes>
            </Router>
        </div>

    )
}

export default App

// onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}

// https://dev.to/germavinsmoke/how-to-create-a-page-load-animated-loader-in-react-3cen