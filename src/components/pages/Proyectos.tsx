
import { useState, useEffect } from 'react';
const Proyectos = () => {
    const simbol = ">"
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = 'Proyectos';
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
        }, 10500);

        return () => clearTimeout(delay);
    }, []);

    const [showDivComand, setShowDivComand] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDivComand(true);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);



    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDiv(true);
        }, 12000);

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
                            <h1 className="text-[2rem] text-[#c1c1c2]">Proyectos</h1>
                        </div>
                        <div className="ml-[1rem] group mb-[1rem]">
                            <div>
                                <a href="https://big-burger-front.vercel.app" target="_blank">
                                    <p>(<span className="invisible group-hover:visible">*</span>)
                                        BIGBURGER \ Ecommerce para hamburgueseria
                                        (<span className="text-[#fffe60]">En desarrollo</span>)
                                    </p>
                                </a>
                            </div>
                            <div className='flex gap-4'>
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/react.png" alt="ReactJS" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/tailwind.png" alt="Tailwind" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/node.png" alt="NodeJS" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/express.png" alt="ExpressJS" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/mongo.png" alt="MongoDB" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/chakra.png" alt="Chakra" />
                            </div>
                        </div>
                        <div className="ml-[1rem] group mb-[1rem]">
                            <div>
                                <a href="https://matisancassani.github.io/paradavip/" target="_blank">
                                    <p>(<span className="invisible group-hover:visible">*</span>)
                                        PARADA VIP \ Proyecto sobre emprendimiento personal
                                    </p>
                                </a>
                            </div>
                            <div className='flex gap-4'>
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/html.png" alt="Html" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/css.png" alt="Css" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/javascript.png" alt="Javascript" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/bootstrap.png" alt="bootstrap" />
                            </div>
                        </div>
                        <div className="ml-[1rem] group mb-[1rem]">
                            <div className=''>
                                <a href="https://matisancassani.github.io/vikinga/" target="_blank">
                                    <p>(<span className="invisible group-hover:visible">*</span>)
                                        VIKINGA STORE \ Ecommerce para una tienda de ropa
                                    </p>
                                </a>
                            </div>
                            <div className='flex gap-4'>
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/html.png" alt="Html" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/css.png" alt="Css" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/javascript.png" alt="Javascript" />
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}

export default Proyectos