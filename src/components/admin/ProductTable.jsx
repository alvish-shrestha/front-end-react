import { useAdminProduct } from "../../hooks/admin/useAdminProduct";
import React from 'react'

export default function ProductTable() {
    const { products, setPageNumber, error, pagination, isPending, canPreviousPage, canNextPage, setPageSize, setSearch } = useAdminProduct()

    const handlePrev = () => {
        if (pagination.page > 1) {
            setPageNumber((prev) => prev - 1)
        }
    }

    const handleNext = () => {
        if (pagination.page < pagination.totalPages) {
            setPageNumber((prev) => prev + 1)
        }
    }
    
    const handleSearch = (e) => {
        setPageNumber(1) // reset page per search
        setSearch(e.target.value)
    }

    return (
        <div>
            ProductTable
            <label>Show</label>
            <select
                value={pagination.limit}
                onChange={(e) => {
                    setPageSize(Number(e.target.value))
                }}
            >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
            </select>

            <div>
                <label>Search</label>
                <input onChange={handleSearch}></input>
            </div>

            <table className="min-w-full table-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((row) => (
                            <tr key={row._id}>
                                <td>{row.name}</td>
                                <td>{row.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {/* Pagination Logic */}
            <div className="mt-4 flex items-center justify-between">
                <button 
                    onClick={handlePrev}
                    disabled={!canPreviousPage}
                >
                    Prev
                </button>
                <div className="mt-4 flex items-center justify-between">
                    <span>Page {pagination.page} of {pagination.totalPages}</span>
                </div>
                <button 
                    onClick={handleNext}
                    disabled={!canNextPage}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
