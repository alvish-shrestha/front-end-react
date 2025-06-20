import React from 'react'
import { useRequestResetPassword } from '../hooks/useLoginUser'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom'

export default function RequestPassword() {
    const navigate = useNavigate()
    const requestPasswordHook = useRequestResetPassword()
    const validationSchema = Yup.object(
        {
            email: Yup.string().email("Invalid email").required("Required")
        }
    )
    const formik = useFormik(
        {
            initialValues: {
                email: ""
            },
            validationSchema,
            onSubmit: (values) => {
                requestPasswordHook.mutate(
                    values, {
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
            RequestPassword
            <form onSubmit={formik.handleSubmit}>
                <label>Email</label>
                <input
                    name='email'
                    type='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                >
                </input>
                { formik.touched.email && formik.errors.email && 
                    <>{ formik.errors.email }</> 
                }
                <button type='submit'>Request Email</button>
            </form>
        </div>
    )
}