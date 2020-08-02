import React, { Component } from 'react';
import API from './JSONregres';
import UserElem from './UserElem';
import './UserElem.css'
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import InfoBlock from '../Desktop-1/InfoBlock';
import FooterContainerAll from '../FooterContainer/FooterContainerAll';


class UserListRegres extends Component {

    constructor() {
        super();
        this.state = {
            users: []
        };

        this.runApi();
    }

    runApi() {
        API.getUsers((result) => this.setUsers(result.data.data))
    }

    setUsers(users) {
        this.setState(() => {
            return { users }
        });
    }



    render() {

        return (
            <div>
                <NavigationMenu />

                <InfoBlock />

                <h2>Сотрудники</h2>

                <div className='user_container'>
                    {this.state.users.map((user, i) => <UserElem key={i} user={user} />)}

                    {this.state.users.map((user, i) => <UserElem key={i} user={user} />)}
                </div>

                <FooterContainerAll />
                
            </div>
        )
    }
}

export default UserListRegres;