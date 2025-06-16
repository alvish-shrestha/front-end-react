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

export const getOneCategoryApi = (id) => axios.get("/admin/category/" + id)

export const updateOneCategoryApi = (id, data) => 
    axios.put("/admin/category/" + id, data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }
) // if update has image/file upload