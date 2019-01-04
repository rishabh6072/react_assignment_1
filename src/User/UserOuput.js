import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div>
            <p>Hello There,</p>
            <p onClick={props.onclick}>I'm <span className='username'>{props.username}</span>.</p>
        </div>
    )
}

export default userOutput;