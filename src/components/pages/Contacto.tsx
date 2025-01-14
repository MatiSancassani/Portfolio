import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useState, useEffect } from 'react';
const Contacto = () => {
    const simbol = ">"
    const [text, setText] = useState('');
    const fullText = 'Contacto';
    useEffect(() => {
        // Retrasa la animación 2 segundos
        const delay = setTimeout(() => {
            let index = 0;
            const interval = setInterval(() => {
                setText(fullText.slice(0, index));
                index++;
                if (index > fullText.length) clearInterval(interval);
            }, 100);
        }, 10500);

        return () => clearTimeout(delay);
    }, []);


    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDiv(true);
        }, 8900); // Aparece después de 3 segundos

        return () => clearTimeout(timer);
    }, []);

    const [showDivContact, setShowDivContact] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDivContact(true);
        }, 11800);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <div className="mt-[.5rem]">
                {showDiv && (
                    <div>
                        <p className="relative">C:\Users\Matias Sancassani{simbol}{text}
                            <span className="cursor-blink2 w-[30px] h-[2px]">█</span>
                        </p>
                    </div>
                )}

                {showDivContact && (
                    <div>
                        <div className="mt-[.5rem] flex items-center gap-[5px]">
                            <div>{simbol}</div>
                            <h1 className="text-[2rem] text-[#c1c1c2]">Contacto \ Redes</h1>
                        </div>
                        <div className="ml-[1rem] group flex items-center">
                            <a href="" target="_blank">
                                <p className="flex gap-[.5rem] items-center text-[#fd79ff]"><span className="invisible group-hover:visible"><MdOutlineAlternateEmail /></span>
                                    e-mail <span className="flex text-white">(<span className="text-[#00aa00]">matiassancassani@gmail.com</span>)</span>
                                </p>
                            </a>
                        </div>
                        <div className="ml-[1rem] group flex items-center">
                            <a href="https://www.linkedin.com/in/matisancassani/" target="_blank">
                                <p className="flex gap-[.5rem] items-center text-[#2472C8]"><span className="invisible group-hover:visible"><FaLinkedinIn /></span>
                                    Linkedin
                                </p>
                            </a>
                        </div>
                        <div className="ml-[1rem] group flex items-center">
                            <a href="https://github.com/MatiSancassani" target="_blank">
                                <p className="flex gap-[.5rem] items-center text-[#b2b2ff]"><span className="invisible group-hover:visible"><FaGithub /></span>
                                    Github
                                </p>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Contacto