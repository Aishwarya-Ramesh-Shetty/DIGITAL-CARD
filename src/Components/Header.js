import React from "react";
import women from "../Images/formalwomen.jpg";
import insta from "../Images/instalogo.png";
import twit from "../Images/twitlogo.png";
import git from "../Images/git.png";
import face from "../Images/face.png";


function MainContent(){
    return(
        <div className="heading">
            <h1>About</h1>
            <p className="para">
            As a dedicated frontend developer, I specialize in crafting intuitive, responsive, and visually appealing web interfaces. 
            With a strong focus on user experience, I bring ideas to life through clean and efficient code, ensuring seamless functionality across various devices. 
            </p>

            <h1 className="heading2">Languages known</h1>
            <ul className="list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
            </ul>
        </div>

    );
};


function Footer(){
    return(
        <div className="footer">

            <div className="twit">
                <div className="twitbackground">
                </div>
            </div>
            <div className="insta">
                <div className="instabackground">
                </div>
            </div>
            <div className="git">
                <div className="gitbackground">
                </div>
            </div>
            <div className="face">
                <div className="facebackground">
                </div>
            </div>   
        </div>
    )
}

const Header = () =>{
    return(
        <div className="box ">
            <div >
                <div className="boxbackground"></div>
                    <h1 className="header">Aishwarya Shetty</h1>
                    <h4 className="text">Frontend Developer</h4>
                    <h5 className="text2">aishu.website</h5>
                
            </div>
            <div className="box1">
                ✉ Email
            </div>
            <div className="box2">
                 Linkedin
            </div>

            <MainContent/>
            <Footer/>


       </div>
    );
};

export default Header;