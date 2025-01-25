import React from 'react';
import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto flex relative">
                {/* Left Sidebar */}
                <header className="fixed w-[88px] lg:w-[275px] h-screen flex flex-col">
                    <LeftSidebar />
                </header>

                {/* Main Content */}
                <main className="flex flex-grow ml-[88px] lg:ml-[275px]">
                    <Feed />
                    <RightSidebar />
                </main>
            </div>
        </div>
    );
};



export default Home
