import React from 'react'
import CarBrands from './CarBrands'
import JustReleased from './JustReleased'
import Upcoming from './UpComing'
import MoviesHome from './MoviesHome'
import SeriesHome from './SeriesHome'
import Footer from './Footer'

export default function Home() {
    return (
        <div className="">
            <CarBrands />
            <JustReleased />
            <Upcoming />
            <MoviesHome />
            <SeriesHome />
            <Footer />
        </div>
    )
}
