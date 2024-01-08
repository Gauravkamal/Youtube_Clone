import React from 'react'
import './Comment.css'
import { useState } from 'react';

function DisplayComments({ CommentBody, UserCommented, C_id }) {
    const [edit, setedit] = useState(false);
    const [delet, setdelete] = useState(true);
    // const [comntbdy,setcomntbdy]= useState();
    const [commenttxt, setcommenttxt] = useState("");

    const edithandle = () => {
        setedit(true);
        setcommenttxt(commenttxt);
    }

    const handleOnSubmit = (e) => {
        setedit(false);
        e.preventDefault();
    }

    const handleDelete = () => {
        setdelete(false);
    }
    return (

        <>
            {delet ? <>
                {
                    edit ?
                        <>
                            <form className='comments_sub_form_commets'>
                                <input type="text"
                                    onChange={e => {
                                        setcommenttxt(e.target.value)
                                    }}
                                    placeholder={CommentBody}
                                    // value={CommentBody}
                                    className='comment-ibox'
                                />
                                <input type="submit" value="Edit" onClick={handleOnSubmit} className='comment_btn' />

                            </form>
                        </>

                        : <>
                            <div>
                                <p className="comment_body">
                                    {CommentBody}

                                </p>
                                <p className='User_commented' > - {UserCommented} Commented</p>
                                <p className="EditDell_DisplayComments">
                                    <i onClick={() => { edithandle() }}>Edit  </i>
                                    <i onClick={() => handleDelete()}>  Delete</i>
                                </p>
                            </div>
                        </>



                }
                {edit ? <p className='User_commented' > - {UserCommented} Commented </p> : <></>}</> : <></>}


        </>
    )
}



export default DisplayComments;

