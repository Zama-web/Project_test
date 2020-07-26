import React, { Component } from 'react';
import './DropDownPointsAll.css';


class DropDownPointsAll extends Component {
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
                
                <div className='pointsList ' style={{height: listHeght}} >
                    {this.props.children}
                </div>
                <p onClick={()=>this.toggle()}>
                   +{this.count} подразделов
                </p>
            </div>
        )
    
    }
}

export default DropDownPointsAll;