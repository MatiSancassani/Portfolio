
import { useState, useEffect } from 'react';
const Proyectos = () => {
    const simbol = ">"
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = 'Experiencia';
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
        }, 8000);

        return () => clearTimeout(delay);
    }, []);

    const [showDivComand, setShowDivComand] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDivComand(true);
        }, 5500);

        return () => clearTimeout(timer);
    }, []);



    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDiv(true);
        }, 9500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='ml-[.5rem]'>
            <div className="">
                {showDivComand && (

                    <div className="mt-[.5rem]">
                        <div className="mt-[.5rem] relative">
                            C:\Users\Matias Sancassani{simbol}{text}
                            {showCursor && ( // Condicional para mostrar el cursor solo si showCursor es true
                                <div className="absolute bg-white cursor-blink top-[.8rem] w-[8px] h-[5px]"></div>
                            )}
                        </div>
                    </div>
                )}

                {showDiv && (
                    <div className='flex flex-col'>
                        <div className="mt-[.5rem] flex items-center gap-[5px]">
                            <div>{simbol}</div>
                            <h1 className="text-[2rem] text-[#c1c1c2]">Experiencia</h1>
                        </div>
                        <div>
                            <p className='text-[#ffc004]'>Frontend</p>
                            <div>

                                <div className="ml-[1rem] group mb-[1rem]">
                                    <div className='flex items-center gap-2'>
                                        <a href="https://municipiosanjuan.gob.ar" target="_blank">
                                            <p className='flex'>(<span className="invisible group-hover:visible">*</span>)
                                                MUNICIPALIDAD DE SAN JUAN
                                            </p>
                                        </a>
                                        <div className='flex gap-2'>
                                            <p>[</p>
                                            <a href="https://github.com/Municipalidad-de-Capital" target="_blank">
                                                <img className='w-[1.5rem] h-[1.5rem]' src="/img/pixelArt/github.png" alt="" />
                                            </a>
                                            <p>]</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Sitio web de la Municipalidad de San Juan</p>

                                        <div className='flex gap-4'>
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/react.png" alt="ReactJS" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/tailwind.png" alt="Tailwind" />
                                        </div>
                                    </div>

                                </div>

                                <div className="ml-[1rem] group mb-[1rem]">
                                    <div className='flex items-center gap-2'>
                                        <a href="https://big-burger-front.vercel.app" target="_blank">
                                            <p className='flex'>(<span className="invisible group-hover:visible">*</span>)
                                                BIGBURGER
                                            </p>
                                        </a>
                                        <div className='flex gap-2'>
                                            <p>[</p>
                                            <a href="https://github.com/MatiSancassani/BigBurgerFront" target="_blank">
                                                <img className='w-[1.5rem] h-[1.5rem]' src="/img/pixelArt/github.png" alt="" />
                                            </a>
                                            <p>]</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Ecommerce para hamburgueseria</p>

                                        <div className='flex gap-4'>
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/react.png" alt="ReactJS" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/tailwind.png" alt="Tailwind" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/chakra.png" alt="Chakra" />
                                        </div>
                                    </div>

                                </div>
                                <div className="ml-[1rem] group mb-[1rem]">
                                    <div className='flex items-center gap-2'>
                                        <a href="https://matisancassani.github.io/paradavip/" target="_blank">
                                            <p>(<span className="invisible group-hover:visible">*</span>)
                                                PARADA VIP
                                            </p>
                                        </a>
                                        <div className='flex gap-2'>
                                            <p>[</p>
                                            <a href="https://github.com/MatiSancassani/paradavip" target="_blank">
                                                <img className='w-[1.5rem] h-[1.5rem]' src="/img/pixelArt/github.png" alt="" />
                                            </a>
                                            <p>]</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Proyecto sobre emprendimiento personal</p>

                                        <div className='flex gap-4'>
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/html.png" alt="Html" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/css.png" alt="Css" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/javascript.png" alt="Javascript" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/bootstrap.png" alt="bootstrap" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-[1rem] group mb-[1rem]">
                                    <div className='flex items-center gap-2'>
                                        <a href="https://matisancassani.github.io/vikinga/" target="_blank">
                                            <p>(<span className="invisible group-hover:visible">*</span>)
                                                VIKINGA STORE
                                            </p>
                                        </a>

                                        <div className='flex gap-3'>
                                            <p>[</p>
                                            <a href="https://github.com/MatiSancassani/vikinga" target="_blank">
                                                <img className='w-[1.5rem] h-[1.5rem]' src="/img/pixelArt/github.png" alt="" />
                                            </a>
                                            <p>]</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Ecommerce para una tienda de ropa</p>
                                        <div className='flex gap-4'>
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/html.png" alt="Html" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/css.png" alt="Css" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/javascript.png" alt="Javascript" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#257c77]'>Backend</p>
                            <div>
                                <div className="ml-[1rem] group mb-[1rem]">
                                    <div className='flex items-center gap-2'>
                                        <a href="https://big-burger-front.vercel.app" target="_blank">
                                            <p className='flex'>(<span className="invisible group-hover:visible">*</span>)
                                                BIGBURGER
                                            </p>
                                        </a>
                                        <div className='flex gap-2'>
                                            <p>[</p>
                                            <a href="https://github.com/MatiSancassani/BigBurgerBackend" target="_blank">
                                                <img className='w-[1.5rem] h-[1.5rem]' src="/img/pixelArt/github.png" alt="" />
                                            </a>
                                            <a href="" target="_blank">
                                                <img className='w-[1.5rem] h-[1.5rem]' src="/img/pixelArt/swagger.png" alt="" />
                                            </a>
                                            <p>]</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Backend web de hamburgueseria</p>

                                        <div className='flex gap-4'>
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/mongo.png" alt="MongoDB" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/express.png" alt="ExpressJS" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/node.png" alt="NodeJS" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )}


            </div>
        </div>
    )
}

export default Proyectos