// sir code
// ---------------------------------------------------------------------------------------------------------------
import { useRegisterUser } from "../../hooks/useRegisterUser";
import React, { useState } from "react";
import { useRegisterUserTan } from "../../hooks/useRegisterUserTan";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function RegisterForm() {
    // const { register, error, data, isLoading } = useRegisterUser(); // manual hook

    // tanstack hooks
    const { mutate, data, error, isPending, isSuccess, isError } = useRegisterUser()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastname] = useState("")

    const validationSchema = Yup.object(
        {
            email: Yup.string().email("invalid email").required("Email required"),
            password: Yup.string().min(8, "Min 8 character required").required("Password required"),
            confirmPassword: Yup.string().min(8, "Must match with password").required("Password unmatched"),
            username: Yup.string().min(4, "Must be of at lease 4 characters").required("Username required"),
            firstName: Yup.string().min(3, "Must be of at least 3 characters").required("FirstName required"),
            lastName: Yup.string().min(3, "Must be of at least 3 characters").required("LastName required"),
        }
    )

    const formik = useFormik(
        {
            initialValues: {
                // states of input
                email: "",
                password: "",
                confirmPassword: "",
                username: "",
                firstName: "",
                lastName: "",
            },
            validationSchema: validationSchema,
            onSubmit: (data) => {
                // data is an obect of state of values, email, password
                mutate(data,)
            }
        }
    )

    // const handleSubmit = async (e) => {
    //     // use toast to notify user for invalid input
    //     // email should be in @email.com
    //     // password and confirmPassword should be same 
    //     // if any input is empty notify that input is empty
    //     // eg: firstName is empty
    //     e.preventDefault();

    //     if (!email || !password || !username || !firstName || !lastname) {
    //         if (!email) toast.error("Email is empty");
    //         if (!password) toast.error("Password is empty");
    //         if (!confirmPassword) toast.error("Password is empty");
    //         if (!username) toast.error("Username is empty");
    //         if (!firstName) toast.error("First Name is empty");
    //         if (!lastname) toast.error("Last Name is empty");
    //         return;
    //     }

    //     if (!email.includes("@") || !email.includes("gmail.com")) {
    //         toast.error("Email must include @gmail.com (e.g., example@gmail.com)");
    //         return;
    //     }

    //     if (password != confirmPassword) {
    //         toast.error("Password does not match");
    //     }

    //     const formData = {
    //         // data needed for api
    //         email: email,
    //         password: password,
    //         confirmPassword: confirmPassword,
    //         username: username,
    //         firstName: firstName,
    //         lastName: lastname,
    //     };

    //     // const result = await register(formData);
    //     // if (result) {
    //     //     //another view logic eg: for navigation 
    //     //     console.log("Registration successful:", result);
    //     // }

    //     const result = mutate(formData) // replace register() // no async function
    // };

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type='email' // optional
                    name='email' // should match the state of formik
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    value={formik.values.email}
                ></input>
                <br />
                <input
                    name='password' // should match the state of formik
                    placeholder="Password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    value={formik.values.password}
                ></input>
                <br />
                <input
                    name='confirmPassword' // should match the state of formik
                    placeholder="Confirm Password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    value={formik.values.confirmPassword}
                ></input>
                <br />
                <input
                    type='text'
                    name='username' // should match the state of formik
                    placeholder="Username"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    value={formik.values.username}
                ></input>
                <br />
                <input
                    type='text' // optional
                    name='firstName' // should match the state of formik
                    placeholder="First Name"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    value={formik.values.firstName}
                ></input>
                <br />
                <input
                    type='test' // optional
                    name='lastName' // should match the state of formik
                    placeholder="Last Name"
                    onChange={formik.handleChange}
                    onBlur={formik.onBlur}
                    value={formik.values.lastName}
                ></input>
                <br />
                
                    <button type="submit">Register</button>
                <div>
                    {/*consitional render*/}
                    {error && <p style={{ color: "red" }}>{error.message}</p>}
                    {data && <p style={{ color: "green" }}>{data.message}!</p>}
                </div>
            </form>
        </div>
    );
}


// =========================================================================================================================================
// import React from 'react';
// import { useState } from 'react';

// // This is a placeholder for your useRegisterUser hook.
// // In a real application, you would import it from your hooks directory.
// const useRegisterUser = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [data, setData] = useState(null);

//     const register = async (formData) => {
//         setIsLoading(true);
//         setError(null);
//         setData(null);
//         try {
//             // Simulate an API call
//             await new Promise(resolve => setTimeout(resolve, 1500));

//             // Simulate success or failure
//             if (formData.email.includes('error')) {
//                 throw new Error('Registration failed for this email. Please try another.');
//             }

//             setData({ message: 'Registration successful!', user: formData.username });
//             return true;
//         } catch (err) {
//             setError(err);
//             return false;
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return { register, error, data, isLoading };
// };

