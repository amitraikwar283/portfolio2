import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

const About = () => {
    return (
        <div>
            <header>
                <h1>My Portfolio</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/contact ">Contact</Link>
                </nav>
            </header>
            <main className="about-content">
                <h2>Hello!</h2>
                <p>
                    My name is Amit Raikwar, and I am currently pursuing a Bachelor of Technology (B.Tech) in Electronics and Instrumentation at Bundelkhand University. I completed my schooling at Shri Guru Nanak Khalsa Inter College.
                </p>
                <p>
                    During my school years, I was actively involved in the Scout program, where I developed strong teamwork and collaboration skills.
                </p>
                <p>
                    I have a keen interest in electronics, particularly in working with technologies like Arduino, Raspberry Pi, and building projects such as maze-solving robots. I am passionate about exploring and creating innovative electronic systems.
                </p>
            </main>
        </div>
    );
};

export default About;