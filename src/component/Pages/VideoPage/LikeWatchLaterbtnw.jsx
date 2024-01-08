import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import './LikeWatchLaterbtnw.css'
import { MdPlaylistAddCheck } from "react-icons/md";
import { RiPlayListAddFill } from "react-icons/ri";
import { RiHeart3Line } from "react-icons/ri";
import { RiShareForwardFill } from "react-icons/ri";
import { RiHeart3Fill } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";





function LikeWatchLaterbtnw() {
    var likes = 6;
    const [saved, setSave] = useState(false);
    const [like, setlike] = useState(false);
    const [dislike, setdislike] = useState(false);

    return (
        <>
            <div className="btn-cont-videoPage">
                <div className="btn-videoPage">
                    <BsThreeDots />
                </div>
                <div className="btn-videopage">
                    <div className="save-videopage" onClick={() => { setlike(!like); }}>
                        {like ? <>
                            <AiFillLike size={22} className='btns-icon-videoPage-liked' />

                        </> : <>
                            <AiOutlineLike size={22} className='btns-icon-videoPage' />

                        </>}
                        {like ? <b>{likes + 1}</b> : <b>{likes}</b>}

                    </div>

                    <div className="save-videopage" onClick={() => { setdislike(!dislike); }}>
                        {dislike ? <>
                            <AiFillDislike size={22} className='btns-icon-videoPage' />

                        </> : <>
                            <AiOutlineDislike size={22} className='btns-icon-videoPage' />
                        </>}
                        <b>Dislike</b>
                    </div>

                    <div className="save-videopage" onClick={() => { setSave(!saved); }}>
                        {
                            saved ? <>
                                <MdPlaylistAddCheck size={25} className='btns-icon-videoPage' />
                                <b>Saved</b>

                            </> : <>
                                <RiPlayListAddFill size={22} className='btns-icon-videoPage' />
                                <b>Save</b>

                            </>
                        }
                    </div>

                    <div className="save-videopage">
                        <RiShareForwardFill size={22} className='btns-icon-videoPage' />
                        <b>Share</b>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LikeWatchLaterbtnw
