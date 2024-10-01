import React, { useEffect, useState, useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlay } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

import "./Carousel.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


export default function Carousel() {

    const [data, setData] = useState([])

    useEffect(() => {
        try {
            fetch("https://api.themoviedb.org/3/movie/popular?api_key=155ac120887e5a211953b1e9e999319f")
                .then((res) => res.json())
                .then(data => {
                    setData(data.results)
                })
                .catch(error => console.error(`ERROR: ${error}`))
        } catch (error) {
            console.error(`ERROR: ${error}`)
        }
    }, [])




    return (
        <div >
            <Swiper
                pagination={true}
                rewind={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]} className="mySwiper">
                {
                    data.map((element) => {
                        return (
                            <SwiperSlide>
                                <div className='back' key={element.id}>
                                    <div>
                                        <img className='w-full h-screen object-cover' src={`https://image.tmdb.org/t/p/w1280/${element.backdrop_path}`} />
                                    </div>
                                    <div className='w-11/12 m-auto left-0 right-0 absolute z-10 top-0 py-80 '>
                                        <div className='w-[80%] xl:w-[70%]'>
                                            <h1 className='text-3xl xk:text-8xl font-Urbanist text-white font-bold'>{element.original_title.slice(0, 20)}</h1>
                                        </div>
                                        <div className='w-[90%] xl:w-[50%]' style={{ zIndex: "3" }}>
                                            <span className='font-Urbanist text-slate-600'>{element.release_date}</span>
                                            <p className='font-Urbanist text-white'>{element.overview}</p>
                                            <div className='flex gap-10 mt-[20px]'>
                                                <button className='flex items-center bg-white p-3 gap-3 rounded-3xl'>Mirar Ahora <FaPlay /></button>
                                                <button className='flex items-center bg-trasnparent border border-white text-white p-3 gap-3 rounded-3xl'>Detalles <MdNavigateNext color='white' size={30} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    )
}
