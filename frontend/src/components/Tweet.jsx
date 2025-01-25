import React from 'react'
import Avatar from 'react-avatar'

const Tweet = () => {
    return (
        <div>
            <div className='flex'>
                <Avatar src='https://pbs.twimg.com/profile_images/1448239823/IMG_0001_400x400.jpg' size='40' round={true} />
                <div className='flex items-center ml-2'>
                    <h1 className='font-bold'>Name</h1>
                    <p className='text-gray-500 text-sm ml-2'>@username</p>
                </div>
            </div>
        </div>
    )
}

export default Tweet