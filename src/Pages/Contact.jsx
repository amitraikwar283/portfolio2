import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <header>
                <h1>My Portfolio</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
            <main className="contact-content">
                <h2>Contact Me</h2>
                <p>You can reach me at: amitraikwar283@gmail.com</p>
            </main>
        </div>
    );
};

export default Contact;