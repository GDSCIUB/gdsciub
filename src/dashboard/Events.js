import React, { useState } from 'react';
import DashboardNav from './DashboardNav';
import PublishIcon from '@mui/icons-material/Publish';
import Modal from '@material-ui/core/Modal';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';
import EventUpload from './EventUpload';

const Events = () => {
    const [openUpload, setOpenUpload] = useState(false);
    const [user] = useAuthState(auth);

    return (
        <>
            <Modal
                open={openUpload}
                onClose={() => setOpenUpload(false)}
            >
                <div className="upload__modal">
                    {user?.email ? (
                        <EventUpload />
                    ) : (
                        <h3>Login to Upload</h3>
                    )}
                </div>
            </Modal>
            <div className="dash__events">
                <div>
                    <DashboardNav />
                    <div className="upload" onClick={() => setOpenUpload(true)}>
                        <div>
                            <PublishIcon className="upload__button" />
                            <p>Upload New Event</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events;
