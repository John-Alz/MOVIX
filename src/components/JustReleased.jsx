import React, { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useFetch } from '../hooks/useFetch';


export default function JustReleased() {
    const [value, setValue] = useState("day")

    const api_key = "155ac120887e5a211953b1e9e999319f";

    const { data, loading, error } = useFetch(`https://api.themoviedb.org/3/trending/movie/${value}?api_key=${api_key}`)

    return (
        <div className='ml-16'>
            <div className='w-[95%] ml-0 m-auto flex justify-between py-8' >
                <h2 className='text-white text-4xl font-bold'> {value == "day" ? "En tendencia Hoy" : "En tendencia esta Semana"}</h2>
                <div className='flex gap-5'>
                    <button onClick={() => setValue("day")} className='bg-white font-semibold px-4 py-1 rounded-lg'>Hoy</button>
                    <button onClick={() => setValue("week")} className='bg-white font-semibold px-4 py-1  rounded-lg'>Semana</button>
                </div>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {error && <p className='text-white text-center'>Error: {error}</p>}
                {loading && <p className='text-white text-center'>Loading</p>}
                {
                    data?.map((element) => {
                        return (
                            <div key={element.id} >
                                <SwiperSlide className='cursor-pointer'>
                                    <img src={`https://image.tmdb.org/t/p/w1280/${element.poster_path}`} />
                                    <div className='text-white'>
                                        <p>{element.original_title}</p>
                                        <div className='flex gap-3'>
                                            <span>{`⭐ ${element.vote_average}`}</span>
                                            <span>| Accion, Terror</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        )
                    })
                }
            </Swiper>

        </div >
    )
}
