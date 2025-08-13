
import { VscChromeMinimize, VscChromeClose, VscChromeMaximize } from "react-icons/vsc";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
import Frontend from './technologies/frontend/Frontend';
import Backend from './technologies/backend/Backend';
import Herramientas from './technologies/herramientas/Herramientas';
import Aprendiendo from './technologies/aprendiendo/Aprendiendo';
function WindowsMinimize() {
    const simbol = ">";
    return (
        <>
            {/* HEADER */}
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
                        C:\Users\Matias Sancassani{simbol}Sobre Mi
                        {/* <div className="absolute bg-white top-[.8rem] w-[8px] h-[5px]"></div> */}
                    </div>
                </div>
            </div>
            {/* SOBRE MI */}
            <div className='ml-[1rem]'>
                <div>
                    <div className="mt-[.5rem] flex items-center gap-[5px]">
                        <div>{simbol}</div>
                        <h1 className="text-[2rem] text-[#c1c1c2]">Sobre Mi</h1>
                    </div>
                    <div className="">
                        <h2 className="text-[#d6d202] text-[3rem] leading-8">Full Stack</h2>
                        <h2 className="text-[#c7c7c7] text-[3rem] leading-7">Developer</h2>
                    </div>

                    <div className="mt-[1rem] lg:mt-[.5rem]">
                        <p className='text-[15px]'>Mi nombre es Matias Sancassani, tengo 26 años y vivo en Argentina.<br />
                            Soy un apasionado por la programacion y el aprendizaje <br />
                            Me entusiasma la idea de aplicar y expandir mis habilidades en un entorno dinámico <br />
                            Actualmente estoy en la busqueda activa de mi primera experiencia profesional <br />
                            donde pueda contribuir a proyectos innovadores y aprender de un equipo experimentado
                        </p>
                        <div className="w-[6rem] mt-[.5rem] cursor-pointer infinity2">
                            <a href="/docs/MatiasSancassani.pdf" download="MatiasSancassani.pdf">
                                <button className="">Descargar CV</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            {/* TECNOLOGIES */}
            <div className='ml-[1rem]'>


                <div className="mt-[1rem]">
                    <div className="mt-[.5rem] relative">
                        C:\Users\Matias Sancassani{simbol}Tecnologias
                    </div>
                </div>
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
            </div>
            {/* PROYECTOS */}
            <div className='ml-[1rem]'>
                <div className="">
                    <div className="mt-[.5rem]">
                        <div className="mt-[.5rem] relative">
                            C:\Users\Matias Sancassani{simbol}Proyectos
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className="mt-[.5rem] flex items-center gap-[5px]">
                            <div>{simbol}</div>
                            <h1 className="text-[2rem] text-[#c1c1c2]">Proyectos</h1>
                        </div>
                        <div>
                            <p className='text-[#ffc004]'>Frontend</p>
                            <div>
                                <div className="ml-[1rem] group mb-[1rem]">
                                    <div className='flex items-center gap-2'>
                                        <a href="https://big-burger-front.vercel.app" target="_blank">
                                            <p className='flex'>(<span className="invisible group-hover:visible">*</span>)
                                                BIGBURGER
                                            </p>
                                        </a>
                                        <div className='flex gap-2'>
                                            <p>[</p>
                                            <a href="https://github.com/MatiSancassani/BigBurgerFront" target="_blank">
                                                <img className='w-[1.5rem] h-[1.5rem]' src="/img/pixelArt/github.png" alt="" />
                                            </a>
                                            <p>]</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Ecommerce para hamburgueseria</p>

                                        <div className='flex gap-4'>
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/react.png" alt="ReactJS" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/tailwind.png" alt="Tailwind" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/chakra.png" alt="Chakra" />
                                        </div>
                                    </div>

                                </div>
                                <div className="ml-[1rem] group mb-[1rem]">
                                    <div className='flex items-center gap-2'>
                                        <a href="https://matisancassani.github.io/paradavip/" target="_blank">
                                            <p>(<span className="invisible group-hover:visible">*</span>)
                                                PARADA VIP
                                            </p>
                                        </a>
                                        <div className='flex gap-2'>
                                            <p>[</p>
                                            <a href="https://github.com/MatiSancassani/paradavip" target="_blank">
                                                <img className='w-[1.5rem] h-[1.5rem]' src="/img/pixelArt/github.png" alt="" />
                                            </a>
                                            <p>]</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Proyecto sobre emprendimiento personal</p>

                                        <div className='flex gap-4'>
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/html.png" alt="Html" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/css.png" alt="Css" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/javascript.png" alt="Javascript" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/bootstrap.png" alt="bootstrap" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-[1rem] group mb-[1rem]">
                                    <div className='flex items-center gap-2'>
                                        <a href="https://matisancassani.github.io/vikinga/" target="_blank">
                                            <p>(<span className="invisible group-hover:visible">*</span>)
                                                VIKINGA STORE
                                            </p>
                                        </a>

                                        <div className='flex gap-3'>
                                            <p>[</p>
                                            <a href="https://github.com/MatiSancassani/vikinga" target="_blank">
                                                <img className='w-[1.5rem] h-[1.5rem]' src="/img/pixelArt/github.png" alt="" />
                                            </a>
                                            <p>]</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Ecommerce para una tienda de ropa</p>
                                        <div className='flex gap-4'>
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/html.png" alt="Html" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/css.png" alt="Css" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/javascript.png" alt="Javascript" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#257c77]'>Backend</p>
                            <div>
                                <div className="ml-[1rem] group mb-[1rem]">
                                    <div className='flex items-center gap-2'>
                                        <a href="https://big-burger-front.vercel.app" target="_blank">
                                            <p className='flex'>(<span className="invisible group-hover:visible">*</span>)
                                                BIGBURGER
                                            </p>
                                        </a>
                                        <div className='flex gap-2'>
                                            <p>[</p>
                                            <a href="https://github.com/MatiSancassani/BigBurgerBackend" target="_blank">
                                                <img className='w-[1.5rem] h-[1.5rem]' src="/img/pixelArt/github.png" alt="" />
                                            </a>
                                            <a href="" target="_blank">
                                                <img className='w-[1.5rem] h-[1.5rem]' src="/img/pixelArt/swagger.png" alt="" />
                                            </a>
                                            <p>]</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Backend web de hamburgueseria</p>

                                        <div className='flex gap-4'>
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/mongo.png" alt="MongoDB" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/express.png" alt="ExpressJS" />
                                            <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/node.png" alt="NodeJS" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* CONTACT */}
            <div className='ml-[1rem]'>
                <div className="mt-[.5rem]">

                    <div>
                        <div className="mt-[.5rem] relative">
                            C:\Users\Matias Sancassani{simbol}Contacto

                        </div>
                    </div>



                    <div>
                        <div className="flex items-center gap-[5px]">
                            <div>{simbol}</div>
                            <h1 className="text-[2rem] text-[#c1c1c2]">Contacto \ Redes</h1>
                        </div>

                        <div className="flex items-center mb-[3rem]">
                            <div className="ml-[1rem] flex items-center">
                                <a href="mailto:matiassancassani@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail" target="_blank">
                                    <p className="flex gap-[.5rem] items-center text-[#fd79ff]"><span className=""><MdOutlineAlternateEmail /></span>
                                        e-mail
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
                    </div>

                </div>
            </div>
        </>
    )
}

export default WindowsMinimize