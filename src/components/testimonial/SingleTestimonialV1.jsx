import React from 'react';
import RatingsFive from '../others/RatingsFive';

const SingleTestimonialV1 = ({ testimonial }) => {
    const { icon, text, name } = testimonial;

    return (
        <>
            <div className="testimonial-block">
                <div className="inner" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="text" style={{ paddingBottom: '0px' }}>
                        <p><i>{text}</i></p>
                    </div>
                    {/* <div className="name">{name}</div> */}
                    {/* <div className="rating">
                        <RatingsFive />
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV1;
