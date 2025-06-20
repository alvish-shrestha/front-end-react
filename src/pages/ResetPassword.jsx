import React, { use } from 'react'
import { useResetPassword } from '../hooks/useLoginUser'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { useNavigate, useParams } from 'react-router-dom'

export default function ResetPassword() {
    const { token } = useParams()
    const navigate = useNavigate()
    const resetPasswordHook = useResetPassword()
    const validationSchema = Yup.object(
        {
            password: Yup.string().required("Required").min(6, "6 char"),
            confirmPassword: Yup.string().required("Required")
                .oneOf([Yup.ref("password"), null], "Password must match")
        }
    )

    const formik = useFormik(
        {
            initialValues: {
                password: "",
                confirmPassword: ""
            },
            validationSchema,
            onSubmit: (values) => {
                resetPasswordHook.mutate(
                    { data: values, token },
                    {
                        onSuccess: () => {
                            navigate("/login")
                        }
                    }
                )
            }
        }
    )
    
    return (
        <div>
            ResetPassword
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Password</label>
                    <input
                        name='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    ></input>
                </div>
                <button type='submit'>Reset</button>
            </form>
        </div>
    )
}
