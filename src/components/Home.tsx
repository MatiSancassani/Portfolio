import SobreMi from "./pages/SobreMi"
import Header from "./pages/Header"
import Proyectos from "./pages/Proyectos"
import Contacto from "./pages/Contacto"
import Technologies from "./pages/technologies/Technologies"

const Home = () => {
    return (
        <div id="home" className="">
            <Header />
            <SobreMi />
            <Technologies />
            <Proyectos />
            <Contacto />
        </div>
    )
}

export default Home