import React from 'react'
import Avatar from 'react-avatar'
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";






const Tweet = () => {
    return (
        <div>
            <div className='flex p-4'>
                <Avatar src='https://pbs.twimg.com/profile_images/1448239823/IMG_0001_400x400.jpg' size='40' round={true} />
                <div className='ml-2'>
                    <div className='flex items-center'>
                        <h1 className='font-bold'>Name</h1>
                        <p className='text-gray-500 text-sm ml-1'>@username</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores, eum ut vitae doloribus beatae delectus animi consequuntur neque eaque similique repellat, omnis velit. Facere minus facilis blanditiis dolorum eos!</p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center  cursor-pointer'>
                            <div className='p-2 text-gray-500  hover:text-blue-500'>
                                <FaRegComment size="20px" />
                            </div>
                            <p className='ml-2'>0</p>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <div className='p-2 text-gray-500 hover:text-green-500'>
                                <BiRepost size="24px" />
                            </div>
                            <p className='ml-2'>0</p>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <div className='p-2 text-gray-500 hover:text-red-500'>
                                <CiHeart size="24px" />
                            </div>
                            <p className='ml-2'>0</p>

                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <div className='p-2 text-gray-500 hover:text-blue-500'>
                                <FiBarChart2 size="24px" />
                            </div>
                            <p className='ml-2'>0</p>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <div className='p-2 text-gray-500 hover:text-blue-500'>
                                <CiBookmark size="20px" />
                            </div>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <div className='p-2 text-gray-500 hover:text-blue-500'>
                                <FiShare size="20px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Tweet