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
                        <a href="https://forms.gle/jcg1keBw1m7uSHPk7" className='flutterRegister' target="_blank" rel="noreferrer">Register Now</a>
                    </div>
                </div>
            </div>
            <div className='flutterBody'>
                <div className='flutterWhy'>
                    <h2>Why you should Join Bootcamp</h2>
                    <p>5 Speakers | 6 Workshops | 6 Google Developer Student Clubs | 800+ Participants and much more!</p>
                    <div>
                        <a href="https://forms.gle/jcg1keBw1m7uSHPk7" className='flutterRegister' target="_blank" rel="noreferrer">Register Now</a>
                    </div>
                </div>
                <div className='flutterSpeakers'>
                    <h2>Speakers</h2>
                    <div className='speakers'>
                        <div className='speaker'>
                            <img src="https://www.github.com/sharjeelyunus.png" alt="" />
                            <h3>Sharjeel Yunus</h3>
                            <p>GDSC IUB Lead</p>
                        </div>
                        <div className='speaker'>
                            <img src="https://github.com/eeimaan.png" alt="" />
                            <h3>Emaan Yaqoob</h3>
                            <p>App Dev Lead | GDSC IUB</p>
                        </div>
                        <div className='speaker'>
                            <img src="https://github.com/justehmadsaeed.png" alt="" />
                            <h3>Ehmad Saeed</h3>
                            <p>Beta MLSA & Former <br /> Flutter Lead | GDSC UET</p>
                        </div>
                        <div className='speaker'>
                            <img src="https://github.com/rashidwassan.png" alt="" />
                            <h3>Rashid Wassan</h3>
                            <p>MLSA & GDSC MUET Lead</p>
                        </div>
                        <div className='speaker'>
                            <img src="https://www.github.com/rmahmadkhan.png" alt="" />
                            <h3>Ahmad Khan</h3>
                            <p>Core Team GDG Live PK</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FlutterBootcamp;
