import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import "./App.css";
import UnderConstruction from "./pages/UnderConstruction";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UnderConstruction />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/home" element={<Home />} />
                           </Routes>
        </BrowserRouter>
    );
}

export default App;
