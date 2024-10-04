import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useFetch } from '../hooks/useFetch';
import { useSelector } from 'react-redux';

export default function Upcoming() {

    const api_key = "155ac120887e5a211953b1e9e999319f";

    useFetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`);

    const data = useSelector(state => state.movies.upCommingMovies)
    const loading = useSelector(state => state.movies.loading)
    const error = useSelector(state => state.movies.error)

    return (
        <div className='ml-16'>
            <div className='w-[95%] ml-0 m-auto flex justify-between py-8' >
                <h2 className='text-white text-4xl font-bold'>Proximos estrenos</h2>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {error && <p>ERROR: {error}</p>}
                {loading && <p>Loading</p>}
                {
                    data.map((element, index) => {
                        return (
                            <div key={index}>
                                <SwiperSlide className='cursor-pointer'>
                                    <div className='flex'>
                                        <p className='text-white text-6xl flex items-center mr-4'>{index + 1}</p>
                                        <img className='w-[30%] rounded-lg' src={`https://image.tmdb.org/t/p/w1280/${element.poster_path}`} />
                                        <div className='text-white flex flex-col gap-3 pl-2 '>
                                            <p>{element.original_title
                                                ? element.original_title.slice(0, 13)
                                                : element.original_name
                                                    ? element.original_name.slice(0, 32)
                                                    : 'No title available'}</p>
                                            <div className='flex flex-col gap-3 '>
                                                <span className='text-slate-700'> Accion, Terror</span>
                                                <span>{`⭐ ${Math.round(element.vote_average)}`}</span>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            </div>
                        )
                    })
                }
            </Swiper>

        </div>
    )
}

