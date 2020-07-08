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
        
        console.log('__', this.state.openModel);

        const listHeght = (this.state.openModel) ? 90+'vh' : '0vh'
        const listWidth = (this.state.openModel) ? 90+'%' : '0%'
        
        return(
            <div className='model'>
                <p onClick={()=>this.toggle()}>
                    {this.props.children}
                </p>
                <div className='modelWindow' style={{
                    width: listWidth,
                    height: listHeght
                    }}>

                        
                </div>
            </div>
        )
    
    }
}

export default ModelContainer;
