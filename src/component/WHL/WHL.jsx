import React from 'react'
import { LeftSideBar } from '../LeftSideBar/LeftSideBar'
import './WHL.css'
import WHL_VideoList from './WHL_VideoList'

export default function WHL({ page, videoList }) {
    return (
        <div className="home-container">
            <LeftSideBar />
            <div className="home-container2">
                <p className='container_whl' >
                    <div className="box_WHL leftside_whl1">
                        <b>Your {page} Shown Here</b>
                        {
                            (page === 'History') ?
                                <div className="clear_history_btn">
                                    Clear History
                                </div> : <></>
                        }
                    </div>
                    <div className="rightside_whl">
                        <h1>{page}</h1>
                        <div className="whl_list">
                            <WHL_VideoList
                                page={page}
                                videoList={videoList}
                            />
                        </div>
                    </div>

                </p>
            </div>
        </div>
    )
}
