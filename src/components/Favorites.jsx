import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

export default function Favorites() {

    const data = useSelector(state => state.movies.moviesFavorites)
    const loading = useSelector(state => state.movies.loading)
    const error = useSelector(state => state.movies.error)

    return (
        <div className='w-11/12 m-auto pt-20'>
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
        </div>

    )
}
