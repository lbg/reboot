import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import ReactWOW from 'react-wow';

const ErrorPageContent = () => {
    return (
        <>
            <section className="error-section">
                <div className="anim-icons full-width">
                </div>
                <div className="auto-container">
                    <div className="error-title">404</div>
                    <h4>Page not Found</h4>
                    <div className="text">Sorry, we couldnt find the page youre looking for</div>
                    <Link to="/#" className="theme-btn btn-style-three"><span className="btn-title">Home Page</span></Link>
                </div>
            </section>
        </>
    );
};

export default ErrorPageContent;