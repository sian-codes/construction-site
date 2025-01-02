import Header from "./components/header/Header";
import "./App.css";
import UnderConstruction from "./pages/underConstruction/UnderConstruction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path='/underconstruction' element={<UnderConstruction />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
