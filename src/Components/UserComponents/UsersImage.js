import React from 'react';
import ImageElem from './ImageElem';


function UsersImage() {

    const imageData = [
        {
            first_name: 'George',
            last_name: 'Bluth',
            email: 'george.bluth@reqres.in',
            id: 1,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg'
        },
        {
            first_name: "Janet",
            last_name: "Weaver",
            email: "janet.weaver@reqres.in",
            id: 2,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
        },
        {
            first_name: "Emma",
            last_name: "Wong",
            email: "emma.wong@reqres.in",
            id: 3,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg'
        },
        {
            first_name: "Eve",
            last_name: "Holt",
            email: "eve.holt@reqres.in",
            id: 4,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'
        },
        {
            first_name: "Charles",
            last_name: "Morris",
            email: "charles.morris@reqres.in",
            id: 5,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg'
        },
        {
            first_name: "Tracey",
            last_name: "Ramos",
            email: "tracey.ramos@reqres.in",
            id: 6,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg'
        },
        {
            first_name: "Janet",
            last_name: "Weaver",
            email: "janet.weaver@reqres.in",
            id: 2,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
        },
        {
            first_name: "Emma",
            last_name: "Wong",
            email: "emma.wong@reqres.in",
            id: 3,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg'
        },
        {
            first_name: "Eve",
            last_name: "Holt",
            email: "eve.holt@reqres.in",
            id: 4,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'
        },
        {
            first_name: "Charles",
            last_name: "Morris",
            email: "charles.morris@reqres.in",
            id: 5,
            img: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg'
        },


    ]

    return(
        <div>
            {imageData.map((item, i)=><ImageElem key={i} item_data={item} />)}
        </div>
    )

    
    
}

export default UsersImage;