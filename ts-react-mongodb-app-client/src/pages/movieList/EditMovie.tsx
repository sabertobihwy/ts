import React from 'react'
import { useParams } from "react-router-dom";


const EditMovie: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    return (
        <div>
            <h1>EditMovie : {id}</h1>
        </div>
    )
}

export default EditMovie