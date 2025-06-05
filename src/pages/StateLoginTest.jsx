import React, { useState, useEffect } from 'react';

export default function LoginTest() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        setMessage('Please provide information');
    },
    []);

    useEffect(() => {
        if (name == 'Saroj') {
            setMessage('Welcome saroj');
        }
    }, [name]);

    const handleSubmit = () => {
        if (name == '' || email == '' || password == '') {
            setMessage('Provide all information');
        } else if (name == 'Saroj') {
            setMessage('Welcome saroj');
        } else {
            setMessage('Congratulation');
        }
    };

    return (
        <div>
            <h2>Login Test</h2>
            <p>{message}</p>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
