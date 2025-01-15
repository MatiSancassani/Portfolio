
import { VscChromeMinimize, VscChromeClose, VscChromeMaximize } from "react-icons/vsc";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const Header = () => {
    const simbol = ">";
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = 'Sobre Mi';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
                setTimeout(() => setShowCursor(false), 500);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="w-full bg-white flex items-center justify-between text-black">
                <div className="flex items-center">
                    <img className="mx-[5px] w-[2rem] h-[2rem]" src="./img/cmd.png" alt="" />
                    <p>Command Prompt</p>
                </div>
                <div className="flex items-center gap-[.5rem] text-[#c1c1c2]">
                    <div className="w-[2rem] h-[2rem] flex items-center justify-center cursor-pointer hover:bg-[#e5e5e5]">
                        <Link to="/windows"><VscChromeMinimize /></Link>
                    </div>
                    <div className="w-[2rem] h-[2rem] flex items-center justify-center cursor-pointer hover:bg-[#e5e5e5]">
                        <VscChromeMaximize />
                    </div>
                    <div className="w-[2rem] h-[2rem] flex items-center justify-center cursor-pointer hover:bg-red-600 hover:text-white">
                        <Link to="/blue"><VscChromeClose /></Link>

                    </div>
                </div>
            </div>

            <div className='ml-[1rem]'>
                <p>Portfolio [Version 2025]</p>
                <p>(c) SNK Corporation. All rights reserved.</p>
                <div className="mt-[.5rem] relative">
                    C:\Users\Matias Sancassani{simbol}{text}
                    {showCursor && ( // Condicional para mostrar el cursor solo si showCursor es true
                        <div className="absolute bg-white cursor-blink top-[.8rem] w-[8px] h-[5px]"></div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header