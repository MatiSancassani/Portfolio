
import { useState, useEffect } from 'react';
import Frontend from './frontend/Frontend';
import Backend from './backend/Backend';
import Herramientas from './herramientas/Herramientas';
import Aprendiendo from './aprendiendo/Aprendiendo';

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
        <div className='ml-[.5rem]'>
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

                    <div className='flex flex-col gap-4'>
                        <div>
                            <Frontend />
                        </div>
                        <div>
                            <Backend />
                        </div>
                        <div>
                            <Aprendiendo />
                        </div>
                        <div>
                            <Herramientas />
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Technologies