import React from 'react';
import './ProductCategory.css';
import CategoryOne from './AllProduct/CategoryOne';
import CategoryTwo from './AllProduct/CategoryTwo';
import CategoryTree from './AllProduct/CategoryTree';
import CategoryFour from './AllProduct/CategoryFour';



function ProductCategory() {


    return(
        <div className='home_page_content'>
            <CategoryOne/>
            <CategoryTwo/>
            <CategoryTree/>
            <CategoryFour/>

            <CategoryOne/>

        </div>
    )
}

export default ProductCategory;