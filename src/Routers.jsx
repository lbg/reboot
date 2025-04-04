import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home1 from './pages/homePages/Home1';
import AboutUs from './pages/innerPages/AboutUs';
import Pricing from './pages/innerPages/Pricing';
import Faq from './pages/innerPages/Faq';
import Gallery from './pages/innerPages/Gallery';
import ComingSoon from './pages/innerPages/ComingSoon';
import Speakers from './pages/innerPages/Speakers';
import SpeakersDetail from './pages/innerPages/SpeakersDetail';
import Schedule from './pages/innerPages/Schedule';
import EventDetails from './pages/innerPages/EventDetails';
import BuyTicket from './pages/innerPages/BuyTicket';
import BlogSidebar from './pages/innerPages/BlogSidebar';
import BlogGrid from './pages/innerPages/BlogGrid';
import BlogSingle from './pages/innerPages/BlogSingle';
import Login from './pages/innerPages/Login';
import Contact from './pages/innerPages/Contact';
import ErrorPage from './pages/innerPages/ErrorPage';
import CodeOfConduct from './components/event/CodeOfConduct';
import CodeOfConductPage from './pages/innerPages/CodeOfConduct';

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home1 />}></Route>
                <Route path='/about-us' element={<AboutUs />}></Route>
                <Route path='/good-to-know' element={<Faq />}></Route>
                <Route path='/schedule' element={<Schedule />}></Route>
                <Route path='/hackathon-details' element={<EventDetails />}></Route>
                <Route path='/code-of-conduct' element={<CodeOfConductPage/>}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </>
    );
};

export default Routers;