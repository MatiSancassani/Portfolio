import { useState, useEffect } from 'react';
const SobreMi = () => {
    const simbol = ">"

    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDiv(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className='ml-[.5rem]'>
            {showDiv && (
                <div>
                    <div className="mt-[.5rem] flex items-center gap-[5px]">
                        <div>{simbol}</div>
                        <h1 className="text-[2rem] text-[#c1c1c2]">Sobre Mi</h1>
                    </div>
                    <div className="">
                        <h2 className="text-[#d6d202] text-[3rem] leading-8">Full Stack</h2>
                        <h2 className="text-[#c7c7c7] text-[3rem] leading-7">Developer</h2>
                    </div>

                    <div className="mt-[1rem] lg:mt-[.5rem] lg:w-[30%]">
                        <p className='text-[15px]'>Mi nombre es Matias Sancassani, tengo 27 años y vivo en Argentina.<br />
                            Soy un apasionado por la programacion y el aprendizaje <br />
                            Me entusiasma la idea de aplicar y expandir mis habilidades en un entorno dinámico. <br />
Actualmente formo parte de un equipo de desarrollo, contribuyendo a proyectos innovadores y
fortaleciendo mis conocimientos junto a profesionales experimentados.
                        </p>
                        <div className="w-[6rem] mt-[.5rem] cursor-pointer infinity2">
                            <a href="/docs/MatiasSancassani.pdf" download="MatiasSancassani.pdf">
                                <button className="">Descargar CV</button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SobreMi