// export default function App() {
//     const { register, error, data, isLoading } = useRegisterUser();

//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent default form submission behavior

//         const formData = {
//             email,
//             username,
//             password,
//             firstName,
//             lastName,
//             // Add any other necessary fields
//         };

//         const result = await register(formData);
//         if (result) {
//             console.log("Registration success", result);
//             // Clear form fields on successful registration
//             setEmail('');
//             setUsername('');
//             setPassword('');
//             setFirstName('');
//             setLastName('');
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
//             {/* Tailwind CSS CDN for Inter font */}
//             <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

//             <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Register Account</h2>

//                 {/* Display feedback messages */}
//                 {isLoading && (
//                     <p className="text-blue-600 text-lg mb-4 text-center animate-pulse">
//                         Registering...
//                     </p>
//                 )}
//                 {error && (
//                     <p className="text-red-600 text-lg mb-4 font-semibold text-center">
//                         Error: {error.message}
//                     </p>
//                 )}
//                 {data && (
//                     <p className="text-green-600 text-lg mb-4 font-semibold text-center">
//                         {data.message}
//                     </p>
//                 )}

//                 <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//                         aria-label="Email"
//                         required
//                     />

//                     <input
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//                         aria-label="Username"
//                         required
//                     />

//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//                         aria-label="Password"
//                         required
//                     />

//                     <input
//                         type="text"
//                         placeholder="First Name"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                         className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//                         aria-label="First Name"
//                     />

//                     <input
//                         type="text"
//                         placeholder="Last Name"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                         className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//                         aria-label="Last Name"
//                     />

//                     <button
//                         type="submit"
//                         disabled={isLoading}
//                         className={`mt-6 p-3 rounded-lg text-white font-semibold text-xl transition duration-300 ease-in-out
//                             ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'}`}
//                     >
//                         {isLoading ? 'Registering...' : 'Register'}
//                     </button>
//                 </form>
//             </div>
//             {/* Tailwind CSS script */}
//             <script src="https://cdn.tailwindcss.com"></script>
//             {/* Custom script for Inter font, if not handled globally */}
//             <style>
//                 {`
//                 body {
//                     font-family: 'Inter', sans-serif;
//                 }
//                 `}
//             </style>
//         </div>
//     );
// }

// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useRegisterUserTan } from "../../hooks/useRegisterUserTan"; // Assuming this is your TanStack Query hook

// export default function RegisterForm() {
//   const { mutate, data, error, isPending, isSuccess, isError } = useRegisterUserTan();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState(""); // Corrected 'lastname' to 'lastName' for consistency

//   // Handle success and error states from the TanStack Query hook
//   useEffect(() => {
//     if (isSuccess && data) {
//       toast.success(data.message || "Registration successful!");
//       // Optionally clear form fields on successful registration
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//       setUsername("");
//       setFirstName("");
//       setLastName("");
//     }
//     if (isError && error) {
//       toast.error(error.message || "Registration failed. Please try again.");
//     }
//   }, [isSuccess, isError, data, error]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic input validation
//     if (!firstName) {
//       toast.error("First Name is empty");
//       return;
//     }
//     if (!lastName) {
//       toast.error("Last Name is empty");
//       return;
//     }
//     if (!username) {
//       toast.error("Username is empty");
//       return;
//     }
//     if (!email) {
//       toast.error("Email is empty");
//       return;
//     }
//     if (!password) {
//       toast.error("Password is empty");
//       return;
//     }
//     if (!confirmPassword) {
//       toast.error("Confirm Password is empty");
//       return;
//     }

//     // Email format validation
//     if (!email.includes("@") || !email.includes("gmail.com")) {
//       toast.error("Email must be in the format example@gmail.com");
//       return;
//     }

//     // Password match validation
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     const formData = {
//       email,
//       password,
//       confirmPassword,
//       username,
//       firstName,
//       lastName,
//     };

//     mutate(formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
//       <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Register Account</h2>

//         <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//           <div>
//             <label htmlFor="firstName" className="block text-gray-700 text-sm font-semibold mb-2">
//               First Name
//             </label>
//             <input
//               type="text"
//               id="firstName"
//               placeholder="John"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//               aria-label="First Name"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="lastName" className="block text-gray-700 text-sm font-semibold mb-2">
//               Last Name
//             </label>
//             <input
//               type="text"
//               id="lastName"
//               placeholder="Doe"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//               aria-label="Last Name"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               placeholder="john_doe"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//               aria-label="Username"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="example@gmail.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//               aria-label="Email"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="********"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//               aria-label="Password"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold mb-2">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               placeholder="********"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//               aria-label="Confirm Password"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isPending}
//             className={`mt-6 p-3 rounded-lg text-white font-semibold text-xl transition duration-300 ease-in-out
//               ${isPending ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'}`}
//           >
//             {isPending ? 'Registering...' : 'Register'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }