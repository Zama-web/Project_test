import React from 'react';
import './ProductCategory.css';
import CategoryOne from './AllProduct/CategoryOne';
import CategoryTwo from './AllProduct/CategoryTwo';
import CategoryTree from './AllProduct/CategoryTree';
import CategoryFour from './AllProduct/CategoryFour';
import AddNewForm from './AllProduct/AddNewForm';



function ProductCategory() {


    return(
        <div className='home_page_content'>
            <CategoryOne/>
            <CategoryTwo/>
            <CategoryTree/>
            <CategoryFour/>
            <AddNewForm/>
        </div>
    )
}

export default ProductCategory;