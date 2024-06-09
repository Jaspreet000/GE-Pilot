import React, { useEffect, useRef } from 'react';
import Day from '../../assets/Day';
import Night from '../../assets/Night';
import './style.scss';

function Toggle() {
    const switchRef = useRef(null);

    useEffect(() => {
        const handleToggle = (e) => {
            e.stopPropagation();
            document.body.classList.toggle('light');
            document.body.classList.toggle('dark');
            switchRef.current.classList.toggle('day');
            switchRef.current.classList.toggle('night');
        };

        const switchElement = switchRef.current;
        switchElement.addEventListener('click', handleToggle);

        // Cleanup event listener on unmount
        return () => {
            switchElement.removeEventListener('click', handleToggle);
        };
    }, []);

    return (
        <nav>
        <a href="#" id="Switch" className="day" ref={switchRef}>
            <svg width="24" height="59" viewBox="0 0 24 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Day />
                <Night />
            </svg>
        </a>
        </nav>
    );
}

export default Toggle;
