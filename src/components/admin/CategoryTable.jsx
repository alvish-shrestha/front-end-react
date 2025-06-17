import React, { useState } from 'react'
import { useAdminCategory, useDeleteOneCategory } from "../../hooks/admin/useAdminCategory";
import { getBackendImageUrl } from '../../utils/backend-image';
import { Link } from 'react-router-dom';
import DeleteModal from '../DeleteModal';

export default function CategoryTable() {
    const { categories, isPending, error } = useAdminCategory()
    const categoryDeleteHook = useDeleteOneCategory()
    const [deleteId, setDeleteId] = useState(null)

    const handleDelete = () => {
        categoryDeleteHook.mutate(
            deleteId,
            {
                onSuccess: () => {
                    setDeleteId(null)
                }
            }
        )
    }

    if (error) return <>{error.message}</>

    return (
        <div>CategoryTable
            <DeleteModal
                isOpen={deleteId}
                onClose={() => setDeleteId(null)}
                title="Delete Confirmation"
                description="Are you sure you want to delete?"
                onConfirm={handleDelete}
            ></DeleteModal>
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

                                        <button onClick={() => setDeleteId(row._id)}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
