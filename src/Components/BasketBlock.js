import React from 'react';
import './BasketBlock.css';



function BasketBlock() {


    return (
        <div className='basket'>
            <img src="./ImagePage1/icons8-купить-48.png" alt="" />
            <span>
                <span>0  </span>
                <span>Товаров</span>
                <br />
                <span>0 Рублей</span>
            </span>
        </div>
    )
}

export default BasketBlock;