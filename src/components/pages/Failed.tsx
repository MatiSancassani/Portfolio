import { useState, useEffect } from 'react';

const Failed = () => {
    const simbol = ">";
    const [textFailed, setTextFailed] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullTextFailed = 'Proye';
    useEffect(() => {
        const delay = setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
                setTextFailed(fullTextFailed.slice(0, index + 1));
                index++;
                if (index === fullTextFailed.length) {
                    clearInterval(interval);
                    setTimeout(() => setShowCursor(false), 400);
                }
            }, 100);
        }, 7000);

        return () => clearTimeout(delay);
    }, []);

    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDiv(true);
        }, 5600);

        return () => clearTimeout(timer);
    }, []);

    const [showDivError, setShowDivError] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDivError(true);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className='ml-[.5rem]'>
            {showDiv && (
                <div className="mt-[1rem]">
                    <div className="mt-[.5rem] relative">
                        C:\Users\Matias Sancassani{simbol}{textFailed}
                        {showCursor && ( // Condicional para mostrar el cursor solo si showCursor es true
                            <div className="absolute bg-white cursor-blink top-[.8rem] w-[8px] h-[5px]"></div>
                        )}
                    </div>
                </div>
            )}
            {showDivError && (
                <div>
                    <p>'Proye' is not recognized as an internal or external command,<br />
                        operable program or batch file.</p>
                </div>
            )}
        </div>
    )
}

export default Failed