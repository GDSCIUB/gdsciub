import React from 'react';
import flutterBootcamp from '../assets/FlutterBootcamp/Timeline - Flutter Bootcamp.png';
import './Workshops.css';
const FeaturedWorkshop = () => {
    return (
        <div className="featured_workshops" id="Workshops">
            <div className="workshops_heading">
                <h1> Events and Workshops</h1>
                <p>Come learn, share and connect with us in person.</p>
                <span>Featured Events</span>
            </div>
            <div className='FeaturedWorkshops'>
                <a href="/FlutterBootcamp" className='featuredWorkshop'>
                    <img src={flutterBootcamp} alt="" />
                    <h2>Flutter Bootcamp</h2>
                    <p>19th Jan - 29 Jan 2022</p>
                </a>
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
