import React, { Component } from 'react';
import './DropDownPoints.css';


class DropDownPoints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.count = this.props.children.props.children.length;
    }

    toggle() {
        this.setState(prev=>{
            prev.isOpen = !prev.isOpen;
            return prev;
        })
    }

    render() {

        const listHeght = (this.state.isOpen) ? this.count*30+'px' : '0px'

        return(
            <div className='new_points'>
                <p onClick={()=>this.toggle()}>
                   +{this.count} подразделов

                </p>
                <div className='pointsList ' style={{height: listHeght}} >
                    {this.props.children}
                </div>
            </div>
        )
    
    }
}

export default DropDownPoints;