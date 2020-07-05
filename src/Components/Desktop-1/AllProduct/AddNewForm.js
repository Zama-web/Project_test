import React from 'react';
import './Category.css';


function AddNewForm() {

    return(
        <div className='category'>
            <h3>Добавить новую подраздел</h3>
           <br/>
            <input type="file" />
           <div>
               
           </div>
        </div>
)
}

export default AddNewForm;

/*
class AddNewForm extends Component() {
    constructor() {
        super();
        
    }

    render() {
        return(
            <div>
                <form>
                    <label>Добавить новую подраздел</label>
                    <textarea id='tx' placeholder='Введите что нибуль'></textarea>
                    <button>Добавить</button>
                </form>
            </div>
        )
    }
}

*/