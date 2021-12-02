import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer';
import About from '../pages/About';
import Home from '../pages/Home';
import Xbox from "../pages/Xbox"
import Plastation from '../pages/Playstation';
import Cart from '../pages/Cart';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/playstation" element={<Plastation />} />
                <Route path="/xbox" element={<Xbox />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default MyRoutes;