import React from 'react';
import { useParams } from 'react-router-dom';
import ScheduleV1Data from '../../jsonData/schedule/ScheduleV1Data.json'

const EventDetailsContent = () => {
    // commenting out as this page appears to being used as an overall event info page rather than a single talk page 
    // can uncomment to make it use url params for each event
    // const { parentId, childId } = useParams();

    return (
        <>
            <section className="event-detail">
                <div className="auto-container">
                    {/* <div className="image-box">
                        <figure className="image wow fadeIn"><img src={`/images/resource/${ScheduleV1Data[parentId - 1].tabData[childId - 1].eventThumb}`} alt="" /></figure>
                    </div> */}
                    <div className="content-box">
                        {/* <div className="speaker-info">
                            <figure className="thumb">
                                <img src={`/images/resource/${ScheduleV1Data[parentId - 1].tabData[childId - 1].speakerThumb}`} alt="image" />
                            </figure>
                            <h5 className="name">{ScheduleV1Data[parentId - 1].tabData[childId - 1].name}</h5>
                            <span className="designation">{ScheduleV1Data[parentId - 1].tabData[childId - 1].designation}</span>
                        </div> */}
                        {/* <ul className="upper-info">
                            <li><span className="icon far fa-clock"></span>{ScheduleV1Data[parentId - 1].tabData[childId - 1].sessionStart} - {ScheduleV1Data[parentId - 1].tabData[childId - 1].sessionEnd}</li>
                            <li><span className="icon fa fa-map-marker-alt"></span>Bennelong Point, Sydney NSW 2000, Australia</li>
                        </ul>
                        <h2>{ScheduleV1Data[parentId - 1].tabData[childId - 1].title}</h2> */}
                        <h2>Reboot London 2025</h2>
                        <p>At the heart of Reboot is our Hackathon, where 204 people will compete to design a solution to one of two challenges.​

Competing teams will work together as a team of up to six, and use the latest technology to provide a solution to one of our hack challenges. ​

Teams will be shortlisted and assessed on several criteria, including how well they have addressed the challenges and their use of technology.​</p>
                        <div className="row two-column">
                        <div className="column col-lg-6 col-md-12">
                                <h4>Challenge One</h4>
                                <ul className="list-style-two">
                                    <li><b>Challenge information:</b></li>
                                    <li>Create a solution to help colleagues to become excited customers who want to know and share info about LBG products and services, and can find what suits their needs.</li>
                                    <li><b>Sponsor</b></li>
                                    <li>Nicky Elford, P&P​</li>
                                </ul>
                            </div>
                            <div className="column col-lg-6 col-md-12">
                                <h4>Challenge Two</h4>
                                <ul className="list-style-two">
                                    <li><b>Challenge information:</b></li>
                                    <li>Create a solution to support young adults on their journey to independence as they experience new challenges and anxieties about their future​.</li>
                                    <li><b>Sponsor</b></li>
                                    <li>Rose St Louis, IP&I Protection Platform BPL, and Bea Schofield CTO Innovation.​</li>
                                </ul>
                            </div>
                        </div>
                     </div>
                </div>
            </section>
        </>
    );
};

export default EventDetailsContent;