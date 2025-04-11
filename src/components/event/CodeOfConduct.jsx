import React from 'react';
import { useParams } from 'react-router-dom';
import ScheduleV1Data from '../../jsonData/schedule/ScheduleV1Data.json'

const CodeOfConduct = () => {

    return (
        <>
            <section className="event-detail">
                <div className="auto-container">
       
                    <div className="content-box">
      
                        <h2>Code of Conduct</h2>
                        <p>   
                        At Reboot we aim to provide a friendly and supportive environment for colleagues. Please follow this Code of Conduct to ensure everyone gets the most from the day. If you see or experience inappropriate behaviour, ask respectfully for it to stop. 
                        </p> 
                        <div className="row two-column">
                            <div className="column col-lg-6 col-md-12">
                                <h4>What we ask of you</h4>
                                <ul className="list-style-two">
                                    <li><b>Engage</b></li>
                                    <ul>
                                        <li>Be in the room and take part in activities. We kindly request that you do not log on to Teams calls through the day.</li>
                                    </ul>
                                    <li><b>Share</b></li>
                                    <ul>
                                        <li>Take what you learn from the event and share it with your team.</li>
                                    </ul>
                                </ul>
                            </div>
                            <div className="column col-lg-6 col-md-12">
                                <h4>Live our group values</h4>
                                <ul className="list-style-two">
                                    <li><b>Live our group values</b></li>
                                    <ul>
                                        <li>Be inclusive in your actions and language. Help us make the event something for everyone to benefit from.</li>
                                    </ul>
                                    <li><b>Sustainable</b></li>
                                    <ul>
                                        <li>Don't throw away reusable giveaway items - if you don't need or want it, don't accept it.</li>
                                    </ul>
                                    <li><b>Trust</b></li>
                                    <ul>
                                        <li>Assume people are working in our best interests and trust them in their endeavours.</li>
                                    </ul>
                                    <li><b>Bold</b></li>
                                    <ul>
                                        <li>Be prepared to meet new people, learn new things and experiment with technology.</li>
                                    </ul>
                                    <li><b>People first</b></li>
                                    <ul>
                                        <li>Treat each other with respect and go the extra mile to support each other.</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                     </div>
                </div>
            </section>
        </>
    );
};

export default CodeOfConduct;