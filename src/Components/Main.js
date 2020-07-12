import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import InfoBlock from './Desktop-1/InfoBlock';
import Contacts from './Desktop-2/Contacts';


class Main extends Component{

    render(){
        return(
            <div>
                <NavigationMenu/>
                <InfoBlock/>
                <Contacts/>
            </div>
        )
    }
}

export default Main;