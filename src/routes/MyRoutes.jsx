import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About';
import Home from '../pages/Home';
import Games from '../pages/Games';
import Cart from '../pages/Cart';
import DescriptionProduct from '../pages/DescriptionProduct';
import NotFound from '../pages/NotFound';
import { HelmetProvider } from 'react-helmet-async';

function MyRoutes() {
    return (
        <BrowserRouter>
            <HelmetProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/games/category/:category" element={<Games />} />

                    <Route path="/games/:id" element={<DescriptionProduct />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />

                    <Route path="/*" element={<NotFound />} />

                </Routes>
            </HelmetProvider>
        </BrowserRouter>
    )
}

export default MyRoutes;