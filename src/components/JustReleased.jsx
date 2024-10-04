import React, { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useFetch } from '../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addMoviesFavorites } from '../redux/moviesSlice';


export default function JustReleased() {
    const [value, setValue] = useState("day")

    const dispatch = useDispatch();

    const api_key = "155ac120887e5a211953b1e9e999319f";

    useFetch(`https://api.themoviedb.org/3/trending/movie/${value}?api_key=${api_key}`)

    const data = useSelector(state => state.movies.trendingMovies)
    const loading = useSelector(state => state.movies.loading)
    const error = useSelector(state => state.movies.error)

    const handleFavorites = (id) => {
        let movieFound = data.find((movie) => movie.id === id)
        dispatch(addMoviesFavorites(movieFound))
    }


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
                    data?.map((element, index) => {
                        return (
                            <div key={index} >
                                <SwiperSlide className='cursor-pointer'>
                                    <img src={`https://image.tmdb.org/t/p/w1280/${element.poster_path}`} />
                                    <div className='text-white'>
                                        <h2 className='text-lgl'>{element.original_title.slice(0, 30)}</h2>
                                        <p className='text-sm text-[gray]'>{element.release_date}</p>
                                        <button onClick={() => { handleFavorites(element.id) }} className='p-8cursor-pointer bg-red-200'>Like</button>
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
