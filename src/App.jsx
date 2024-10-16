import { Outlet, Route, Routes } from 'react-router-dom';
import './App.scss'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SneakerForm from './pages/SneakerForm/SneakerForm';

function App() {

  return (
    <div id="main">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-sneaker" element={<SneakerForm />} />
      </Routes>
    </div>
  )
}

export default App