import React from 'react'
import CreatePost from './CreatePost'

const Feed = () => {
    return (
        <div className="w-full lg:w-[600px] min-h-screen border-x border-zinc-800">
            <div className="sticky top-0 z-10 backdrop-blur-xl bg-black/70">
                <CreatePost />
            </div>
            {/* Add posts here */}
        </div>
    );
};

export default Feed