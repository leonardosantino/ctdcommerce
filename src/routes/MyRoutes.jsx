import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountProvider from '../context/Count';
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
                <CountProvider>
                    <Routes>

                        <Route path="/" element={<Home />} />

                        <Route path="/games" element={<Games />} >
                            <Route path=":categoryname" element={<Games />} />
                        </Route>

                        <Route path="/games/:categoryname/:id" element={<DescriptionProduct />} />

                        <Route path="/about" element={<About />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </CountProvider>
            </HelmetProvider>
        </BrowserRouter>
    )
}

export default MyRoutes;