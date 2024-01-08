import React, { Component, useState } from 'react'
import './Comment.css'
import PropTypes from 'prop-types'
import DisplayComments from './DisplayComments';

export function Comment() {
    const [commenttxt, setcommenttxt] = useState(null);
    const [commentAtxt, setcommentAtxt] = useState([]);
    const commentsList = [{
        _id: "1",
        CommentBody: "Hello",
        UserCommented: "USer1"
    },
    {
        _id: "6",
        CommentBody: "Nice Video",
        UserCommented: "USer2"
    }, {
        _id: "5",
        CommentBody: "Good",
        UserCommented: "USer3"
    }, {
        _id: "4",
        CommentBody: "Very helpful",
        UserCommented: "USer4"
    }
    ]


    const handleOnSubmit = (e) => {
        e.preventDefault();

        setcommentAtxt([...setcommentAtxt, commenttxt]);
    }
    return (
        <>
            <form className='comments_sub_form_commets'>
                <input type="text"
                    onChange={e => {
                        setcommenttxt(e.target.value)
                    }}
                    placeholder='Add Your Comments....'
                    className='comment-ibox'
                />
                <input type="submit" value="Comment" onClick={handleOnSubmit} className='comment_btn' />

            </form>
            <div className="display_comment-container">
                {
                    commentsList.map((m) => {
                        return (
                            <DisplayComments C_id={m._id} CommentBody={m.CommentBody} UserCommented={m.UserCommented} />
                        )
                    })
                }



            </div>

        </>
    )
}



