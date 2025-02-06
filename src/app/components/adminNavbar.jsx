"use client";
import { useState } from "react";
import Image from "next/image";
import userImg from "../../../public/profile.png";
import { MdOutlineAddHome, MdOutlineDashboardCustomize } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { TbReport, TbLogout2 } from "react-icons/tb";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const AdminSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mt-0">
            {/* Mobile Navbar */}
            <div className="md:hidden mt-4 ml-4 absolute flex justify-end rounded-full z-20 items-center p-4 bg-white text-black shadow-md">
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>


            <div className={`h-screen w-64 bg-gray-800 text-white flex flex-col p-5 shadow-xl fixed md:relative transition-all duration-300 ${isOpen ? "left-0" : "-left-64"} md:left-0 md:flex`}>
                {/* User Profile */}
                <div className="flex flex-col items-center mb-8">
                    <Image
                        src={userImg.src}
                        alt="User Avatar"
                        width={70}
                        height={70}
                        className="rounded-full border-2 border-gray-500 hover:border-white transition-all duration-300"
                    />
                    <h2 className="text-lg font-semibold mt-3">Admin Name</h2>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col space-y-4 flex-grow">
                    <Link href="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-600 hover:scale-105 hover:shadow-md transition-all duration-300">
                        <MdOutlineAddHome size={25} />
                        <span className="font-medium">Home</span>
                    </Link>
                    <Link href="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-600 hover:scale-105 hover:shadow-md transition-all duration-300">
                        <MdOutlineDashboardCustomize size={25} />
                        <span className="font-medium">Dashboard</span>
                    </Link>
                    <Link href="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-600 hover:scale-105 hover:shadow-md transition-all duration-300">
                        <CiSettings size={25} />
                        <span className="font-medium">Settings</span>
                    </Link>
                    <Link href="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-600 hover:scale-105 hover:shadow-md transition-all duration-300">
                        <TbReport size={25} />
                        <span className="font-medium">Reports</span>
                    </Link>
                </nav>

                {/* Logout Button */}
                <button className="mt-auto flex items-center space-x-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95">
                    <TbLogout2 size={28} className="text-white" />
                    <span className="font-semibold tracking-wide">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
