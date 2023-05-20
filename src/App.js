import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";

const resPaths = ["/", "/about", "/signup"];

function App() {
    let {pathname} = window.location;
    switch (pathname) {
        case "/":
            return <Home/>;
        case "/about":
            return <About/>;
        case "/signup":
            return <Signup/>;
        default:
            if (pathname.endsWith("/")) {
                pathname = pathname.replaceAll("/", "");
                if (resPaths.includes(pathname)) {
                    window.location.pathname = pathname;
                } else {
                    window.location.pathname = "/";
                }
            } else {
                window.location.pathname = "/";
            }
    }
}

export default App;
