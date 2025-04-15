import React from 'react';
import ScheduleListV1Data from '../../jsonData/schedule/ScheduleListV1Data.json'
import ScheduleV1Data from '../../jsonData/schedule/ScheduleV1Data.json'
import ScheduleList from './ScheduleList';
import ReactWOW from 'react-wow';
import { HashLink as Link } from 'react-router-hash-link'
import ReactMarkdown from 'react-markdown'

const ScheduleV1 = () => {
    return (
        <>
            <section className="schedule-section">
                <div className="anim-icons">
                    {/* <ReactWOW animation='zoomIn'>
                        <span className="icon icon-circle-4"></span>
                    </ReactWOW>
                    <ReactWOW animation='zoomIn'>
                        <span className="icon icon-circle-3"></span>
                    </ReactWOW> */}
                </div>
                <div className="auto-container">
                <div className="text"><h5 style={{paddingBottom:'3rem', textAlign:'center'}}>We are committed to developing a skills-based organisation. Each talk or workshop is designed to focus on a critical skill, which is highlighted in the description in bold.</h5></div>
                    <div className="schedule-tabs tabs-box ">
                        <div className="btns-box">
                            <ul className="tab-buttons clearfix nav nav-tabs">
                                {ScheduleListV1Data.map(list =>
                                    <ScheduleList list={list} key={list.id} />
                                )}
                            </ul>
                        </div>
                        <div className="tabs-content">
                            {ScheduleV1Data.map(schedule => {
                                return (
                                    <div className={`tab fade ${schedule.tabClass}`} id={schedule.tabId} key={schedule.id}>
                                        {
                                        //  Commented out - can add mentoring link if needed 
                                        //    (schedule.tabId == 'tab-6') &&
                                        //     <div className="btn-box-two" style={{paddingBottom: '20px', alignSelf: 'center', position: 'relative', left: '40%' }}><Link to="https://lloydsbanking.sharepoint.com/sites/TechnicalMentoringHub?xsdata=MDV8MDJ8fGU4N2Q2ZjY5MDM0OTQ0NDQ4Y2ExMDhkZDc5MDUxMjAwfDNkZWQyOTYwMjE0YTQ2ZmY4Y2Y0NjExZjEyNWUyMzk4fDB8MHw2Mzg3OTk3ODQ4NDAzMDE3Mjl8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxMMk5vWVhSekx6RTVPakF5TW1VNFltVm1MV1V4TTJRdE5HTmpZUzFpT0RSaExUWXpZalJtTkRneFltSmlNVjlrWkRBeVlUZzVaaTAyTjJNMkxUUXhOV0V0WWpGbFlpMHpPVGsxWWpVMU9XSmhaVGhBZFc1eExtZGliQzV6Y0dGalpYTXZiV1Z6YzJGblpYTXZNVGMwTkRNNE1UWTRNamt3TlE9PXw1NmFmZmI5NDliYzY0MmNhOGNhMTA4ZGQ3OTA1MTIwMHw3MjBjZTA3MWM0MmY0ODcyODlkMTlhYTJiYjY2YTQ2YQ%3D%3D&sdata=SHFackpZN2pSeFFOck1ySWxyaFBZNGVwTkFka1JiRU83S0MvZnhEWHFVWT0%3D&ovuser=3ded2960-214a-46ff-8cf4-611f125e2398%2CJack.McGrory%40lloydsbanking.com&OR=Teams-HL&CT=1744381898979&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNTAzMTMyMTAxNCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D" className="theme-btn btn-style-three"><span className="btn-title">Sign up to be a Mentor</span></Link></div>
                                         }
                                        <div className="schedule-timeline">
                                            {schedule.tabData.map(block => {
                                                return (
                                                    <div className={`schedule-block ${block.blockClass}`} key={block.id}>
                                                        <div className="inner-box">
                                                            <div className="inner">
                                                                <div className="date">{block.sessionStart} <br /> {block.sessionEnd}</div>
                                                                <div className="speaker-info">
                                                                     <h5 className="name">{block.name}</h5>
                                                                    <span className="designation">{block.designation}</span>
                                                                </div>
                                                                <h4>{block.title}</h4>
                                                                <div className="text"><ReactMarkdown>{block.text}</ReactMarkdown></div>
                                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>)
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ScheduleV1;