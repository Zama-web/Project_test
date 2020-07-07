import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import InfoBlock from './Desktop-1/InfoBlock';
import BlockSliders from './Desktop-1/BlockSliders';
import MainContainer from './Desktop-1/MainСontainer';


class Home extends Component{

    render(){
        return(
            <div>
                <NavigationMenu/>
                <InfoBlock/>
                <BlockSliders/>
                <MainContainer/>


            </div>
        )
    }
}

export default Home;