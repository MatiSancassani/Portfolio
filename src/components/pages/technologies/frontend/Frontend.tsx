
const Frontend = () => {
    return (
        <>
            <div className="flex flex-col gap-2 ml-[.5rem]">
                <div className='flex items-center gap-2'>

                    <h2 className="text-[1.5rem] text-[#ffc004]">Frontend</h2>
                </div>
                <div className='flex gap-4 flex-wrap'>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/html.png" alt="HTML" />
                        <small className="text-[1rem] leading-5">HTML</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/css.png" alt="CSS" />
                        <small className="text-[1rem] leading-5">CSS</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/javascript.png" alt="JavaScript" />
                        <small className="text-[1rem] leading-5">JavaScript</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/react.png" alt="ReactJS" />
                        <small className="text-[1rem] leading-5">ReactJS</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/chakra.png" alt="Chakra" />
                        <small className="text-[1rem] leading-5">ChakraUI</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/tailwind.png" alt="Tailwind" />
                        <small className="text-[1rem] leading-5">TailwindCSS</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/sass.png" alt="SASS" />
                        <small className="text-[1rem] leading-5">SASS</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/bootstrap.png" alt="Boostrap" />
                        <small className="text-[1rem] leading-5">Bootstrap</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frontend