import React from 'react';
import './Category.css'
import DropDownPointsAll from '../../DropDownPoints/DropDownPointsAll';



function CategoryTwo() {

    const title = 'Гипсокартонные системы';

    return (
        <div className='category'>
            <div>
                <h3> {title} </h3>
                <hr className='line' />
                <img src="./ImagePage1/gipsokarton.jpg" alt="" />
            </div>
            <div className='points'>
                <ul>
                    <li>- Гипсокартонный лист (ГКЛ, ГКЛВ)</li>
                    <li>- Гипсоволокнистый лист (ГВЛ, ГВЛВ)</li>
                    <li>- Аквапанели</li>
                    <li>- Элемент пола</li>
                    <li>- Профиль для гипсокартона</li>
                    <li>- Элементы крепления</li>

                    <DropDownPointsAll>
                        <ul>
                            <li>- Подразделы</li>
                            <li>- Подразделы</li>
                            <li>- Подразделы</li>
                            <li>- Подразделы</li>
                        </ul>
                    </DropDownPointsAll>

                </ul>
            </div>
        </div>
    )


}

export default CategoryTwo;

