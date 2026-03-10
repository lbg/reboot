import React from 'react';
import PriceV1Data from '../../jsonData/price/PriceV1Data.json'
import SinglePriceV1 from './SinglePriceV1';
import { HashLink as Link } from 'react-router-hash-link'
import SingleTestimonialV1 from '../testimonial/SingleTestimonialV1';

const PriceV1 = () => {
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
                                <h2>We want to hear your thoughts ​</h2>
                                <div className="text" style={{ paddingBottom: '10px' }}>
                                Thank you for joining us at Reboot Bristol 2026. We want to hear about your experience of the day. Please take a few minutes to share your honest thoughts with us. 
                                </div>
                                <div>
                                <div className="btn-box" style={{paddingBottom: '20px', alignSelf: 'center', position: 'relative', left: '42%'}}><Link to="https://forms.office.com/e/pdffrPke8Q " className="theme-btn btn-style-three"><span className="btn-title">Give Feedback</span></Link></div>
                                </div>
                             
    <h2>Using Reboot as a force for good – Supporting Crisis</h2>
    <div className='column' style={{ display: 'flex', flexDirection: 'column' }}>
    <div className="text" style={{ paddingBottom: '10px' }}>
        Whilst Reboot’s focus is on tech, we know that people are the most important part of any organisation. We also know that it’s important to support the most vulnerable in society, which is where LBG’s partnership with Crisis comes in.​
    </div>
    <div className="text" style={{ paddingBottom: '10px' }}>
        Anthony Francis is taking part in the Hackney Half Marathon on Sunday 17 May 2026.  
    </div>
    <div className='row' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingTop:'20px' }}>
        <div style={{ flex: '1 1 50%' }}>
            <SingleTestimonialV1 testimonial={{icon: "../reboot/images/afCrisis.jpg", text : "\"Living in such a large city I see the reality of homelessness all the time, it’s shocking. I believe that we are all just a couple of mistakes away from homelessness and therefore we should all try and prevent it – nobody should be without a home filled with love.​ I’m hoping to show everyone that we can all make a difference by raising awareness and funds, we can all end homelessness if we work together and push ourselves.\"", name: "Antony Francis" }}/>
        </div>
        <div style={{ flex: '1 1 0%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src='/reboot/images/afCrisis.jpg' alt="testimonial icon" style={{ height: '200px', maxWidth: '100%' }}/>
        </div>
    </div>
    <div className="text" style={{ paddingBottom: '10px' }}>
        Please help Anthony to end the crisis of homelessness by donating whatever you can. ​
    </div>
    <div>
    <div className="btn-box-two" style={{paddingBottom: '20px', alignSelf: 'center', position: 'relative', left: '45%' }}><Link to="https://www.justgiving.com/page/anthony-francis-7?utm_medium=FR&utm_source=CL&utm_campaign=020" className="theme-btn btn-style-three"
    target="_blank"
    rel="noopener noreferrer">
    <span className="btn-title">Donate</span></Link></div>
    </div>
                                
</div>

                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PriceV1;