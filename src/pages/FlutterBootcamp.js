import React from 'react';
import FlutterLogo from '../assets/flutter logo.png';
import Collaborations from '../assets/FlutterBootcamp/collaboration.png';
import workshop1 from '../assets/FlutterBootcamp/intro to flutter.png';
import workshop2 from '../assets/FlutterBootcamp/intro to widgets.png';
import workshop3 from '../assets/FlutterBootcamp/Custom Widgets.png';
import workshop4 from '../assets/FlutterBootcamp/State Management.png';
import workshop5 from '../assets/FlutterBootcamp/Flutter x Firebase.png';
import workshop6 from '../assets/FlutterBootcamp/API Integration.png';

import './FlutterBootcamp.css';

const FlutterBootcamp = () => {
    return (
        <div className='flutterBootcamp'>
            <div className='flutterHeader'>
                <img src={FlutterLogo} alt="" />
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
                <div className='flutterWorkshops'>
                    <h2>Workshops</h2>
                    <div className='FWorkshops'>
                        <div className='FWorkshop'>
                            <img src={workshop1} alt="" />
                            <h3>Introduction To Flutter</h3>
                            <p>Speaker: Sharjeel Yunus</p>
                            <span>Date: 19th January 2022</span>
                            <br />
                            <div>
                                <a
                                    href="https://gdsc.community.dev/e/m2q7b7/"
                                    className='Event'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Event Link
                                </a>
                                <a
                                    href="https://youtu.be/iv2eVi8AqOs"
                                    className='YouTube'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Watch on YouTube
                                </a>
                                <a
                                    href="https://docs.google.com/presentation/d/1nAmNL5Mj9pNSh-7Czl8UYKhfOznQQvvY4ygZXsOUhJ0/edit?usp=sharing"
                                    className='slides'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Slides
                                </a>
                                <a
                                    href="https://forms.gle/tEUspe5j3DVGUiez7"
                                    className='submitProject'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Submit Project
                                </a>
                            </div>
                        </div>
                        <div className='FWorkshop'>
                            <img src={workshop2} alt="" />
                            <h3>Introduction To Widgets</h3>
                            <p>Speaker: Emaan Yaqoob</p>
                            <span>Date: 21st January 2022</span>
                            <br />
                            <div>
                                <a
                                    href="https://gdsc.community.dev/e/mm8j36/"
                                    className='Event'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Event Link
                                </a>
                                <a
                                    href="https://youtu.be/rkoMgatICaE"
                                    className='YouTube'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Watch on YouTube
                                </a>
                                <a
                                    href="https://docs.google.com/presentation/d/1qbCpipovmp2lLuiXXu2BowxcCOBd8Owzi-7HvLvkZck/edit?usp=sharing"
                                    className='slides'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Slides
                                </a>
                                <a
                                    href="https://forms.gle/kfXcjaXwQVUHSq9p9"
                                    className='submitProject'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Submit Project
                                </a>
                            </div>
                        </div>
                        <div className='FWorkshop'>
                            <img src={workshop3} alt="" />
                            <h3>Custom Widgets</h3>
                            <p>Speaker: Ehmad Saeed</p>
                            <span>Date: 23rd January 2022</span>
                            <br />
                            <div>
                                <a
                                    href="https://gdsc.community.dev/e/m9edz2/"
                                    className='Event'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Event Link
                                </a>
                                <a
                                    href="https://youtu.be/mTe3vBZtwEY"
                                    className='YouTube'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Watch on YouTube
                                </a>
                                <a
                                    href="https://docs.google.com/presentation/d/11-xCZiLLOh2eReCFyqQ2uQ8ukic0jIXpJP67LHjwr2M/edit?usp=sharing&resourcekey=0-IrW8Qr1HbL9HjK74yqbdpw"
                                    className='slides'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Slides
                                </a>
                                <a
                                    href="https://forms.gle/Ni9dtnT86VESqaDP7"
                                    className='submitProject'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Submit Project
                                </a>
                            </div>
                        </div>
                        <div className='FWorkshop'>
                            <img src={workshop4} alt="" />
                            <h3>State Management</h3>
                            <p>Speaker: Rashid Wassan</p>
                            <span>Date: 25th January 2022</span>
                            <br />
                            {/* <div>
                                <a
                                    href="https://gdsc.community.dev/e/m2q7b7/"
                                    className='Event'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Event Link
                                </a>
                                <a
                                    href="https://youtu.be/iv2eVi8AqOs"
                                    className='YouTube'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Watch on YouTube
                                </a>
                                <a
                                    href="https://docs.google.com/presentation/d/1nAmNL5Mj9pNSh-7Czl8UYKhfOznQQvvY4ygZXsOUhJ0/edit?usp=sharing"
                                    className='slides'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Slides
                                </a>
                                <a
                                    href="https://forms.gle/tEUspe5j3DVGUiez7"
                                    className='submitProject'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Submit Project
                                </a>
                            </div> */}
                        </div>
                        <div className='FWorkshop'>
                            <img src={workshop5} alt="" />
                            <h3>Flutter x Firebase</h3>
                            <p>Speaker: Ahmad Khan</p>
                            <span>Date: 27th January 2022</span>
                            <br />
                            {/* <div>
                                <a
                                    href="https://gdsc.community.dev/e/m2q7b7/"
                                    className='Event'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Event Link
                                </a>
                                <a
                                    href="https://youtu.be/iv2eVi8AqOs"
                                    className='YouTube'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Watch on YouTube
                                </a>
                                <a
                                    href="https://docs.google.com/presentation/d/1nAmNL5Mj9pNSh-7Czl8UYKhfOznQQvvY4ygZXsOUhJ0/edit?usp=sharing"
                                    className='slides'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Slides
                                </a>
                                <a
                                    href="https://forms.gle/tEUspe5j3DVGUiez7"
                                    className='submitProject'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Submit Project
                                </a>
                            </div> */}
                        </div>
                        <div className='FWorkshop'>
                            <img src={workshop6} alt="" />
                            <h3>API Integration</h3>
                            <p>Speaker: Emaan Yaqoob</p>
                            <span>Date: 29th January 2022</span>
                            <br />
                            {/* <div>
                                <a
                                    href="https://gdsc.community.dev/e/m2q7b7/"
                                    className='Event'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Event Link
                                </a>
                                <a
                                    href="https://youtu.be/iv2eVi8AqOs"
                                    className='YouTube'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Watch on YouTube
                                </a>
                                <a
                                    href="https://docs.google.com/presentation/d/1nAmNL5Mj9pNSh-7Czl8UYKhfOznQQvvY4ygZXsOUhJ0/edit?usp=sharing"
                                    className='slides'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Slides
                                </a>
                                <a
                                    href="https://forms.gle/tEUspe5j3DVGUiez7"
                                    className='submitProject'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Submit Project
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='presentedBy'>
                    <h2>Presented By</h2>
                    <img src={Collaborations} alt="" />
                </div>
            </div>
        </div >
    );
};

export default FlutterBootcamp;
