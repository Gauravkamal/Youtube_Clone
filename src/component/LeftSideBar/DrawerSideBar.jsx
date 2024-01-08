import React from 'react'
import './LeftSideBar.css'
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineHistory } from "react-icons/md";
import { AiFillPlaySquare } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { NavLink } from 'react-router-dom';




function DrawerSideBar({ toggleDrawer }) {

    return (
        <>
            <div className="container-drawerLeftSideBar">
                <div className="container2-drawerLeftSideBar">
                    <div className="drawer-leftsidebar">

                        <NavLink to={'/'} className="icon-sidebar-div">
                            <p>
                                <AiOutlineHome size={22} className='icon-sidebar' style={{ margin: "auto 0.5rem" }} />
                                <div className="text-drawersidebar-icon">Home</div>
                            </p>
                        </NavLink>

                        <NavLink to={'/Explore'} className="icon-sidebar-div">
                            <p>
                                <MdOutlineExplore size={22} className='icon-sidebar' style={{ margin: "auto 0.5rem" }} />
                                <div className="text-drawersidebar-icon">Explore</div>
                            </p>
                        </NavLink>

                        <NavLink to={'/Shorts'} className="icon-sidebar-div">
                            <p>
                                <SiYoutubeshorts size={22} className='icon-sidebar' style={{ margin: "auto 0.5rem" }} />
                                <div className="text-drawersidebar-icon">Shorts</div>
                            </p>
                        </NavLink>



                        <NavLink to={'/Subscription'} className="icon-sidebar-div">
                            <p>
                                <MdSubscriptions size={22} className='icon-sidebar' style={{ margin: "auto 0.5rem" }} />
                                <div className="text-drawersidebar-icon">Subscription</div>
                            </p>
                        </NavLink>



                    </div>
                    <div className="libraryBtn-leftsidebar">

                        <NavLink to={'/Library'} className="icon-sidebar-div">
                            <p>
                                <MdOutlineVideoLibrary size={22} className='icon-sidebar' style={{ margin: "auto 0.5rem" }} />
                                <div className="text-drawersidebar-icon">Library</div>
                            </p>
                        </NavLink>

                        <NavLink to={'/WatchHistory'} className="icon-sidebar-div">
                            <p>
                                <MdOutlineHistory size={22} className='icon-sidebar' style={{ margin: "auto 0.5rem" }} />
                                <div className="text-drawersidebar-icon">History</div>
                            </p>
                        </NavLink>
                        <NavLink to={'/WatchLater'} className="icon-sidebar-div">
                            <p>
                                <MdOutlineHistory size={22} className='icon-sidebar' style={{ margin: "auto 0.5rem" }} />
                                <div className="text-drawersidebar-icon">Watch Later</div>
                            </p>
                        </NavLink>

                        <NavLink to={'/YourVideo'} className="icon-sidebar-div">
                            <p>
                                <AiFillPlaySquare size={22} className='icon-sidebar' style={{ margin: "auto 0.5rem" }} />
                                <div className="text-drawersidebar-icon">Your Videos</div>
                            </p>
                        </NavLink>

                        <NavLink to={'/LikedVideos'} className="icon-sidebar-div">
                            <p>
                                <AiOutlineLike size={22} className='icon-sidebar' style={{ margin: "auto 0.5rem" }} />
                                <div className="text-drawersidebar-icon">Liked Videos</div>
                            </p>
                        </NavLink>
                    </div>

                    <div className="subscription-lsdbar">
                        <h3>Your Subscription</h3>
                        <div className="chanel-lsdbar">
                            <p>C</p>
                            <div>Channel</div>
                        </div>

                        <div className="chanel-lsdbar">
                            <p>C</p>
                            <div>Channel</div>
                        </div>

                        <div className="chanel-lsdbar">
                            <p>C</p>
                            <div>Channel</div>
                        </div>

                        <div className="chanel-lsdbar">
                            <p>C</p>
                            <div>Channel</div>
                        </div>

                        <div className="chanel-lsdbar">
                            <p>C</p>
                            <div>Channel</div>
                        </div>

                    </div>
                </div>
                <div className="container3-DrawerLeftSidebar" onClick={() => toggleDrawer()} >  </div>
            </div>
        </>
    )
}

export default DrawerSideBar
