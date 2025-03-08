import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import AddMovie from './Addmovie';
import { MovieService } from '../../service/MovieService';
import { IMovie } from '../../interface/IMovie';
import { IResponseData, IResponseError } from '../../interface/CommonTypes';
import { i } from 'react-router/dist/development/fog-of-war-Cm1iXIp7';


const EditMovie: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [IMovie, setIMovie] = useState<IMovie>()
    console.log(id)
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const m = await MovieService.findMovieById(id!);
                // console.log(m)
                if (m.data !== null) {
                    setIMovie(m.data)
                }
            } catch (error) {
                console.error("获取电影数据失败", error);
            }
        };
        fetchMovie();
    }, []);

    return (
        <AddMovie {...IMovie} onFinish={async (values, success, error) => {
            values._id = id
            const res: IResponseError | IResponseData<null> = await MovieService.editMovie(values)
            if (res.error !== "") {
                error(res.error)
            } else {
                success("edit success")
            }
        }} />
    )
}

export default EditMovie