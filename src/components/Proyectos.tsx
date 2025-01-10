
import { useState, useEffect } from 'react';
const Proyectos = () => {
    const simbol = ">"
    const [text, setText] = useState('');
    const fullText = 'Proyectos';
    useEffect(() => {
        // Retrasa la animación 2 segundos
        const delay = setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
                setText(fullText.slice(0, index));
                index++;
                if (index > fullText.length) clearInterval(interval);
            }, 100);
        }, 7300);

        return () => clearTimeout(delay);
    }, []);

    const [showDivComand, setShowDivComand] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDivComand(true);
        }, 5600);

        return () => clearTimeout(timer);
    }, []);



    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDiv(true);
        }, 8900);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="mt-[1rem]">
                {showDivComand && (

                    <div className="mt-[1rem]">
                        <p className="relative">C:\Users\Matias Sancassani{simbol}{text}
                            <span className="cursor-blink2">█</span>
                        </p>
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
        </>
    )
}

export default Proyectos