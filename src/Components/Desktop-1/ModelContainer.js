import React, { Component } from 'react';
import './ModelContainer.css';


class ModelContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModel: false
        }
    }

    toggle() {
        this.setState(prev=>{
            prev.openModel = !prev.openModel;
            
            return prev;
        })
    }
    
    render() {
        
        const listHeght = (this.state.openModel) ? 100+'vh' : '0vh'
        const listWidth = (this.state.openModel) ? 100+'%' : '0%'
        
        return(
            <div className='model_block'>
                <p onClick={()=>this.toggle()}>
                    {this.props.children}
                </p>

                    <div className='modelWindow' 
                     style={{
                        width: listWidth,
                        height: listHeght,
                        opacity: '.9'}}>

                    </div>
            </div>
        )
    }
}

export default ModelContainer;
