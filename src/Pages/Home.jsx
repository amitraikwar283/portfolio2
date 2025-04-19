import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
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
            <main className="main-content">
                <h2>Engineer hoon bhai, jugaar se leke jugaad tak sab manage ho jata hai—chahe circuit ho ya life!</h2>
            </main>
            <footer>
            <p>&copy; {new Date().getFullYear()} Amit Raikwar. All rights reserved.</p>
        </footer>
        </div>
    );
};

export default Home;