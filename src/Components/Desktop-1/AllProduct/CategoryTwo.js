import React from 'react';
import './Category.css'
import DropDownPoints from './DropDownPoints';



function CategoryTwo () {

    let title = 'Лакокрасочные материалы';


    return(
        <div className='category'>
            <div>
                <h3>{title}</h3>
            <hr className='line'/>
            <img src="./ImagePage1/unnamed.jpg" alt="" />
            </div>
            <div className='points'>
                <ul>
                    <li>- Водоэмульсионные краски</li>   
                    <li>- Масляные краски</li> 
                    <li>- Грунт по металлу</li>  
                    <li>- Краска резиновая</li>
                    <li>- Краска по ржавчине</li>  
                    <li>- Эмали</li>   

                    <DropDownPoints>
                        <ul>
                            <li>- Декоротивные штукатурки</li>
                            <li>- Гидроизоляция</li>
                            <li>- Подразделы</li>
                            <li>- Подразделы</li>
                            <li>- Подразделы</li>
                            <li>- Подразделы</li>
                        </ul>
                    </DropDownPoints>

                </ul>
            </div>
        </div>
    )
}

export default CategoryTwo;