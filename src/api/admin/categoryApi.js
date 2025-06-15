import axios from "../api"

export const getAllCategoryApi = () => axios.get("/admin/category")

// post/update with multipart
export const createOneCategoryApi = (data) => axios.post(
    "/admin/category", data,
    {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
)