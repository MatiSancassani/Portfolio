import React from 'react'

const Aprendiendo = () => {
    return (
        <>
            <div className="flex flex-col gap-2 ml-[.5rem]">
                <div className='flex items-center gap-2'>

                    <h2 className="text-[1.5rem] text-[#fd79ff]">Aprendiendo</h2>
                </div>
                <div className='flex gap-4 flex-wrap'>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/next.png" alt="NextJS" />
                        <small className="text-[1rem] leading-5">NextJS</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/typescript.png" alt="TypeScript" />
                        <small className="text-[1rem] leading-5">TypeScript</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/nest.png" alt="NestJS" />
                        <small className="text-[1rem] leading-5">NestJS</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/postgress.png" alt="PostgreSQL" />
                        <small className="text-[1rem] leading-5">PostgreSQL</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/docker.png" alt="Docker" />
                        <small className="text-[1rem] leading-5">Docker</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aprendiendo