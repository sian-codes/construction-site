// import Blog from "./pages/blog/Blog";
import Header from "./components/header/Header";
import "./App.css";
// import Home from "./pages/home/Home";
// import Login from "./authorisedUser/pages/login/Login";
// import CreatePost from "./authorisedUser/pages/blog/CreatePost";
import UnderConstruction from "./pages/underConstruction/UnderConstruction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Blog from "./pages/blog/Blog";
import "./App.css";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<UnderConstruction /> } />
                {/*<Route path="/home" element={<Home />} />*/}
                {/*<Route path="/blog" element={<Blog />} />*/}
                {/*<Route path='/blog/create-post' element={<CreatePost />} />*/}
                {/*<Route path='/blog/login' element={<Login />} />*/}
                {/*<Route path='/blog/register' element={<Register />} />*/}
                {/*<Route path='/underconstruction' element={<UnderConstruction />} />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
