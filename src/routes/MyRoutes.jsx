import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About';
import Home from '../pages/Home';
import Woman from "../pages/Woman"

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/ps5" element={<Woman />} />
                <Route path="/xbox" element={<Woman />} />
                <Route path="/about" element={<About />} />

            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;