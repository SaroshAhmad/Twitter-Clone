import React from 'react';

const RightSidebar = () => {
    const trends = [
        { category: "Technology", title: "React.js", posts: "25.4K" },
        { category: "Sports", title: "#WorldCup", posts: "44K" },
        { category: "Politics", title: "Elections", posts: "100K" },
    ];

    const whoToFollow = [
        { name: "React", handle: "@reactjs", verified: true },
        { name: "Next.js", handle: "@nextjs", verified: true },
        { name: "Tailwind CSS", handle: "@tailwindcss", verified: true },
    ];

    return (
        <div className="hidden lg:block w-[350px] ml-8 mr-4">
            <div className="fixed top-2 h-screen overflow-y-auto pb-20 w-[350px]">
                {/* Search */}
                <div className="sticky top-0 bg-black z-10 pb-3">
                    <div className="bg-zinc-900 rounded-full">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-zinc-900 text-white px-6 py-3 rounded-full outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* What's happening */}
                <div className="bg-zinc-900 rounded-2xl mb-4">
                    <h2 className="text-xl font-bold p-4">What's happening</h2>
                    {trends.map((trend, index) => (
                        <div
                            key={index}
                            className="px-4 py-3 hover:bg-zinc-800/50 cursor-pointer"
                        >
                            <p className="text-sm text-zinc-400">{trend.category}</p>
                            <p className="font-bold">{trend.title}</p>
                            <p className="text-sm text-zinc-400">{trend.posts} posts</p>
                        </div>
                    ))}
                    <button className="text-blue-400 hover:bg-zinc-800/50 w-full text-left p-4">
                        Show more
                    </button>
                </div>

                {/* Who to follow */}
                <div className="bg-zinc-900 rounded-2xl">
                    {/* ... Who to follow content (same as before) ... */}
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;