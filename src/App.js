import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeRemaining, setTimeRemaining] = useState(60 * 60);

    const [totalHours, setTotalHours] = useState(0);
    const [totalMinutes, setTotalMinutes] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(0);

    const updateCountdown = event => {
        setTimeRemaining((totalHours * 60 * 60) + (totalMinutes * 60) + totalSeconds)
    }

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(timerInterval);
                    return 0;
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    // Convert seconds to hours, minutes, and seconds
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return (
        <div align="center">
            <div>
            <input
                type="number"
                onChange={e => setTotalHours(e.target.value)}
                value={totalHours}
            />
            <span>hours</span>
            <input
                type="number"
                onChange={e => setTotalMinutes(e.target.value)}
                value={totalMinutes}
            />
            <span>minutes</span>
            <input
                type="number"
                onChange={e => setTotalSeconds(e.target.value)}
                value={totalSeconds}
            />
            <span>seconds</span>
            </div>
            <div>
                <button onClick={updateCountdown}>Set & Restart Timer</button>
            </div>
            <hr/>
            <h2>Time Remaining:</h2>
            <h1>{`${hours}h ${minutes}m ${seconds}s`}</h1>
        </div>
    );
};

function App() {
    return (
        <div>
            <CountdownTimer/>
        </div>
    );
}

export default App;