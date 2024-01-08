import React from "react"
import './Library.css'
import { LeftSideBar } from "../../LeftSideBar/LeftSideBar"
import vid1 from "../../../Video/vid1.m4v"
import vid2 from "../../../Video/vid2.m4v"
import vid3 from "../../../Video/vid3.m4v"
import { FaHistory } from 'react-icons/fa'
import WHL_VideoList from "../../WHL/WHL_VideoList"
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";


export function Library() {
    const vids = [
        {
            _id: 1,
            video_src: vid1,
            Chanel: "62bafe6752cea35a6c30685f",
            Uploder: "A",
            title: "2.Properties on Averages",
            description: "description of video 1"
        },
        {
            _id: 2,
            video_src: vid2,
            Chanel: "cdd",
            Uploder: "B",
            title: "3.Properties 2 to Averages",
            description: "description of video 2"
        },
        {
            _id: 3,
            video_src: vid3,
            Chanel: "add",
            Uploder: "C",
            title: "1.Introduction to Averages",
            description: "description of video 3"
        },
        {
            _id: 2,
            video_src: vid2,
            Chanel: "cdd",
            Uploder: "D",
            title: "3.Properties 2 to Averages",
            description: "description of video 2"
        }
    ];
    return (
        <>
            <div className="home-container">
                <LeftSideBar />
                <div className="home-container2">

                    <div className="container2_Pages_App">
                        <h1 className="title_container_libraryPage">
                            <b>
                                <FaHistory />
                            </b>
                            <b>History</b>
                            <div className="container_videoList_LibraryPage">
                                <WHL_VideoList
                                    page={History}
                                    videoList={vids}
                                    className="container_VideoList"
                                />
                            </div>
                        </h1>
                    </div>

                    <div className="container2_Pages_App">
                        <h1 className="title_container_libraryPage">
                            <b>
                                <MdOutlineWatchLater />
                            </b>
                            <b>Watch Later</b>
                            <div className="container_videoList_LibraryPage">
                                <WHL_VideoList
                                    page={History}
                                    videoList={vids}
                                    className="container_VideoList"
                                />
                            </div>
                        </h1>
                    </div>

                    <div className="container2_Pages_App">
                        <h1 className="title_container_libraryPage">
                            <b>
                                <AiOutlineLike />
                            </b>
                            <b>Liked Video</b>
                            <div className="container_videoList_LibraryPage">
                                <WHL_VideoList
                                    page={History}
                                    videoList={vids}
                                    className="container_VideoList"
                                />
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}