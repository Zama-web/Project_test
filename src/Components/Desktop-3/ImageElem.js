import React from 'react';
import './UserContainer.css'


function ImageElem({ item_data }) {
    let { first_name, last_name, email, img } = item_data;

    return (
        <div className='user_img' onClick={()=>console.log('****')}>
            <h3>{first_name}</h3>
            <p>{last_name}</p>
            <p>
                <a href="{email}">{email}</a>
            </p>
            <img src={img} alt="/" />

        </div>
    )
}

export default ImageElem;