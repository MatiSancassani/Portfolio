import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from "./components/Home"
import BlueScreen from './components/pages/BlueScreen';
import Windows from './components/pages/Windows';

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<BlueScreen />} />
        <Route path="/windows" element={<Windows />} />
      </Routes>
    </Router>
  )
}

export default App
