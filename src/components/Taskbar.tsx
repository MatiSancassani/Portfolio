import { Link } from "react-router-dom";

const Taskbar = () => {
    return (
        <div className="font-[Tahoma] fixed bottom-0 w-full bg-[#255edc] border-t border-[#256d24] flex items-center h-10 shadow-inner">
            {/* Botón de Inicio */}
            <div className="w-[7.5rem] flex items-center justify-center gap-[5px] bg-[#257325] h-full text-white lg:px-4 lg:py-1 rounded-r-md shadow-sm cursor-pointer hover:bg-[#368d35]">
                <img className=' w-5 h-5 lg:w-6 lg:h-6' src="/img/logoxp.png" alt="" />
                <span className="font-bold text-[1.2rem]">start</span>
            </div>

            {/* Área de iconos de aplicaciones abiertas */}
            <div className="flex items-center justify-between w-full h-full ">
                <div className="flex items-center px-2 gap-[5px] ">
                    <div className="flex items-center gap-[5px] w-5 h-5  lg:w-6 lg:h-6">
                        <img className="cursor-pointer" src="/img/WindowsIcons/internet.png" alt="" />
                        <img className="cursor-pointer" src="/img/WindowsIcons/player.png" alt="" />
                    </div>
                    <div className="h-[2rem] py-[1.3rem] px-[.5rem] ml-7 flex items-center gap-[5px] lg:p-[5px] border-[#1b51b8] bg-[#3c80f3] cursor-pointer hover:bg-[#1b51b8]">
                        <div className=" w-5 h-5 lg:w-6 lg:h-6">
                            <img src="/img/WindowsIcons/cmd.png" alt="" />
                        </div>
                        <Link to="/windowsmin">
                            <div className="flex items-center">
                                Cmd
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-around bg-[#1698e7] h-full w-[8rem] lg:w-[10rem] shadow-sm text-sm">
                    <div className="flex items-center gap-[3px] w-5 h-5  lg:w-6 lg:h-6">
                        <img className="cursor-pointer" src="/img/WindowsIcons/network.png" alt="" />
                        <img className="cursor-pointer" src="/img/WindowsIcons/USB.png" alt="" />
                        <img className="cursor-pointer" src="/img/WindowsIcons/Volume.png" alt="" />
                    </div>
                    <div className="ml-10">
                        {new Date().toLocaleTimeString()}
                    </div>
                </div>
            </div>

            {/* Reloj */}
        </div>
    );
};

export default Taskbar;
