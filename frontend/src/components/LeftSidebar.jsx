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
        <div className="h-full p-2 lg:p-4">
            {/* Logo */}
            <div className="p-2 lg:p-3 mb-2">
                <a href="/" className="w-12 h-12 flex items-center justify-center hover:bg-zinc-900 rounded-full transition-colors">
                    <img src={logo} alt="X logo" className="w-7 h-7" />
                </a>
            </div>

            {/* Navigation Menu */}
            <nav className="mb-4">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center lg:justify-start gap-4 text-xl p-3 hover:bg-zinc-900 rounded-full cursor-pointer transition-colors group"
                    >
                        <div className="flex items-center justify-center w-12 h-12">
                            {item.icon}
                        </div>
                        <span className="hidden lg:block pr-4">{item.label}</span>
                    </div>
                ))}
            </nav>

            {/* Post Button */}
            <div className="px-2">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold p-3 rounded-full transition-colors">
                    <span className="hidden lg:block">Post</span>
                    <span className="lg:hidden">+</span>
                </button>
            </div>
        </div>
    );
};

export default LeftSidebar;