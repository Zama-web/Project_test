import React from 'react';
import './Category.css'


function CategoryOne() {

    const title = 'Сухие строительные смеси';

    return(
        <div className='category'>
            <div>
                <h3>{title}</h3>
            <hr className='line'/>
            <img src="./ImagePage1/Smesi.jpg" alt="" />
            </div>
            <div className='points'>
                <ul>
                    <li>- Перегородки</li>   
                    <li>- Профиль для перегородок</li>   
                    <li>- Комплектующие для монтажа профиля</li> 
                    <li>- Штукатурки</li>  
                    <li>- Шпатлевки</li>  
                    <li>- Гидроизоляции</li>  
                </ul>
            </div>
        </div>
    )
}

export default CategoryOne;
