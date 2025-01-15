
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
        <div className='ml-[1rem]'>
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
                    <div>
                        <div className="mt-[.5rem] flex items-center gap-[5px]">
                            <div>{simbol}</div>
                            <h1 className="text-[2rem] text-[#c1c1c2]">Proyectos</h1>
                        </div>
                        <div className="ml-[1rem] group">
                            <a href="https://big-burger-theta.vercel.app/" target="_blank">
                                <p>(<span className="invisible group-hover:visible">*</span>)
                                    BIGBURGER \ Ecommerce para hamburgueseria creado con stack MERN
                                    (<span className="text-[#fffe60]">En desarrollo</span>)
                                </p>
                            </a>
                        </div>
                        <div className="ml-[1rem] group">
                            <a href="https://matisancassani.github.io/paradavip/" target="_blank">
                                <p>(<span className="invisible group-hover:visible">*</span>)
                                    PARADA VIP \ Proyecto de practica sobre emprendimiento personal (HTML, CSS, JS)
                                </p>
                            </a>
                        </div>
                        <div className="ml-[1rem] group">
                            <a href="https://matisancassani.github.io/vikinga/" target="_blank">
                                <p>(<span className="invisible group-hover:visible">*</span>)
                                    VIKINGA STORE \ Ecommerce para tienda de ropa
                                </p>
                            </a>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}

export default Proyectos