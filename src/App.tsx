import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import BlueScreen from './components/pages/BlueScreen';
import Windows from './components/pages/Windows';
import WindowsMinimize from './components/pages/WindowsMinimize';

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<BlueScreen />} />
        <Route path="/windows" element={<Windows />} />
        <Route path="/wmin" element={<WindowsMinimize />} />
      </Routes>
    </Router>
  )
}

export default App
