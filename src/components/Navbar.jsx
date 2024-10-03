
import imgProfile from "../assets/imgs/Profile.png"
import searchIcon from "../assets/icons/search.svg"
import Carousel from './Carousel'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
        console.log(menuOpen);

    }

    return (
        <header className="reati">

            <div className=' w-11/12 left-[4%] absolute z-20 text-white pt-5'>
                <nav className='flex justify-between items-center'>
                    <h2 className='text-2xl md:text-4xl font-Urbanist font-bold cursor-pointer'>MOVIX</h2>
                    <div className="hidden xl:block"></div>
                    <ul className='hidden xl:flex gap-x-8 font-Urbanist'>
                        <li className='hover:border-b-2'><Link to={"/"}>Para ti</Link></li>
                        <li className='hover:border-b-2'><Link to={"/peliculas"}>Peliculas</Link></li>
                        <li className='hover:border-b-2'><a href='#'>Series</a></li>
                        <li className='hover:border-b-2'><a href='#'>Infantil</a></li>
                        <li className='hover:border-b-2'><a href='#'>Favoritos</a></li>
                    </ul>
                    <div className='flex gap-5'>
                        <form className='flex items-center relative'>
                            <input className='w-[200px] md:w-72 border-2 border-white rounded-3xl px-4 py-1 bg-transparent text-white placeholder:text-white' type='text' placeholder='Busca aca' />
                            <button className='absolute text-black right-3'><img src={searchIcon} /></button>
                        </form>
                        <img className='hidden xl:block h-12 cursor-pointer' src={imgProfile} alt='imgProfile' />
                    </div>
                    <div className="z-50 xl:hidden block cursor-pointer">
                        <IoMenu onClick={handleMenu} size={35} />
                    </div>

                </nav>
            </div>
            <div className={`absolute z-40 h-screen xl:hidden top-0 left-0 right-0  w-full bg-black  flex flex-col items-center gap-6 font-semibold teext-lg transform transition-transform ${menuOpen ? "opacity-100" : "opacity-0"}`} style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
                <div className="w-11/12 flex justify-between py-5">
                    <h2 className='text-2xl text-white md:text-4xl font-Urbanist font-bold cursor-pointer'>MOVIX</h2>
                    <button onClick={handleMenu}><IoMdClose size={30} color="white" /></button>
                </div>

                <ul className="w-[98%]">
                    <li className="list-none w-full text-left text-3xl text-white p-4">Para ti</li>
                    <li className="list-none w-full text-left text-3xl text-white  p-4">Peliculas</li>
                    <li className="list-none w-full text-left text-3xl text-white  p-4">Series</li>
                    <li className="list-none w-full text-left text-3xl text-white  p-4">Infantil</li>
                    <li className="list-none w-full text-lfet text-3xl text-white  p-4">Favoritos</li>
                </ul>

            </div>
        </header>

    )
}
