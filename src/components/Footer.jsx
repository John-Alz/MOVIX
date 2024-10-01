import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";





export default function Footer() {
    return (
        <div className='text-white flex w-full p-16 border-t border-slate-800 mt-20'>
            <div className='flex flex-col gap-16  w-[50%]'>
                <h2 className='text-3xl font-bold'>
                    Neque porro quisquam <br /> est qui dolorem <br />  ipsum quia dolor sit <br />  amet, consectetur, adipisci velit
                </h2>
                <div className='flex gap-10'>
                    <p className='cursor-pointer'>Politicas de Privacidad</p>
                    <p className='cursor-pointer'>Terminos y Condiciones</p>
                    <p className='cursor-pointer'>Idioma</p>
                </div>
            </div>
            <div className='flex flex-col justify-between w-[50%]'>
                <div className='flex justify-end gap-3'>
                    <p className='cursor-pointer'>Inicio</p>
                    <p>/</p>
                    <p className='cursor-pointer'>Explorar</p>
                    <p>/</p>
                    <p className='cursor-pointer'>Influencia</p>
                    <p>/</p>
                    <p className='cursor-pointer'>Release</p>
                </div>
                <div className='flex justify-end gap-9'>
                    <FaInstagram size={35} className='cursor-pointer' />
                    <FaSquareFacebook size={35} className='cursor-pointer' />
                    <FaXTwitter size={35} className='cursor-pointer' />
                    <FaGoogle size={35} className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
