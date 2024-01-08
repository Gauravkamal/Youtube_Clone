import React from 'react'
import './ShowVideo.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function ShowVideo({ vid }) {
    const navigate = useNavigate();
    return (
        <>
            <div onClick={() => { navigate(`/VideoPage/${vid._id}`) }}>
                <video
                    src={`${vid?.video_src}`}
                    className='video-showvideo'
                >

                </video>

            </div>
            <div className="video-description">
                <div className="Chanel_logo_App">
                    <div className='fstChar_logo_App'>
                        <p>{`${vid?.Uploder.charAt(0).toUpperCase()}`}</p>

                    </div>
                </div>
                <div className="video-details">
                    <p className='title-vid-showvideo'>{`${vid?.title}`}</p>
                    <pre className='vid-view-upload-time' >10-10-2023</pre>
                    <pre className='vid-view-upload-time' >
                        10 views
                        <div className="dot"></div>
                        video uploaded 1 year ago
                    </pre>

                </div>

            </div>

        </>
    )
}

export default ShowVideo
