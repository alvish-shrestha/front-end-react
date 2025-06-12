import { getAllProductService } from "../../services/admin/productService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";

export const useAdminProduct = () => {
    const [pageNumber, setPageNumber] = useState(1) 
    const [pageSize, setPageSize] = useState(10)
    const [search, setSearch] = useState("")
    const query = useQuery(
        {
            queryKey: ["admin_product", pageNumber, pageSize, search], // will query if state change
            queryFn: () => {
                return getAllProductService(
                    {
                        page: pageNumber,
                        limit: pageSize,
                        search: search
                    }
                )
            },
            // keepPreviousData: true
            onError: (err) => {
                toast.error(err)
            }
        }
    )

    const products = query.data?.data || []
    const pagination = query.data?.pagination || {
        page: 1, totalPages: 1, limit: 10
    }
    const canPreviousPage = pagination.page > 1
    const canNextPage = pagination.page < pagination.totalPages

    return {
        ...query,
        products,
        pagination,
        canPreviousPage,
        canNextPage,
        setPageNumber,
        setPageNumber,
        setPageSize,
        setSearch
    }
}