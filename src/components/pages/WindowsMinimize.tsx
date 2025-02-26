
import { VscChromeMinimize, VscChromeClose, VscChromeMaximize } from "react-icons/vsc";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
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
                        <div className="flex flex-col gap-2 ml-[.5rem]">
                            <div className='flex items-center gap-2'>

                                <h2 className="text-[1.5rem] text-[#ffc004]">Frontend</h2>
                            </div>
                            <div className='flex gap-4 flex-wrap'>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/html.png" alt="HTML" />
                                    <small className="text-[1rem] leading-5">HTML</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/css.png" alt="CSS" />
                                    <small className="text-[1rem] leading-5">CSS</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/javascript.png" alt="JavaScript" />
                                    <small className="text-[1rem] leading-5">JavaScript</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/react.png" alt="ReactJS" />
                                    <small className="text-[1rem] leading-5">ReactJS</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/chakra.png" alt="Chakra" />
                                    <small className="text-[1rem] leading-5">ChakraUI</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/tailwind.png" alt="Tailwind" />
                                    <small className="text-[1rem] leading-5">TailwindCSS</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/sass.png" alt="SASS" />
                                    <small className="text-[1rem] leading-5">SASS</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/bootstrap.png" alt="Boostrap" />
                                    <small className="text-[1rem] leading-5">Bootstrap</small>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 ml-[.5rem]">
                            <div className='flex items-center gap-2'>

                                <h2 className="text-[1.5rem] text-[#257c77]">Backend</h2>
                            </div>
                            <div className='flex gap-4 flex-wrap'>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/node.png" alt="NodeJS" />
                                    <small className="text-[1rem] leading-5">NodeJS</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/express.png" alt="ExpressJS" />
                                    <small className="text-[1rem] leading-5">ExpressJS</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/mongo.png" alt="MongoDB" />
                                    <small className="text-[1rem] leading-5">MongoDB</small>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 ml-[.5rem]">
                            <div className='flex items-center gap-2'>

                                <h2 className="text-[1.5rem] text-[#fd79ff]">Aprendiendo</h2>
                            </div>
                            <div className='flex gap-4 flex-wrap'>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/next.png" alt="NextJS" />
                                    <small className="text-[1rem] leading-5">NextJS</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/typescript.png" alt="TypeScript" />
                                    <small className="text-[1rem] leading-5">TypeScript</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/nest.png" alt="NestJS" />
                                    <small className="text-[1rem] leading-5">NestJS</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/postgress.png" alt="PostgreSQL" />
                                    <small className="text-[1rem] leading-5">PostgreSQL</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/docker.png" alt="Docker" />
                                    <small className="text-[1rem] leading-5">Docker</small>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 ml-[.5rem]">
                            <div className='flex items-center gap-2'>

                                <h2 className="text-[1.5rem] text-[#01f1a3]">Herramientas</h2>
                            </div>
                            <div className='flex gap-6 flex-wrap'>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/git.png" alt="Git" />
                                    <small className="text-[1rem] leading-5">Git</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/github.png" alt="GitHub" />
                                    <small className="text-[1rem] leading-5">GitHub</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/vscode.png" alt="VSCode" />
                                    <small className="text-[1rem] leading-5">VSCode</small>
                                </div>
                                <div className='flex items-center flex-col gap-2'>
                                    <img className="w-[3rem] h-[3rem]" src="/img/pixelArt/npm.png" alt="Npm" />
                                    <small className="text-[1rem] leading-5">npm</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FAILED */}
            <div className='ml-[1rem]'>

                <div className="mt-[1rem]">
                    <div className="mt-[.5rem] relative">
                        C:\Users\Matias Sancassani{simbol}Proye
                    </div>
                </div>

                <div>
                    <p>'Proye' is not recognized as an internal or external command,<br />
                        operable program or batch file.</p>
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
                        <div className="ml-[1rem] group mb-[1rem]">
                            <div>
                                <a href="https://big-burger-omega.vercel.app/" target="_blank">
                                    <p>(<span className="invisible group-hover:visible">*</span>)
                                        BIGBURGER \ Ecommerce para hamburgueseria
                                        (<span className="text-[#fffe60]">En desarrollo</span>)
                                    </p>
                                </a>
                            </div>
                            <div className='flex gap-4'>
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/react.png" alt="ReactJS" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/tailwind.png" alt="Tailwind" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/node.png" alt="NodeJS" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/express.png" alt="ExpressJS" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/mongo.png" alt="MongoDB" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/chakra.png" alt="Chakra" />
                            </div>
                        </div>
                        <div className="ml-[1rem] group mb-[1rem]">
                            <div>
                                <a href="https://matisancassani.github.io/paradavip/" target="_blank">
                                    <p>(<span className="invisible group-hover:visible">*</span>)
                                        PARADA VIP \ Proyecto sobre emprendimiento personal
                                    </p>
                                </a>
                            </div>
                            <div className='flex gap-4'>
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/html.png" alt="Html" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/css.png" alt="Css" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/javascript.png" alt="Javascript" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/bootstrap.png" alt="bootstrap" />
                            </div>
                        </div>
                        <div className="ml-[1rem] group mb-[1rem]">
                            <div className=''>
                                <a href="https://matisancassani.github.io/vikinga/" target="_blank">
                                    <p>(<span className="invisible group-hover:visible">*</span>)
                                        VIKINGA STORE \ Ecommerce para una tienda de ropa
                                    </p>
                                </a>
                            </div>
                            <div className='flex gap-4'>
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/html.png" alt="Html" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/css.png" alt="Css" />
                                <img className="w-[1.5rem] h-[1.5rem]" src="/img/pixelArt/javascript.png" alt="Javascript" />
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

                </div>
            </div>
        </>
    )
}

export default WindowsMinimize