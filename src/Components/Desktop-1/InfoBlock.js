import React from 'react';
import './InfoBlock.css';
import BasketBlock from './BasketBlock';


function InfoBlock() {


    return(
        <div className='info_block'>
            <img src='./ImagePage1/KNAUF_logo.png' alt='Logo'/>
            <div>
            <a href="mailto:baizakoff2017@gmail.com">baizakoff2017@gmail</a>
                <br/><br/>
            <p>
                Служба доставки: с 08:00 до 20:00
            </p>
            <p>
                Консультации и заказы: с 08:00 до 20:00
            </p>
            <p>Без выходных</p>
            </div>
            <div className='phone'>
                <a href="#">+7 999 999 99 99</a>
                <a href="#">+7 977 777 77 77</a>
                <br/>
                <a href="#" id='t'>Перезвоните мне</a>
            </div>


            <BasketBlock/>
            
        </div>
    )
}

export default InfoBlock;