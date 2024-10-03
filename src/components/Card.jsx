import React from 'react'

export default function Card({ poster_path, original_title, vote_average }) {
    return (
        <div className='w-[256px] h-[373px]'>
            <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} />
            <div className='text-white'>
                <p>{original_title}</p>
                <div className='flex gap-3'>
                    <span>{`⭐ ${vote_average}`}</span>
                    <span>| Accion, Terror</span>
                </div>
            </div>
        </div>
    )
}
