import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useState, useEffect } from 'react';
const Contacto = () => {
    const simbol = ">"
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = 'Contacto';
    useEffect(() => {
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
        }, 14500);

        return () => clearTimeout(delay);
    }, []);


    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDiv(true);
        }, 12000);

        return () => clearTimeout(timer);
    }, []);

    const [showDivContact, setShowDivContact] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDivContact(true);
        }, 15600);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className='ml-[1rem]'>
            <div className="mt-[.5rem]">
                {showDiv && (
                    <div>
                        <div className="mt-[.5rem] relative">
                            C:\Users\Matias Sancassani{simbol}{text}
                            {showCursor && ( // Condicional para mostrar el cursor solo si showCursor es true
                                <div className="absolute bg-white cursor-blink top-[.8rem] w-[8px] h-[5px]"></div>
                            )}
                        </div>
                    </div>
                )}

                {showDivContact && (
                    <div>
                        <div className="flex items-center gap-[5px]">
                            <div>{simbol}</div>
                            <h1 className="text-[2rem] text-[#c1c1c2]">Contacto \ Redes</h1>
                        </div>
                        <div className="ml-[1rem] flex items-center">
                            <a href="" target="_blank">
                                <p className="flex gap-[.5rem] items-center text-[#fd79ff]"><span className=""><MdOutlineAlternateEmail /></span>
                                    e-mail <span className="flex text-white">(<span className="text-[#ffc004]">matiassancassani@gmail.com</span>)</span>
                                </p>
                            </a>
                        </div>
                        <div className="ml-[1rem] flex items-center">
                            <a href="https://www.linkedin.com/in/matisancassani/" target="_blank">
                                <p className="flex gap-[.5rem] items-center text-[#2472C8]"><span className=""><FaLinkedinIn /></span>
                                    Linkedin
                                </p>
                            </a>
                        </div>
                        <div className="ml-[1rem] flex items-center">
                            <a href="https://github.com/MatiSancassani" target="_blank">
                                <p className="flex gap-[.5rem] items-center text-[#b2b2ff]"><span className=""><FaGithub /></span>
                                    Github
                                </p>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contacto