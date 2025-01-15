import SobreMi from "./pages/SobreMi"
import Header from "./pages/Header"
import Proyectos from "./pages/Proyectos"
import Contacto from "./pages/Contacto"
import Failed from "./pages/Failed"
import Technologies from "./pages/Technologies"

const Home = () => {
    return (
        <div id="home" className="">
            <Header />
            <SobreMi />
            <Technologies />
            <Failed />
            <Proyectos />
            <Contacto />
        </div>
    )
}

export default Home