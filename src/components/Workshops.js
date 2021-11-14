import React, { useEffect, useState } from 'react';
import Event from './Event';
import './Workshops.css';
import db from "../Firebase";
import { onSnapshot, collection } from 'firebase/firestore';

const Workshops = () => {
    const [events, setEvents] = useState([]);

    console.log(events);

    useEffect(() =>
        onSnapshot(collection(db, "events"), (snapshot) =>
            setEvents(snapshot.docs.map(doc => doc.data()))
        ),
        []
    )

    return (
        <div className="workshops">
            <div className="events">
                {events.map(event => (
                    <Event
                        img={event.imageUrl}
                        title={event.title}
                        date={event.date}
                        time={event.time}
                        venue={event.venue}
                        desc={event.caption}
                        rsvp={event.rsvp}
                    />
                ))}
            </div>
        </div>
    )
}

export default Workshops;
