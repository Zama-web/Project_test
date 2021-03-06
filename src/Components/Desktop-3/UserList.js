import React, { Component } from 'react';
import API from './JSONplaceholder';
import './UserContainer.css'
import UserContainer from './UserContainer';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import InfoBlock from '../Desktop-1/InfoBlock';
import FooterContainerAll from '../FooterContainer/FooterContainerAll';


class UserList extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
        this.runApi();
    }

    runApi() {
        API.getUsers((result) => this.setUsers(result.data));
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

                <h2>Лучшие консультанты этого проекта </h2>
                <div className='user_container'>

                    <div>
                        {this.state.users.map((user, i) => <UserContainer key={i} user={user} />)}

                    </div>
                </div>

                <FooterContainerAll />
            </div>
        )
    }
}

export default UserList;