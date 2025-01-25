import React, { useState } from 'react';

// CreatePost.jsx
const CreatePost = () => {
    const [activeTab, setActiveTab] = useState('for-you');
    const [postText, setPostText] = useState('');

    return (
        <div className="border-b border-zinc-800">
            {/* Tabs */}
            <div className="flex">
                <button
                    onClick={() => setActiveTab('for-you')}
                    className={`flex-1 px-4 py-4 hover:bg-zinc-800/50 relative ${activeTab === 'for-you' ? 'font-bold' : 'text-zinc-400'
                        }`}
                >
                    For you
                    {activeTab === 'for-you' && (
                        <div className="absolute bottom-0 left-1/2 w-16 h-1 bg-blue-500 rounded-full -translate-x-1/2" />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('following')}
                    className={`flex-1 px-4 py-4 hover:bg-zinc-800/50 relative ${activeTab === 'following' ? 'font-bold' : 'text-zinc-400'
                        }`}
                >
                    Following
                    {activeTab === 'following' && (
                        <div className="absolute bottom-0 left-1/2 w-16 h-1 bg-blue-500 rounded-full -translate-x-1/2" />
                    )}
                </button>
            </div>

            {/* Post input area */}
            <div className="flex p-4">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex-shrink-0" />
                <img src="" alt="" />
                <div className="flex-1 ml-4">
                    <textarea
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                        className="w-full bg-transparent text-xl placeholder-zinc-500 outline-none resize-none min-h-[120px]"
                        placeholder="What is happening?!"
                    />
                    <div className="flex justify-between items-center mt-4">
                        {/* Media buttons */}
                        <div className="flex gap-4 text-blue-400">
                            {/* ... Media buttons (same as before) ... */}
                        </div>
                        <button
                            className={`px-4 py-1.5 rounded-full font-bold ${postText.trim() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-500/50 cursor-not-allowed'
                                }`}
                            disabled={!postText.trim()}
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;