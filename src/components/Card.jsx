import React from 'react'

export default function Card({ poster_path, original_title, release_date }) {


    return (
        <div className='w-[236px] h-[373px]'>
            <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
            <div className='text-white'>
                <h2 className='text-lgl'>{original_title}</h2>
                <p className='text-sm text-[gray]'>{release_date}</p>
            </div>
        </div>
    )
}
