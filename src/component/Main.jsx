import React from 'react'

export default function Main () {
    return (
        <main className='Main'>
            <ul className="main__list">
                <h1 className="main__title">
                    Fun facts about React
                </h1>
                <li className="main__list-points">Was first released in 2013</li>
                <li className="main__list-points">Was originally created by Jordan Walke</li>
                <li className="main__list-points">Has well over 100K stars on GitHub</li>
                <li className="main__list-points">Is maintained by Facebook</li>
                <li className="main__list-points">Powers thousands of enterprise apps, including mobile apps </li>
            </ul>
        </main>
    );
}