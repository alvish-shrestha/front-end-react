import React from 'react'
import { useAdminCategory } from "../../hooks/admin/useAdminCategory";
import { getBackendImageUrl } from '../../utils/backend-image';

export default function CategoryTable() {
    const { categories, isPending, error } = useAdminCategory()

    if (error) return <>{error.message}</>

    return (
        <div>CategoryTable
            <table className='min-w-full table-auto'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Image</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map(
                            (row) =>
                                <tr>
                                    <td>{row.name}</td>
                                    <td>
                                        <img
                                            className='w-16 h-16 object-cover'
                                            src={getBackendImageUrl(row.filepath)}
                                        >
                                        </img>
                                        {row.image}
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
