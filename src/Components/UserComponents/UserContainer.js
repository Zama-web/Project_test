import React, { Component } from 'react';
import './UserContainer.css'


class UserContainer extends Component {
    constructor({user}){
        const {name, username, email, website} = user
        super();
        this.name = name;
        this.username = username;
        this.email = email;
        this.website = website;
    }
    
    render(){
        return(
            <div className='user_card'>

                <h4>{this.name}</h4>

                <p>{this.username}</p>

            <a href={this.email}> {this.email} </a>
            <br/>
            <a href={this.website}>{this.website}</a>

            

            </div>
        )
    }
}

export default UserContainer;
