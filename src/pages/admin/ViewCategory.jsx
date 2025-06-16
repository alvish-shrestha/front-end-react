import React from 'react'
import { useGetOneCategory } from '../../hooks/admin/useAdminCategory'
import { useParams } from 'react-router-dom'
import { getBackendImageUrl } from '../../utils/backend-image'

export default function ViewCategory() {
    const { id } = useParams()
    const { category, isPending, error } = useGetOneCategory(id)

    if (isPending) <>Loading...</>
    if (error) <>{error}</>

    return (
        <div>
            ViewCategory
            {category.name}
            <img 
                className="w-50 h-50 object-cover"
                src={getBackendImageUrl(category.filepath)}
            >
            </img>
        </div>
    )
}
