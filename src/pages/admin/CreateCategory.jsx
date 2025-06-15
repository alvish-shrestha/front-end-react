import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup"
import { useCreateCategory } from '../../hooks/admin/useAdminCategory';
import { toast } from 'react-toastify';

export default function CreateCategory() {
    const { mutate, data, error, isPending } = useCreateCategory()
    const validationSchema = Yup.object(
        {
            name: Yup.string().required("Name required"),
            image: Yup.mixed().nullable().test(
                "fileSize",
                "File too large",
                (value) => !value || (value.size <= 5 * 1024 * 1024)
            )
        }
    )

    const formik = useFormik(
        {
            initialValues: {
                name: "",
                image: ""
            },
            validationSchema,
            onSubmit: (values) => {
                const formData = new FormData()
                formData.append(
                    "name",
                    values.name
                )
                if (values.image) {
                    formData.append(
                        "image",
                        values.image
                    )
                }
                mutate(formData, {
                    onSuccess: () => {
                        formik.resetForm()
                        toast.success("Success")
                    }
                })
            }
        }
    )
  return (
    <div>CreateCategory
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>Name</label>
                <input 
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                >
                </input>
            </div>
            <div>
                <label>Image</label>
                <input
                    name = "image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.currentTarget.files[0] // selected first file
                        if (file) formik.setFieldValue(
                            "image", file
                        ) // for file use setFieldValue
                    }}
                >
                </input>
            </div>
            {formik.values.image &&
                <img src={URL.createObjectURL(
                    formik.values.image
                )}></img>
            }
            <button type='submit'>Save</button>
        </form>
    </div>
  )
}
