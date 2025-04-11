import React from 'react';
import ReactWOW from 'react-wow';
import featureV1Data from '../../jsonData/feature/featureV1Data.json'
import SingleFeatureV1 from './SingleFeatureV1';

const FeatureV1 = () => {
    return (
        <>
            <section className="features-section-two">
                <div className="auto-container">
                    <div className="row">
                        <div className="title-block col-lg-4 col-md-12 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="sec-title">
                                    {/* <span className="title">Features</span> */}
                                    <h2>Discover Today</h2>
                                </div>
                            </div>
                        </div>
                        {featureV1Data.map(feature =>
                            <div className="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" key={feature.id}>
                                <SingleFeatureV1 feature={feature} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureV1;