import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home1 from './pages/homePages/Home1';
import AboutUs from './pages/innerPages/AboutUs';
import Faq from './pages/innerPages/Faq';
import Schedule from './pages/innerPages/Schedule';
import EventDetails from './pages/innerPages/EventDetails';
import ErrorPage from './pages/innerPages/ErrorPage';
import Map from './pages/innerPages/Map'
import CodeOfConductPage from './pages/innerPages/CodeOfConduct';
import Brochure from './pages/innerPages/Brochure';

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/reboot' element={<Home1 />}></Route>
                <Route path='/reboot/about-us' element={<AboutUs />}></Route>
                <Route path='/reboot/good-to-know' element={<Faq />}></Route>
                <Route path='/reboot/schedule' element={<Schedule />}></Route>
                <Route path='/reboot/hackathon-details' element={<EventDetails />}></Route>
                <Route path='/reboot/code-of-conduct' element={<CodeOfConductPage/>}></Route>
                <Route path='/reboot/map' element={<Map/>}></Route>
                <Route path='/reboot/brochure' element={<Brochure/>}></Route>
                <Route path='/reboot/*' element={<ErrorPage />}></Route>
            </Routes>
        </>
    );
};

export default Routers;
