import React from "react";
import './LeftSideBar.css'
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { SiYoutubeshorts } from "react-icons/si";



export function LeftSideBar() {

    return (
        <>
            <div className="container-leftSidebar">

                <NavLink to={'/'} className="icon-sidebar-div">
                    <AiOutlineHome size={22} className="icon-sidebar" />
                    <div className="text-sidebar-icon">
                        Home
                    </div>
                </NavLink>

                <NavLink to={'/Shorts'} className="icon-sidebar-div">

                    <SiYoutubeshorts size={22} className="icon-sidebar" />
                    <div className="text-sidebar-icon" >
                        Shorts
                    </div>
                </NavLink>


                <NavLink to={'/Explore'} className="icon-sidebar-div">

                    <MdOutlineExplore size={22} className="icon-sidebar" />
                    <div className="text-sidebar-icon">
                        Explore
                    </div>
                </NavLink>

                <NavLink to={'/Subscription'} className="icon-sidebar-div">

                    <MdSubscriptions size={22} className="icon-sidebar" />
                    <div className="text-sidebar-icon" >
                        Subscription
                    </div>
                </NavLink>

                <NavLink to={'/Library'} className="icon-sidebar-div">

                    <MdOutlineVideoLibrary size={22} className="icon-sidebar" />
                    <div className="text-sidebar-icon" >
                        Library
                    </div>
                </NavLink>


            </div >
        </>
    )
}