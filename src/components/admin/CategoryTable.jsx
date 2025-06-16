import React from 'react'
import { useAdminCategory } from "../../hooks/admin/useAdminCategory";
import { getBackendImageUrl } from '../../utils/backend-image';
import { Link } from 'react-router-dom';

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
                        <td>Actions</td>
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
                                    <td>
                                        <Link to={"/admin/categories/" + row._id}>
                                            <button>View</button>
                                        </Link>

                                        <Link to={"/admin/categories/" + row._id + "/edit"}>
                                            <button>Edit</button>
                                        </Link>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
