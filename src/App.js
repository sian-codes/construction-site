import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Blog from "./pages/blog/Blog";

import "./App.css";
import UnderConstruction from "./pages/underConstruction /UnderConstruction";
import Home from "./pages/home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UnderConstruction />} />
                {/*<Route path="/blog" element={<Blog />} />*/}
                {/*<Route path="/home" element={<Home />} />*/}
                           </Routes>
        </BrowserRouter>
    );
}

export default App;
