import React from 'react';
import './InfoBlock.css';
import BasketBlock from './BasketBlock';


function InfoBlock() {


    return(
        <div className='info_block'>
            <img src='./ImagePage1/logo_knauf_1.jpg' alt='Logo'/>
            <div>
            <p>
                Служба доставки: с 08:00 до 20:00
            </p>
            <p>
                Консультации и заказы: с 08:00 до 20:00
            </p>
            <p>Без выходных</p>
            <br/>
            </div>
            
            <div className='phone'>
                <a href="tel:+09999999999" style={{color: 'white'}} >+7 999 999 99 99</a>
                <a href="tel:+09777777777" style={{color: 'white'}} >+7 977 777 77 77</a>
                <a href="#" id='t'>Перезвоните мне</a>
                <br/>
                <a href="mailto:baizakoff2017@gmail.com" style={{color: 'white'}} >baizakoff2017@gmail</a>

            </div>


            <BasketBlock/>
            
        </div>
    )
}

export default InfoBlock;