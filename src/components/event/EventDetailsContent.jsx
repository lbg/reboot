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
                        <h2>Reboot Bristol 2026</h2>
                        <p>
                            <b>This year’s Reboot Bristol Hackathon is taking a bold new step. For the first time, hackers will be building real solutions to live, practical AI use cases directly on LBG laptops, using the bank’s strategic agentic‑AI tooling.</b>​<br /><br />

                        Instead of being allocated a predefined challenge, teams will <b>see & choose their preferred use case on the day,</b> giving everyone the same opportunity for freedom to explore, experiment and follow their curiosity. ​<br /><br />

                        <b>Remember, you do not need to be an engineer to take part.</b> Real development teams thrive on diverse skills, and so does Reboot: designers, product owners, analysts, researchers, content specialists, testers, facilitators and more are all essential. Running the hack on LBG devices (access required - therefore line manager approval required)  means colleagues who aren’t usually close to the technical detail have the opportunity to get up close and personal, <b>understand how AI solutions are built,</b> and meaningfully shape what gets created.<br /><br />

                        This refreshed format keeps the spirit of Reboot’s <b>learning‑through‑doing</b> at its core while opening the door for <b>deeper innovation, richer collaboration and more inclusive problem‑solving across LBG.</b>
​</p>
                        {/*<div className="row two-column">
                        <div className="column col-lg-6 col-md-12">
                                <h4>Challenge One</h4>
                                <ul className="list-style-two">
                                    <li><b>Gamified Loyalty: Turning Engagement into Rewards</b></li>
                                    <li>Design engaging, challenge-based experiences that encourage Lloyds Banking Group customers to take meaningful actions and unlock more value from their relationship with the bank. Using gamification, behavioural insights, and personalisation, create concepts that make loyalty more visible, rewarding, and interactive - helping customers understand, track, and earn rewards through clear goals, progress, and real-time feedback.</li>
                                    <li><b>Sponsor</b></li>
                                    <li>Paul Wilkinson, Rewards and Loyalty Director</li>
                                </ul>
                            </div>
                            <div className="column col-lg-6 col-md-12">
                                <h4>Challenge Two</h4>
                                <ul className="list-style-two">
                                    <li><b>Empowering Retirement Decisions</b></li>
                                    <li>How might we help workplace pensions customers better understand their retirement options and confidently take action, without relying on regulated financial advice? We're looking for innovative, conversational experiences that guide users toward achieving their retirement goals in a clear, engaging, and empowering way.</li>
                                    <br />
                                    <br />
                                    <li><b>Sponsor</b></li>
                                    <li> Derek Shanks, Waterfront Platform Technology Platform Lead</li>
                                </ul>
                            </div>
                        </div>
                        */}
                     </div>
                </div>
            </section>
        </>
    );
};

export default EventDetailsContent;