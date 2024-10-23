import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";



const App=() =>{
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};



ReactDOM.render(<App/>,document.getElementById("root"));