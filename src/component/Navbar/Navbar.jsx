import React from "react"
import './style/Navbar.css'
import { Searchbar } from "./SearchBar/Searchbar"
import youtube_logo from './images/youtube-logo.png'
import { MdOutlineVideoCall } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import { HiOutlineBell } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { SignIn } from "./SignIn/SignIn";
import { useState, useEffect } from "react";
import { profile as Profile } from './profile/profile'
import { Link } from "react-router-dom";




export function Navbar({ toggleDrawer }) {
    const signin = <SignIn />;
    const profile = <Profile />

    const [userVer, setVerification] = useState(false);

    const signInf = () => {
        (userVer == false) ? setVerification(true) : setVerification(false);
        // alert("Clicked");
    }



    return (
        <div className="container-Navbar" >
            <div className="Burger_logo_Navbar" >
                <div className="burger" onClick={() => toggleDrawer()}>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <Link to={'/'} className="logo-div-Navbar">
                    <img src={youtube_logo} alt="" />
                    <p className="logo-title-navbar">YouTube</p>
                </Link>
            </div>
            <div className="searchbar-div" >
                <Searchbar />
            </div>

            <div className="feature-signin">
                <div className="feature-div">
                    <MdOutlineVideoCall className="video-style" />
                    <PiDotsNineBold className="dot-style" />
                    <HiOutlineBell className="bell-style" />
                </div >
                <div onClick={signInf}>
                    {userVer ? profile : signin}
                </div>




            </div>
        </div >






    )

};