import React, { useEffect } from 'react'
import Card from './Card';
import { useFetch } from '../hooks/useFetch';
import { useSelector } from 'react-redux';

export default function Peliculas() {

    const api_key = "155ac120887e5a211953b1e9e999319f";


    useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
    const data = useSelector(state => state.movies.moviesList)
    const loading = useSelector(state => state.movies.loading)
    const error = useSelector(state => state.movies.error)


    return (
        <div className='w-11/12 m-auto pt-28'>
            <div className=' flex gap-8'>
                <button className='border border-white  px-2 py-1 rounded-3xl text-white hover:bg-custom-gray'>Todos</button>
                <button className='border border-white  px-2 py-1 rounded-3xl text-white hover:bg-custom-gray'>Destacados</button>
                <button className='border border-white  px-2 py-1 rounded-3xl text-white hover:bg-custom-gray'>Comedia</button>
                <button className='border border-white  px-2 py-1 rounded-3xl text-white hover:bg-custom-gray'>Animacion</button>
                <button className='border border-white  px-2 py-1 rounded-3xl text-white hover:bg-custom-gray'>Accion</button>
                <button className='border border-white  px-2 py-1 rounded-3xl text-white hover:bg-custom-gray'>Drama Ficcion</button>
                <button className='border border-white  px-2 py-1 rounded-3xl text-white hover:bg-custom-gray'>Terror</button>
                <button className='border border-white  px-2 py-1 rounded-3xl text-white hover:bg-custom-gray'>Aventura</button>
                <button className='border border-white  px-2 py-1 rounded-3xl text-white hover:bg-custom-gray'>Familia</button>
                <button className='border border-white  px-2 py-1 rounded-3xl text-white hover:bg-custom-gray'>Romance</button>
                <button className='border border-white  px-2 py-1 rounded-3xl text-white hover:bg-custom-gray'>Crimen</button>
            </div>
            <div className='w-[100%]'>
                <div className='w-[100%]  grid grid-cols-5 gap-y-20 gap-x-7 pt-14'>
                    {error && <p className='text-white text-center'>Error: {error}</p>}
                    {loading && <p className='text-white text-center'>Loading</p>}
                    {
                        data?.map((element) => {
                            return (
                                <div key={element.id} className='w-[217px] ' >
                                    <div className='cursor-pointer '>
                                        <Card poster_path={element.poster_path} original_title={element.original_title} release_date={element.release_date} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div >
    )
}
