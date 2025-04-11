import React from 'react';
import TimeV1 from '../counter/TimeV1';

const ComingSoonV1 = () => {
    const time = new Date("Apr 24 2025 09:00:00 GMT+0100");

    return (
        <>
            <section className="coming-soon-section">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="time-counter">
                            <TimeV1 expiryTimestamp={time} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ComingSoonV1;