import React from 'react';
import './Category.css'
import DropDownPointsAll from '../../DropDownPoints/DropDownPointsAll';


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
                    <li>- Сухие смеси</li> 
                    
                    <DropDownPointsAll>
                        <ul>
                            <li>- Наливные полы</li>
                            <li>- Плитчные клея</li>
                            <li>- Затирки</li>
                            <li>- Ремонтные смеси</li>
                        </ul>
                    </DropDownPointsAll>

                </ul>

            </div>
        </div>
    )
}

export default CategoryOne;
