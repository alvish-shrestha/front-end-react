import React from 'react';
import { useState } from 'react';

// This is a placeholder for your useRegisterUser hook.
// In a real application, you would import it from your hooks directory.
const useRegisterUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const register = async (formData) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            // Simulate an API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Simulate success or failure
            if (formData.email.includes('error')) {
                throw new Error('Registration failed for this email. Please try another.');
            }

            setData({ message: 'Registration successful!', user: formData.username });
            return true;
        } catch (err) {
            setError(err);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return { register, error, data, isLoading };
};

export default function App() {
    const { register, error, data, isLoading } = useRegisterUser();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const formData = {
            email,
            username,
            password,
            firstName,
            lastName,
            // Add any other necessary fields
        };

        const result = await register(formData);
        if (result) {
            console.log("Registration success", result);
            // Clear form fields on successful registration
            setEmail('');
            setUsername('');
            setPassword('');
            setFirstName('');
            setLastName('');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
            {/* Tailwind CSS CDN for Inter font */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Register Account</h2>

                {/* Display feedback messages */}
                {isLoading && (
                    <p className="text-blue-600 text-lg mb-4 text-center animate-pulse">
                        Registering...
                    </p>
                )}
                {error && (
                    <p className="text-red-600 text-lg mb-4 font-semibold text-center">
                        Error: {error.message}
                    </p>
                )}
                {data && (
                    <p className="text-green-600 text-lg mb-4 font-semibold text-center">
                        {data.message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        aria-label="Email"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        aria-label="Username"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        aria-label="Password"
                        required
                    />

                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        aria-label="First Name"
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        aria-label="Last Name"
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`mt-6 p-3 rounded-lg text-white font-semibold text-xl transition duration-300 ease-in-out
                            ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'}`}
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                </form>
            </div>
            {/* Tailwind CSS script */}
            <script src="https://cdn.tailwindcss.com"></script>
            {/* Custom script for Inter font, if not handled globally */}
            <style>
                {`
                body {
                    font-family: 'Inter', sans-serif;
                }
                `}
            </style>
        </div>
    );
}