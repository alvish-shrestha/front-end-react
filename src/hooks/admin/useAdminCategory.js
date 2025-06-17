import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllCategoryService, createOneCategoryService, getOneCategoryService, updateOneCategoryService, deleteOneCategoryService } from "../../services/admin/categoryService";
import { data } from "autoprefixer";
import { toast } from "react-toastify";

export const useAdminCategory = () => {
    const query = useQuery(
        {
            queryKey: ["admin_category"],
            queryFn: () => getAllCategoryService()
        }
    )
    const categories = query.data?.data || []
    return {
        ...query,
        categories
    }
}

export const useCreateCategory = () => {
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey: ["admin_create_category"],
            mutationFn: createOneCategoryService,
            onSuccess: () => {
                queryClient.invalidateQueries(
                    "admin_category"
                ) // refetch get query
            }
        }
    )
}

export const useGetOneCategory = (id) => {
    const query = useQuery(
        {
            queryKey: ["admin_category_detail", id],
            queryFn: () => getOneCategoryService(id),
            enabled: !!id, // id is not null or undefined
            retry: false // tries 3 times default
        }
    )
    const category = query.data?.data || {}
    return {
        ...query, category
    }
}
// id = "123" -> !!id = true
// id = undefined -> !!id = false

export const useUpdateOneCategory = () => {
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationFn: ({id, data}) => updateOneCategoryService(id, data),
            mutationKey: ["admin_category_update"],
            onSuccess: () => {
                toast.success("Updated")
                queryClient.invalidateQueries(
                    ["admin_category", "admin_category_detail"]
                )
            },
            onError: (err) => {
                toast.error(err.message || "Update failed")
            }
        }
    )
}

export const useDeleteOneCategory = () => {
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationFn: deleteOneCategoryService,
            mutationKey: ["admin_category_delete"],
            onSuccess: () => {
                toast.success("Deleted")
                queryClient.invalidateQueries(["admin_category"])
            },
            onError: (err) => {
                toast.error(err.message || "Delete Failed")
            }
        }
    )
}