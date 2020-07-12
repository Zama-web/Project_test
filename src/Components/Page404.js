import React, { Component } from 'react';


class Page404 extends Component{

    render(){
        return(
            <div style={{
                width: '100%',
                height: '100vh',
                backgroundColor: 'white'
            }} >
                <h2 style={{
                    textAlign: 'center', 
                    color: 'darkred'}}>
                
                Что то пошло не так :-( </h2>

                <img 
                    src="./ImagePage1/error.jpg" 
                    alt="" 
                    style={{
                        width: '1350px', 
                        height: '600px'}} />
            </div>
        )
    }
}

export default Page404;