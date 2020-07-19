import React, { Component } from 'react';
import './BlockMenuLeft.css';
import DropDownPoints from './AllProduct/DropDownPoints';


class BlockMenuLeftList extends Component {

    constructor({descr}) {
        super();
        this.descr = descr;
        this.state = {
            completed: descr.completed
        }
    }

    changeClassList(){
        this.setState({
            completed: !this.state.completed
        })
    }


    render(){
        let arrow = `${String.fromCharCode(9658)}`    
        let classChange = 'menu_list'+ (this.state.completed ? ' completed' : '');
    
        return(
            <div 
                onClick={()=>this.changeClassList()} 
                className={classChange}>

            <ul>
                <li>
                {arrow} &#160; {this.descr.category}
                </li>
            </ul>



        </div>

        )
    }
}


export default BlockMenuLeftList;