import React, { useState, useEffect, useRef } from 'react'
import { Video } from '../types'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi'
import { BsPlay, BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'




interface IProps {
    post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
    const [isHover, setIsHover] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [isVideoMuted, setIsVideoMuted] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    // similar to getElementById in html, to manipulate the video element
//to stop ts complaining, add question mark. add type to videoRef
    const onVideoPress = () => {
        if(playing) {
            //if the video is playing, when youb press the button, it will pause, and pause button will appear
            //this videoRef is going to be attched to HTMLVideoElement, then has the pause and play properties
            videoRef?.current?.pause();
            setPlaying(false)
        } else {
videoRef?.current?.play()
setPlaying(true)
        }
    }

    return (
        <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
            <div>
                <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
                    <div className='md:w-16 md:h-16 w-10 h-10'>
                        <Link href="/">
                            <>
                                <Image
                                    width={62}
                                    height={62}
                                    className="rounded-full"
                                    src={post.postedBy.image}
                                    alt="profile photo"
                                    layout="responsive"
                                />
                            </>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <div className='flex items-center gap-2' >
                                <p className='flex gap-2 items-center md:text-md font-bold text-primary'>
                                    {post.postedBy.userName} {` `}
                                    <GoVerified className='text-blue-400 text-md' />
                                </p>
                                <p className='capitalize font-medium text-xs text-gray-500 hidden md:block'>
                                    {post.postedBy.userName}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='lg:ml-20 flex gap-4 relative'>
                <div
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className='rounded-3xl'>
                    <Link href="/">
                        <video
                            loop
                            ref={videoRef}
                            className='lg:w-[600px] h-[300px] md:h-[400px] lg:h-[500px] w-[200px] rounded-2xl cursor-pointer bg-gray-100'
                            src={post.video.asset.url}
                        />


                    </Link>

                    {/* hover over video, buttons will show up */}
                    {isHover && (
                        <div className='absolute bottom-6 cursor-pointer left-8 flex gap-10 md:left-14 lg:left-0 lg:justify-between  w-[100px] md:w-[50px] p-3'>
                            {playing ? (
                                <button onClick={onVideoPress}
                                className='text-black text-2xl lg:text-4xl'>
                                    <BsFillPauseFill />
                                </button>
                            ) : (
                                <button onClick={onVideoPress}
                                className='text-black text-2xl lg:text-4xl'>
                                    <BsFillPlayFill />
                                </button>
                            )}

                            {isVideoMuted ? (
                                <button onClick={() => setIsVideoMuted(false)}
                                className='text-black text-2xl lg:text-4xl'>
                                    <HiVolumeOff />
                                </button>
                            ) : (
                                <button onClick={() => setIsVideoMuted(true)}
                                className='text-black text-2xl lg:text-4xl'>
                                    <HiVolumeUp />
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default VideoCard