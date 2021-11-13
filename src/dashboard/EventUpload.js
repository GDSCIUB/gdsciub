import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { storage, db } from '../Firebase';
import firebase from 'firebase/compat/app';

const EventUpload = () => {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [venue, setVenue] = useState('');
    const [caption, setCaption] = useState('');
    const [rsvp, setRSVP] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = (e) => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress)
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("events").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            rsvp,
                            title,
                            date,
                            time,
                            venue
                        });

                        setProgress(0);
                        setCaption("");
                        setImage(null);
                        setDate("");
                        setTime("");
                        setTitle("");
                        setVenue("");
                    })
            }
        )
    }

    return (
        <div className="eventupload">
            <h2>Upload Event</h2>
            <progress value={progress} max="100" className="imageupload__progress" />
            <div>
                <input type="text" onChange={event => setTitle(event.target.value)} placeholder="Enter Event Title" />
                <input type="text" onChange={event => setDate(event.target.value)} placeholder="Enter Event Date" />
                <input type="text" onChange={event => setTime(event.target.value)} placeholder="Enter Event Time" />
                <input type="text" onChange={event => setVenue(event.target.value)} placeholder="Enter Event Venue" />
                <input type="text" onChange={event => setCaption(event.target.value)} placeholder="Enter Event Caption" />
                <input type="text" onChange={event => setRSVP(event.target.value)} placeholder="Enter Event RSVP" />
            </div>
            <input type="file" onChange={handleChange} className="fileupload" />
            <Button className="imageupload__button" onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default EventUpload;
