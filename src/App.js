import { BrowserRouter, Route, Routes} from "react-router-dom";
import Blog from "./pages/blog/Blog";
import Header from "./components/header/Header";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./authorisedUser/pages/login/Login";
import Register from "./authorisedUser/pages/Register";
import CreatePost from "./authorisedUser/pages/blog/CreatePost";
import UnderConstruction from "./pages/underConstruction/UnderConstruction";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path='/blog/create-post' element={<CreatePost />} />
                <Route path='/blog/login' element={<Login />} />
                <Route path='/blog/register' element={<Register />} />
                <Route path='/underconstruction' element={<UnderConstruction />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
