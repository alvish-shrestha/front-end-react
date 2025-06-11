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
                    type="password"
                    name="password"
                    placeholder="Password"
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