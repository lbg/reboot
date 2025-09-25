import React from 'react';

const SingleFeatureV1 = ({ feature }) => {

    const { icon, title, text, color } = feature;

    return (
        <>
            <div className="inner-box">
                <div className="icon-box">
                    <span className={`icon ${icon}`} style={{color: color}}></span>
                </div>
                <h4>{title}</h4>
                <div className="text">{text}</div>
            </div>
        </>
    );
};

export default SingleFeatureV1;
