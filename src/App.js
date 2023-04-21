import { BrowserRouter, Route, Routes} from "react-router-dom";
// import React, { useState, useCallback} from "react";
import BlogMainPage from "./pages/blog/BlogMainPage";
// import NewPost from "./pages/blog/NewPost";
import "./App.css";
import UnderConstruction from "./pages/underConstruction/UnderConstruction";
import Home from "./pages/home/Home";
import NewPost from "./models/NewPost";
import LoginAuth from "./authorisedUser/pages/LoginAuth";
import Register from "./authorisedUser/pages/Register";
// import LoginAuth from "./authorisedUser/pages/LoginAuth";
// import {AuthContext} from "./authorisedUser/components/context/auth-context";

function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    //
    // const login = useCallback(() => {
    //     setIsLoggedIn(true);
    // }, []);
    //
    // const logout = useCallback(() => {
    //     setIsLoggedIn(false);
    // }, []);
    //
    // let routes;

    // function to access the functionality to write posts through login

    // if (isLoggedIn) {
    //     routes = (
    //         <Switch>
    //             <Route path="/blog/newPost" exact>
    //                 <NewPost />
    //             </Route>
    //             {/*<Route path="/posts/:postId">*/}
    //             {/*    <UpdatePost />*/}
    //             {/*</Route>*/}
    //             <Redirect to="/blog" />
    //         </Switch>
    //     );
    // } else {
    //     routes = (
    //         <Switch>
    //             <Route path="/" element={<UnderConstruction />} />
    //             <Route path="/blog" element={<BlogMainPage />} />
    //             <Route path="/home" element={<Home />} />
    //             <Route path="/auth" element={<LoginAuth />} />
    //         </Switch>
    //     );
    // }

    return (
        // <AuthContext.Provider
        //     value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
        // >
        <BrowserRouter>
            <Routes>
                {/*{routes}*/}
                <Route path="/" element={<UnderConstruction />} />
                <Route path="/blog" element={<BlogMainPage />} />
                <Route path="/home" element={<Home />} />
                <Route path='/blog/new-post' element={<NewPost />} />
                <Route path='/login' element={<LoginAuth />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
        // </AuthContext.Provider>
    );
}

export default App;
