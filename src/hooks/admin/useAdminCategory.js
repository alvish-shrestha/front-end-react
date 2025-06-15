import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllCategoryService, createOneCategoryService } from "../../services/admin/categoryService";

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