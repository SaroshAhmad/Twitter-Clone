import React from 'react'
import logo from '../../public/logo.svg'
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";

const LeftSidebar = () => {
    const menuItems = [
        { icon: <GoHomeFill className="text-2xl" />, label: "Home" },
        { icon: <IoSearch className="text-2xl" />, label: "Explore" },
        { icon: <IoNotificationsOutline className="text-2xl" />, label: "Notifications" },
        { icon: <FaRegEnvelope className="text-2xl" />, label: "Messages" },
        { icon: <HiOutlineUsers className="text-2xl" />, label: "Communities" },
        { icon: <FaXTwitter className="text-2xl" />, label: "Premium" },
        { icon: <FaRegUser className="text-2xl" />, label: "Profile" },
        { icon: <CiCircleMore className="text-2xl" />, label: "More" }
    ];

    return (
        <div className="fixed flex flex-col px-3 text-white">
            {/* Logo section */}
            <div className="p-3 mb-2">
                <a href="/" className="w-12 h-12 flex items-center justify-center hover:bg-zinc-900 rounded-full transition-colors">
                    <img src={logo} alt="X logo" className="w-7 h-7" />
                </a>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 text-xl px-4 py-3 hover:bg-zinc-900 rounded-full cursor-pointer transition-colors"
                    >
                        {item.icon}
                        <span className="pr-4 font-normal">{item.label}</span>
                    </div>
                ))}
            </nav>

            {/* Post Button */}
            <div className="px-3 my-4">
                <button className="w-full bg-white hover:bg-zinc-200 text-black font-bold py-3.5 rounded-full transition-colors">
                    Post
                </button>
            </div>
        </div>
    );
};

export default LeftSidebar;