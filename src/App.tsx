import SobreMi from "./components/SobreMi"
import Header from "./components/Header"
import Proyectos from "./components/Proyectos"
import Contacto from "./components/Contacto"
import Failed from "./components/Failed"

const App = () => {


  return (
    <>
      <Header />
      <SobreMi />
      <Failed />
      <Proyectos />
      <Contacto />
    </>
  )
}

export default App
