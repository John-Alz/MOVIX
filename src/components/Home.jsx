import React from 'react'
import CarBrands from './CarBrands'
import JustReleased from './JustReleased'
import Upcoming from './UpComing'
import MoviesHome from './MoviesHome'
import SeriesHome from './SeriesHome'
import Footer from './Footer'
import Carousel from './Carousel'

export default function Home() {
    return (
        <div className="">
            <div className='w-full h-screen '>
                <Carousel />
            </div>
            <div >
                <CarBrands />
                <JustReleased />
                <Upcoming />
                <MoviesHome />
                <SeriesHome />
            </div>

        </div>
    )
}
