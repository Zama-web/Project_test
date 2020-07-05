import React from 'react';
import './MainContainer.css';
import Productcategory from './ProductCategory';
import BlockMenuLeft from './BlockMenuLeft';


function MainContainer() {


    return(
        <div className='all_content'>
            <BlockMenuLeft/>
            <Productcategory/>

        </div>
    )
}

export default MainContainer;