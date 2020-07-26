import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu/NavigationMenu';
import InfoBlock from './Desktop-1/InfoBlock';
import BlockSliders from './Desktop-1/BlockSliders';
import MainContainer from './Desktop-1/MainСontainer';
import FooterContainerAll from './FooterContainer/FooterContainerAll';


class Home extends Component{

    render(){
        return(
            <div>
                <NavigationMenu/>
                <InfoBlock/>
                <BlockSliders/>
                <MainContainer/>

                <FooterContainerAll/>


            </div>
        )
    }
}

export default Home;