import React from 'react';
import './Workshops.css';

const FeaturedWorkshop = () => {
    return (
        <div className="featured_workshops" id="Workshops">
            <div className="workshops_heading">
                <h1 h1 > Events and Workshops</h1 >
                <p>Come learn, share and connect with us in person.</p>
                <span>Upcoming Events</span>
            </div>
            <div className="workshops_button">
                <a href="/Workshops">
                    <button>
                        View all WORKSHOPS / EVENTS
                    </button>
                </a>
            </div>
        </div>
    )
}

export default FeaturedWorkshop;
