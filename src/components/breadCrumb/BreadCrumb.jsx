import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const BreadCrumb = ({ title = "Default Title", breadCrumb = "Default BreadCrumb" }) => {
    // Set the background image based on the title
    const backgroundImage = title === "Good To Know" ? "url(/reboot/images/background/5.jpg)" :
                            title === "Schedule" ? "url(/reboot/images/background/13.jpg)" :
                            "url(/reboot/images/background/15.jpg)";
    return (
        <>
            <section className="page-title" style={{ backgroundImage }}>
                <div className="auto-container">
                    <h1>{title}</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/reboot/">Home</Link></li>
                        <li>{breadCrumb}</li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default BreadCrumb;