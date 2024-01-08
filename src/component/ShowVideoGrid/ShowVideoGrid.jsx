import React from 'react'
import './ShowVideoGrid.css'
import { Link } from 'react-router-dom'
import ShowVideo from '../ShowVideo/ShowVideo'

function ShowVideoGrid({ vids }) {
    return (
        <>
            <div className="container-showvideogrid">
                {
                    vids?.map(vi => {
                        return (
                            <div key={vi._id} className="video-box-app">
                                <ShowVideo vid={vi} />
                                {/* {vi.title} */}
                            </div>
                        )
                    })

                }
            </div>
        </>
    )
}

export default ShowVideoGrid
