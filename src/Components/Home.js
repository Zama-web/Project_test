import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import InfoBlock from './Desktop-1/InfoBlock';
import BlockSliders from './Desktop-1/BlockSliders';
import MainContainer from './Desktop-1/MainСontainer';
import FooterContainer from './Desktop-1/FooterContainer';


class Home extends Component{

    render(){
        return(
            <div>
                <NavigationMenu/>
                <InfoBlock/>
                <BlockSliders/>
                <MainContainer/>

                <FooterContainer/>


            </div>
        )
    }
}

export default Home;