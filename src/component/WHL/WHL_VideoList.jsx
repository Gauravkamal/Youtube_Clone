import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'

export default function WHL_VideoList({ page, videoList }) {
    return (
        <div>
            {
                videoList.map(m => {
                    return (
                        <>
                            <ShowVideoList vid={m} />

                        </>
                    )
                })
            }
        </div>
    )
}
