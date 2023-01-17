import React from 'react'


export default function Navbar () {
    return (
        <nav className='header'>
            <div className="logo">
                <img src="./src/assets/reactjs-icon.png" alt="Logo" className="logo--image" />
                <h3 className="logo--text">ReactFacts</h3>
            </div>
                <h3 className="header--title">
                    React Course - Project1
                </h3>
        </nav>
    );
}