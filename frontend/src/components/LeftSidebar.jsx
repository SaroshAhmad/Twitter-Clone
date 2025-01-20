import React from 'react'
import logo from '../../public/logo.svg'
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";


const LeftSidebar = () => {
    return (
        <div>
            <div>
                <div>
                    <a href="#">
                        <img width={24} src={logo} alt="X-logo" className='hover: cursor-pointer' />
                    </a>
                </div>
                <div className='text-white text-2xl py-6'>
                    <div className='flex gap-2 cursor-pointer py-6'>
                        <GoHomeFill className='text-3xl' />
                        <h2>Home</h2>
                    </div>
                    <div className='flex gap-2 cursor-pointer py-6'>
                        <IoSearch className='text-3xl' />
                        <h2>Explore</h2>
                    </div>
                    <div className='flex gap-2 cursor-pointer py-6'>
                        <GoHomeFill className='text-3xl' />
                        <h2>Home</h2>
                    </div>
                    <div className='flex gap-2 cursor-pointer py-6'>
                        <GoHomeFill className='text-3xl' />
                        <h2>Home</h2>
                    </div>
                    <div className='flex gap-2 cursor-pointer py-6'>
                        <GoHomeFill className='text-3xl' />
                        <h2>Home</h2>
                    </div>
                    <div className='flex gap-2 cursor-pointer py-6'>
                        <GoHomeFill className='text-3xl' />
                        <h2>Home</h2>
                    </div>
                    <div className='flex gap-2 cursor-pointer py-6'>
                        <GoHomeFill className='text-3xl' />
                        <h2>Home</h2>
                    </div>
                    <div className='flex gap-2 cursor-pointer py-6'>
                        <GoHomeFill className='text-3xl' />
                        <h2>Home</h2>
                    </div>
                    <div className='flex gap-2 cursor-pointer py-6'>
                        <button className='bg-white text-black text-lg font-semibold px-24 py-3 rounded-full'>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar