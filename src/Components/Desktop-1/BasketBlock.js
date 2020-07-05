import React from 'react';
import './InfoBlock.css';



function BasketBlock() {


    return(
        <div className='basket'>
            <img src="./ImagePage1/ic_basket.png" alt="" />
            <span>
            <span>0  </span>
            <span>Товаров</span>
            <br/>
            <span>0 Рублей</span>
            </span>
        </div>
    )
}

export default BasketBlock;