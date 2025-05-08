import React from 'react'

const Backend = () => {
    return (
        <>
            <div className="flex flex-col gap-2 ml-[.5rem]">
                <div className='flex items-center gap-2'>
                    <h2 className="text-[1.5rem] text-[#257c77]">Backend</h2>
                </div>
                <div className='flex gap-4 flex-wrap'>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/node.png" alt="NodeJS" />
                        <small className="text-[1rem] leading-5">NodeJS</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/express.png" alt="ExpressJS" />
                        <small className="text-[1rem] leading-5">ExpressJS</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/mongo.png" alt="MongoDB" />
                        <small className="text-[1rem] leading-5">MongoDB</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Backend