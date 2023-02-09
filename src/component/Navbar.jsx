import React from 'react'
import Toggle from './Toggle'


export default function Navbar () {
    const [toggle, setToggle ] = React.useState(false);

    function handleToggle( ){
        console.log("clicked!")
        setToggle( preVal => !preVal )
    }
    return (
        <nav className='header'>
            <div className="logo">
                <img src="./src/assets/reactjs-icon.png" alt="Logo" className="logo--image" />
                <h3 className="logo--text">ReactFacts</h3>
            </div>
            < Toggle toggle={toggle}
            handleClick = {handleToggle}
            />
        </nav>
    );
}