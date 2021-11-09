import React from 'react';
import Event from './Event';
import './Workshops.css';

const Workshops = () => {
    return (
        <div className="workshops" id="Workshops">
            <div className="workshops_heading">
                <h1>Events and Workshops</h1>
                <p>Come learn, share and connect with us in person.</p>
            </div>
            <div className="events">
                <Event
                    img="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/RWD.jpg"
                    title="Responsive Web Design"
                    date="7th November 2021"
                    time="7:00 PM"
                    venue="Google Meet"
                    desc="Responsive web design is about creating web pages that look good on all devices!"
                    rsvp="https://gdsc.community.dev/events/details/developer-student-clubs-the-islamia-university-of-bahawalpur-presents-responsive-web-design/"
                />
            </div>
        </div>
    )
}

export default Workshops;
