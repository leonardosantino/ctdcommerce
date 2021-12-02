import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About';
import Home from '../pages/Home';
import Woman from "../pages/Woman"

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/woman" element={<Woman />} />
                <Route path="/man" element={<Woman />} />
                <Route path="/about" element={<About />} />

            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;