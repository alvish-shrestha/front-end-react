import React from 'react'
import { useGetOneCategory, useUpdateOneCategory } from '../../hooks/admin/useAdminCategory'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { getBackendImageUrl } from '../../utils/backend-image'

export default function UpdateCategory() {
    const { id } = useParams()
    const categoryHook = useGetOneCategory(id)
    const updateCategoryHook = useUpdateOneCategory()

    // const { data, error } = useGetOneCategory()
    // const { data = updateData, error: updateError } = useUpdateOneCategory()

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
            enableReinitialize: true,  // allows state change n get
            initialValues: {
                name: categoryHook.category?.name || "",
                image: ""
            },
            validationSchema,
            onSubmit: (values) => {
                console.log(values);
                const formData = new FormData()
                formData.append("name", values.name)
                if (values.image) formData.append("image", values.image)
                    
                updateCategoryHook.mutate(
                    { id, data: formData },
                    {
                        onSuccess: () => {
                            formik.resetForm()
                        }
                    }
                )
            }
        }
    )

    if (categoryHook.isPending) <>Loading...</>
    if (categoryHook.isError) <>Error!!!</>
    if (!categoryHook.category) <>No category found</>

    return (
        <div>
            UpdateCategory
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
                        name="image"
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
                {formik.values.image ?
                    <img src={URL.createObjectURL(
                        formik.values.image
                    )}></img>
                    : categoryHook.category?.filepath ?
                        <img src={getBackendImageUrl(categoryHook.category?.filepath)}></img> : null
                }
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}
