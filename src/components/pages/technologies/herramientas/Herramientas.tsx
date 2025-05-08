import React from 'react'

const Herramientas = () => {
    return (
        <>
            <div className="flex flex-col gap-2 ml-[.5rem]">
                <div className='flex items-center gap-2'>

                    <h2 className="text-[1.5rem] text-[#01f1a3]">Herramientas</h2>
                </div>
                <div className='flex gap-6 flex-wrap'>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/git.png" alt="Git" />
                        <small className="text-[1rem] leading-5">Git</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/github.png" alt="GitHub" />
                        <small className="text-[1rem] leading-5">GitHub</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/vscode.png" alt="VSCode" />
                        <small className="text-[1rem] leading-5">VSCode</small>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <img className="w-[2rem] h-[2rem]" src="/img/pixelArt/npm.png" alt="Npm" />
                        <small className="text-[1rem] leading-5">npm</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herramientas