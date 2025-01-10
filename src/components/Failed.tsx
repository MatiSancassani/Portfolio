import { useState, useEffect } from 'react';

const Failed = () => {
    const simbol = ">";
    const [textFailed, setTextFailed] = useState('');
    const fullTextFailed = 'Proye';
    useEffect(() => {
        const delay = setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
                setTextFailed(fullTextFailed.slice(0, index));
                index++;
                if (index > fullTextFailed.length) clearInterval(interval);
            }, 100);
        }, 4500);

        return () => clearTimeout(delay);
    }, []);

    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDiv(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const [showDivError, setShowDivError] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDivError(true);
        }, 5600);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            {showDiv && (
                <div className="mt-[2rem]">
                    <p className="relative">C:\Users\Matias Sancassani{simbol}{textFailed}
                        <span className="cursor-blink2">█</span>
                    </p>
                </div>
            )}
            {showDivError && (
                <div>
                    <p>'Proye' is not recognized as an internal or external command,<br />
                        operable program or batch file.</p>
                </div>
            )}
        </>
    )
}

export default Failed