import React from 'react';
import programming from '../assets/flutter logo.png';
import './FlutterBootcamp.css';

const FlutterBootcamp = () => {
    return (
        <div className='flutterBootcamp'>
            <div className='flutterHeader'>
                <img src={programming} alt="" />
                <div>
                    <h1>Flutter Bootcamp</h1>
                    <p>
                        Google DSC brings you the Flutter Bootcamp to help you become proficient in one of the fastest-growing technologies. A collaboration of 6 Developer Student Clubs from all over Pakistan has rolled out this opportunity just for you. <br />
                        Join our Flutter Bootcamp to understand all the fundamental concepts of Flutter development. Don't miss out on your chance to start your journey to become a fully-fledged Flutter developer. Build Android and iOS apps with just one codebase.
                        <br />
                        <span>Dates: 19th January 2022 - 29th January 2022</span>
                    </p>
                    <div>
                        <a href="https://forms.gle/jcg1keBw1m7uSHPk7" target="_blank" rel="noreferrer">Register Now</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FlutterBootcamp;
