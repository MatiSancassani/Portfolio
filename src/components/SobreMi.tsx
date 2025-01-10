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
        <>
            {showDiv && (
                <div>
                    <div className="mt-[.5rem] flex items-center gap-[5px]">
                        <div>{simbol}</div>
                        <h1 className="text-[2rem] text-[#c1c1c2]">About Me</h1>
                    </div>
                    <div className="">
                        <h2 className="text-[#00aa00] text-[4rem] leading-10">Full Stack</h2>
                        <h2 className="text-[#00aa00] text-[4rem] leading-10">Web Developer</h2>
                        <small className="text-[1rem] leading-5">I dedicate myself to creating web pages using Stack MERN</small>
                    </div>

                    <div className="mt-[2rem]">
                        <p>Mi nombre es Matias Sancassani, tengo 26 años y vivo en Argentina.<br />
                            Soy un apasionado por la programacion y el aprendizaje <br />
                            Me entusiasma la idea de aplicar y expandir mis habilidades en un entorno dinámico <br />
                            Actualmente estoy en la busqueda activa de mi primera experiencia profesional <br />
                            donde pueda contribuir a proyectos innovadores y aprender de un equipo experimentado
                        </p>
                        <div className="w-[6rem] mt-[1rem] cursor-pointer infinity2">
                            <a href="/docs/MatiasSancassani.pdf" download="MatiasSancassani.pdf">
                                <button className="">Descargar CV</button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SobreMi