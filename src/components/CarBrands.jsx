import React, { useEffect, useState } from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";


export default function CarBrands() {

    let brandList = [
        {
            id: 1,
            name: "Disney",
            url: "https://i.postimg.cc/zvPfvGsR/logo-disney.png"
        },
        {
            id: 2,
            name: "Netflix",
            url: "https://i.postimg.cc/HWSnB6rs/Logonetflix.png"
        },
        {
            id: 3,
            name: "MAX",
            url: "https://i.postimg.cc/Bbv6JKV0/logo-max.webp"
        },
        {
            id: 4,
            name: "Pixar",
            url: "https://i.postimg.cc/7LNR8sJf/pixar-logo-white.png"
        },
        {
            id: 5,
            name: "Marvel",
            url: "https://i.postimg.cc/MT5HkDt5/logo-marvel.png"
        },
        {
            id: 6,
            name: "StartWars",
            url: "https://i.postimg.cc/26ryXJd3/logo-startwars.webp"
        },
        {
            id: 7,
            name: "Paramount",
            url: "https://i.postimg.cc/R0kprkX1/Paramount-logo.png"
        },
        {
            id: 8,
            name: "Hulu",
            url: "https://i.postimg.cc/c4jszcVR/logo-green-bg.png"
        }
    ]




    return (
        <div className='h-5/4 w-[95%] m-auto'>
            <div className='w-full'>
                <div className='grid grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-4  xl:grid-rows-1 xl:grid-cols-8 gap-5 w-full p-5'>
                    {
                        brandList.map((element) => {
                            return (
                                <img key={element.id} className='p-5 bg-black rounded-lg w-[150px] h-[100px] ' src={element.url} alt={element.name} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
