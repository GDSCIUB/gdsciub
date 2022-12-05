import React from 'react';
const Event = ({ img, title, date, time, venue, desc, rsvp }) => {
    return (
        <div className="event">
            <div className="event_img">
                <img src={img} alt="" />
            </div>
            <div className="event_details">
                <h2>{title}</h2>
                <p>Date: {date} - {time}</p>
                <p>Venue: {venue}</p>
                <p>{desc}</p>

                <a href={rsvp}
                    target="_blank"
                    rel="noreferrer"
                >
                    <button>RSVP</button>
                </a>
            </div>
        </div>
    )
}

export default Event;
