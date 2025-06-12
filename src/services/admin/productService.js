import { getAllProductApi } from "../../api/admin/productApi";
import { getAllUserApi } from "../../api/admin/userApi";

export const getAllProductService = async (params) => {
    try {
        const response = await getAllProductApi(params)
        return response.data
    } catch (err) {
        throw err.response?.data || { "message": "Product fetch failed" }
    }
}