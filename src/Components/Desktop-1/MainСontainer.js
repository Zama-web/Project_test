import React from 'react';
import './MainContainer.css';
import ProductCategory from './ProductCategory';
import BlockMenuLeft from './BlockMenuLeft';


function MainContainer() {


    return(
        <div className='all_content'>
            <BlockMenuLeft/>
            <ProductCategory/>

        </div>
    )
}

export default MainContainer;