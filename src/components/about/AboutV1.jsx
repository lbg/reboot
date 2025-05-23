import React from 'react';
import AboutV1Data from '../../jsonData/about/AboutV1Data.json'
import { HashLink as Link } from 'react-router-hash-link'
import ReactWOW from 'react-wow';

const AboutV1 = () => {
    return (
        <>
            <section className="about-section">
                <div className="anim-icons full-width">
                    {/* <span className="icon icon-circle-blue"></span>
                    <ReactWOW animation='fadeInLeft'>
                        <span className="icon icon-dots"></span>
                    </ReactWOW>
                    <ReactWOW animation='zoomIn'>
                        <span className="icon icon-circle-1"></span>
                    </ReactWOW> */}
                </div>
                <div className="auto-container">
                    <div className="row">
                            <div className="inner-column">
                                <div className="sec-title">
                                    {/* <span className="title">ABOUT EVENT</span> */}
                                    <h2>Welcome to Reboot Local: Manchester 2025</h2>
                                    <div className="text" style={{paddingBottom:'10px'}}>We're thrilled to have you join us for todays event.  Get ready for an exciting tech adventure with CTO Skills & Community's Reboot Local: Manchester.</div>
                                    <div className="text">This event is a perfect opportunity to connect with the local tech community, collaborate with fellow tech enthusiasts, and learn in a friendly, feel-good environment.</div>

                                    <div className="text" style={{paddingBottom:'10px'}}>Whether you're a coding wizard or just tech-curious, this event has something for everyone! Engage in hands-on experiments, participate in collaborative discussions, and explore learning opportunities in the latest bank tech. We’ll also be hosting a wellbeing room. </div>

                                    <div className="text" style={{paddingBottom:'5px'}}>
                                    <b>CTO Skills & Community Team <br/>
                                    #EngineertheFuture</b>
                                    </div>
                                    </div>
                                </div>
                                <h4>Key Times</h4>
                                <ul className="list-style-one">
                                    {AboutV1Data.map(aboutData =>
                                        <li key={aboutData.id}>{aboutData.listData}</li>
                                    )}
                                </ul>
        
                                </div>
                </div>
            </section>
        </>
    );
};

export default AboutV1;