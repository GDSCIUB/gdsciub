import React from 'react';
import webdev from '../assets/webdev.png';
import appdev from '../assets/appdev.png';
import cloudcomputing from '../assets/cloudcomputing.png';
import ai from '../assets/ai.png';

import './Technologies.css';

const Technologies = () => {
    return (
        <div className="technologies">
            <div className="techSec__title">
                <h1>Technologies We're Excited About</h1>
                <p>Opportunities to learn & access deep technical content.</p>
            </div>

            <div className="techLearn">
                <div>
                    <img src={webdev} alt="" />
                </div>
                <div className="techAbout">
                    <h2>Web Development</h2>
                    <p>Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience.</p>
                </div>
            </div>

            <div className="techLearn">
                <div className="techAbout">
                    <h2>Android Development</h2>
                    <p>Every year Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development.</p>
                </div>
                <div>
                    <img src={appdev} alt="" />
                </div>
            </div>

            <div className="techLearn">
                <div>
                    <img src={cloudcomputing} alt="" />
                </div>
                <div className="techAbout">
                    <h2>Cloud Computing</h2>
                    <p>For passionate developers who want to stay relevant in a cloud first world where businesses demand for agility and innovation and prompt rise of cloud-native applications to ridges gaps between data, insight, and action.</p>
                </div>
            </div>

            <div className="techLearn">
                <div className="techAbout">
                    <h2>Machine Intelligence</h2>
                    <p>Learn how to drive user engagement and retention with intelligent apps that are able to effectively serve users what they need without the fuss by providing these systems with the ability to utomatically learn and improve from experience without being explicitly programmed.</p>
                </div>
                <div>
                    <img src={ai} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Technologies;
