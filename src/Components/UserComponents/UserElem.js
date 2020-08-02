import React, { Component } from 'react';
import './UserElem.css'


class UserElem extends Component {

    constructor({ user }) {
        const { last_name, first_name, email, avatar } = user;
        super();
        this.last_name = last_name;
        this.first_name = first_name;
        this.email = email;
        this.avatar = avatar;

    }

    render() {
        return (
            <div>
                <div className='users'>
                    <h2>{this.last_name}</h2>

                    <p> {this.first_name} </p>

                    <a href={this.email}> {this.email} </a>

                    <img src={this.avatar} />
                </div>
            </div>
        )
    }
}

export default UserElem;