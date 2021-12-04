import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About';
import Home from '../pages/Home';
import Xbox from "../pages/Xbox"
import Games from '../pages/Games';
import Cart from '../pages/Cart';
import DescriptionProduct from '../pages/DescriptionProduct';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/xbox" element={<Xbox />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/descriptionproduct" element={<DescriptionProduct />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;