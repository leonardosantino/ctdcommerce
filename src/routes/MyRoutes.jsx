import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About';
import Home from '../pages/Home';
import Produtos from '../pages/Produtos';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/produtos" element={<Produtos />} />

            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;