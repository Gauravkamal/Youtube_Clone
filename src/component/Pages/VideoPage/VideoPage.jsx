import React from "react";
import './VideoPage.css'
import vid1 from "../../../Video/vid1.m4v"
import vid2 from "../../../Video/vid2.m4v"
import vid3 from "../../../Video/vid3.m4v"
import LikeWatchLaterbtnw from "./LikeWatchLaterbtnw";
import { Comment } from "../../Comments/Comment";


export function VideoPage() {

    return (
        <>
            <div className="container-videopage">
                <div className="container2-videoPage">
                    <div className="video-display-screen-videopage">
                        <div className="video-display-screen-videoPage">
                            <video src={vid1} className={"video-ShowVideo-videoPage"}
                                controls
                                autoPlay
                            >
                            </video>
                            <div className="videoDetails-videoPage">
                                <div className="video-btns-title-videoPage-cont">
                                    <p className="video-title-videoPage">Title</p>
                                    <div className="views-date-btns-videoPage">
                                        <div className="views-videoPage">
                                            5 views <div className="dot"></div> 1 month ago
                                        </div>
                                        <LikeWatchLaterbtnw />
                                    </div>
                                </div>
                            </div>
                            <div className="channel-details-videoPage">
                                <b className="channel-logo-videoPage">
                                    <p>C</p>
                                </b>
                                <p className="channel-name-videoPage">Your Channel Name</p>
                            </div>

                            <div className="comments-videoPage">
                                <h2>
                                    <u>Comments</u>
                                </h2>
                                <Comment />
                            </div>
                        </div>
                    </div>
                    <div className="moreVideoBar-showVideo">
                        More Video
                    </div>
                </div>
            </div>
        </>
    )
}

