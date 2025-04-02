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
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    {/* <span className="title">ABOUT EVENT</span> */}
                                    <h2>Welcome to Reboot London 2025</h2>
                                    <div className="text">Thank you for joining us for Reboot London 2025! The Chief Technology Office is thrilled to have you here and extend a warm welcome to all of you. Today's event promises to be a key moment in your 2025 learning calendar. Our action-packed ‘Reboot Experience’ schedule includes informative tech talks, panel discussions, hands-on workshops. interact with a variety of our suppliers, partners, and areas of the Group at exhibition stalls around the event - all providing ideas for you to explore and learn. We also have 204 competitors taking part in our Hackathon, competing for a selection of prizes against two business challenges.
                                    </div>

                                    <h2>Reboot London 2025 Theme: </h2>
                                    <div className="text"> 
                                    The theme for Reboot London 2025 is Modern Tech Skills needed for Now and in the Future at Lloyds. 
                                    So, what are you waiting for? Get ready to immerse yourself in the latest technologies, ignite your creativity, stay curious, learn something new, and most importantly, have some fun. 
                                    <div>
                                    </div>
                                    CTO Skills & Community Team
                                    <div>
                                    </div>
                                     #EngineertheFuture
                                    </div>
                                </div>
                                <ul className="list-style-one">
                                    {AboutV1Data.map(aboutData =>
                                        <li key={aboutData.id}>{aboutData.listData}</li>
                                    )}
                                </ul>
                                {/* <div className="btn-box"><Link to="/contact#" className="theme-btn btn-style-three"><span className="btn-title">Register Now</span></Link></div> */}
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="image-box">
                                <ReactWOW animation='fadeIn'>
                                    <figure className="image"><img src="../images/resource/about-img-1.jpg" alt="image" /></figure>
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutV1;