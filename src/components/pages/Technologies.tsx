
import { useState, useEffect } from 'react';

const Technologies = () => {

    const simbol = ">"
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = 'Tecnologias';
    useEffect(() => {
        // Retrasa la animación 2 segundos
        const delay = setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
                setText(fullText.slice(0, index + 1));
                index++;
                if (index === fullText.length) {
                    clearInterval(interval);
                    setTimeout(() => setShowCursor(false), 400);
                }
            }, 100);
        }, 4000);

        return () => clearTimeout(delay);
    }, []);

    const [showDivComand, setShowDivComand] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDivComand(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);


    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDiv(true);
        }, 5500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='ml-[1rem]'>
            {showDivComand && (

                <div className="mt-[1rem]">
                    <div className="mt-[.5rem] relative">
                        C:\Users\Matias Sancassani{simbol}{text}
                        {showCursor && ( // Condicional para mostrar el cursor solo si showCursor es true
                            <div className="absolute bg-white cursor-blink top-[.8rem] w-[8px] h-[5px]"></div>
                        )}
                    </div>
                </div>
            )}

            {showDiv && (

                <div>
                    <div className="flex items-center gap-[5px]">
                        <div>{simbol}</div>
                        <h1 className="text-[2rem] text-[#c1c1c2]">Tecnologias</h1>
                    </div>

                    <div className='flex flex-col gap-2 lg:flex-row '>
                        <div className="flex flex-col gap-4 border-2 p-4 border-dashed lg:max-w-[20rem]">
                            <h2 className="text-[1.5rem] text-[#ffc004]">Frontend</h2>

                            <div className="flex items-center lg:justify-center flex-wrap gap-4">
                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/html.png" alt="HTML" />
                                    <small className="text-[1rem] leading-5">HTML</small>
                                </div>

                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/css.png" alt="CSS" />
                                    <small className="text-[1rem] leading-5">CSS</small>
                                </div>

                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/javascript.png" alt="JavaScript" />
                                    <small className="text-[1rem] leading-5">JavaScript</small>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/react.png" alt="JavaScript" />
                                    <small className="text-[1rem] leading-5">ReactJS</small>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/tailwind.png" alt="JavaScript" />
                                    <small className="text-[1rem] leading-5">TailwindCSS</small>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/sass.png" alt="JavaScript" />
                                    <small className="text-[1rem] leading-5">SASS</small>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/bootstrap.png" alt="JavaScript" />
                                    <small className="text-[1rem] leading-5">Bootstrap</small>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 border-2 p-4 border-dashed lg:max-w-[10rem]">
                            <h2 className="text-[1.5rem] text-[#257c77]">Backend</h2>

                            <div className="flex lg:justify-center flex-wrap gap-4">
                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/node.png" alt="HTML" />
                                    <small className="text-[1rem] leading-5">NodeJS</small>
                                </div>

                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/express.png" alt="CSS" />
                                    <small className="text-[1rem] leading-5">ExpressJS</small>
                                </div>

                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/mongo.png" alt="JavaScript" />
                                    <small className="text-[1rem] leading-5">MongoDB</small>
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col gap-4 border-2 p-4 border-dashed lg:max-w-[15rem]">
                            <h2 className="text-[1.5rem] text-[#fd79ff]">Aprendiendo</h2>

                            <div className="flex flex-wrap gap-4 lg:justify-center">
                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/typescript.png" alt="HTML" />
                                    <small className="text-[1rem] leading-5">TypeScript</small>
                                </div>

                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/nest.png" alt="CSS" />
                                    <small className="text-[1rem] leading-5">NestJS</small>
                                </div>

                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/next.png" alt="JavaScript" />
                                    <small className="text-[1rem] leading-5">NextJS</small>
                                </div>

                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/postgress.png" alt="JavaScript" />
                                    <small className="text-[1rem] leading-5">PostgreSQL</small>
                                </div>

                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/docker.png" alt="JavaScript" />
                                    <small className="text-[1rem] leading-5">Docker</small>
                                </div>



                            </div>
                        </div>

                        <div className="flex flex-col gap-4 border-2 p-4 border-dashed lg:max-w-[12rem]">
                            <h2 className="text-[1.5rem] text-[#01f1a3]">Herramientas</h2>

                            <div className="flex flex-wrap gap-4 lg:justify-center">
                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/git.png" alt="HTML" />
                                    <small className="text-[1rem] leading-5">Git</small>
                                </div>

                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/github.png" alt="CSS" />
                                    <small className="text-[1rem] leading-5">GitHub</small>
                                </div>

                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/vscode.png" alt="JavaScript" />
                                    <small className="text-[1rem] leading-5">VSCode</small>
                                </div>

                                <div className="flex flex-col items-center gap-2 p-2 w-auto">
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/npm.png" alt="JavaScript" />
                                    <small className="text-[1rem] leading-5">npm</small>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            )}
        </div>
    )
}

export default Technologies