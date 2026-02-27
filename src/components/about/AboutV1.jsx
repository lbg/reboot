import React from 'react';
import AboutV1Data from '../../jsonData/about/AboutV1Data.json'
import { HashLink as Link } from 'react-router-hash-link'
import ReactWOW from 'react-wow';
import ReactMarkdown from "react-markdown";

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
                                <h2>Welcome to Reboot Bristol 2026</h2>
                                <div className="text">Today's event is a standout moment in your 2026 learning calendar.  We've packed the programme with insightful tech talks, hands-on workshops and new for this year - we're bringing you Quick Hacks.  You'll also have the chance to connect with teams from across the Group at our exhibition stalls, offering plenty of inspiration to explore, question and learn.  Alongside this, 18 teams are competing in our first ever Hackathon hosted on LBG devices using our strategic tooling.

                                </div>

                                <h2>Reboot Bristol 2026 Focus: </h2>
                                <div className="text" style={{ paddingBottom: '10px' }}>
                                    The focus for Reboot Bristol 2026 is <b>Skills colleagues need now and for the future</b>, with a strong emphasis on <b>digital assets and AI.</b> <br />
                                    The <b>Hackathon</b> is designed to <b>upskill colleagues</b> in agentic AI, giving them practical, hands‑on experience with the tools that will <b>shape our future ways of working.</b><br />
                                    Dive in, get hands‑on, and have a great time exploring what’s next.
                                    <div className="text" style={{ paddingBottom: '5px' }}>
                                        <b>Changing Together<br />
                                            #EngineertheFuture</b>
                                    </div>
                                </div>
                            </div>
                            <h4>Key Times</h4>
                            <div className="key-times-container">
                                {AboutV1Data.map((group, index) => (
                                    <div className="key-time-group" key={index}>
                                        <h5>
                                            <ReactMarkdown>{group.header}</ReactMarkdown>
                                            </h5> 
                                        <ul className="key-times-list">
                                            {group.listData.map((item) => (
                                                <li key={item.id}>{item.text}</li> 
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* <div className="btn-box"><Link to="/contact#" className="theme-btn btn-style-three"><span className="btn-title">Register Now</span></Link></div> */}
                        </div>

                        {/* <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="image-box">
                                <ReactWOW >
                                    <figure className="image"><img src="../images/resource/about-img-1.jpg" alt="image" /></figure>
                                </ReactWOW>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutV1;