import React from "react";
import './profile.css'
import profilepic from '../images/gauravprofile.jpeg'
export function profile() {

    return (
        <>
            <div className="profile">
                <img src={profilepic} alt="" />
            </div>
        </>
    )
}