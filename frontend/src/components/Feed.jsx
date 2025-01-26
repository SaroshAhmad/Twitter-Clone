import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'

const Feed = () => {
    const { tweets } = useSelector(store => store.tweets);
    return (
        <div className="w-full lg:w-[600px] min-h-screen border-x border-zinc-800">
            <div className="sticky top-0 z-10 backdrop-blur-xl bg-black/70">
                <CreatePost />
                {
                    tweets?.map((tweet) => <Tweet key={tweet?.id} tweet={tweet} />)
                }
            </div>
            {/* Add posts here */}
        </div>
    );
};

export default Feed