
import { VscChromeMinimize, VscChromeClose, VscChromeMaximize } from "react-icons/vsc";
import { useState, useEffect } from 'react';
const Header = () => {
    const simbol = ">";
    const [text, setText] = useState('');
    const fullText = 'Sobre Mi';

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100); // Velocidad de escritura
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="w-screen bg-white flex items-center justify-between text-black">
                <div className="flex items-center">
                    <img className="mx-[5px] w-[2rem] h-[2rem]" src="./img/cmd.png" alt="" />
                    <p>Command Prompt</p>
                </div>
                <div className="flex items-center gap-[.5rem] text-[#c1c1c2]">
                    <div className="w-[2rem] h-[2rem] flex items-center justify-center cursor-pointer hover:bg-[#e5e5e5]">
                        <VscChromeMinimize />
                    </div>
                    <div className="w-[2rem] h-[2rem] flex items-center justify-center cursor-pointer hover:bg-[#e5e5e5]">
                        <VscChromeMaximize />
                    </div>
                    <div className="w-[2rem] h-[2rem] flex items-center justify-center cursor-pointer hover:bg-red-600 hover:text-white">
                        <VscChromeClose />
                    </div>
                </div>
            </div>

            <div>
                <p>Portfolio [Version 2025]</p>
                <p>(c) SNK Corporation. All rights reserved.</p>
                <br />
                <p className="relative">C:\Users\Matias Sancassani{simbol}{text}
                    <span className="cursor-blink w-[30px] h-[2px]">█</span>
                </p>
            </div>
        </div>
    )
}

export default Header