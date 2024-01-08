import React from 'react'
import "./ShowVideoList.css"
import ShowVideo from '../ShowVideo/ShowVideo'
import vid1 from "../../Video/vid1.m4v"
import vid2 from "../../Video/vid2.m4v"
import vid3 from "../../Video/vid3.m4v"


export default function ShowVideoList({ vid }) {
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
            <div className="container-showvideogrid">
                {
                    vids?.filter(q => q._id === vid._id).map(vi => {
                        return (
                            <div key={vi._id} className="video-box-app">
                                <ShowVideo vid={vi} />

                            </div>
                        )
                    })

                }
            </div>
        </>
    )
}
