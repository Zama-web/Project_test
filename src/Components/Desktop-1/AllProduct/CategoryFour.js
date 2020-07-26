import React from 'react';
import './Category.css'
import DropDownPointsAll from '../../DropDownPoints/DropDownPointsAll';


function CategoryFour() {

    const title = 'Изоляционные материалы';

    return(
        <div className='category'>
            <div>
                <h3>{title}</h3>
            <hr className='line'/>
            <img src="./ImagePage1/zvukoizolyatciya.jpg" alt="" />
            </div>
            <div className='points'>
                <ul>
                    <li>- Экструдированный пенополистирол</li> 
                    <li>- Минеральная вата</li>   
                    <li>- Пенопласт</li>   
                    <li>- Подложка ППЭ</li>  
                    <li>- Геоткань</li>  
                    <li>- Мембрана</li>

                    <DropDownPointsAll>
                        <ul>
                            <li>- Рулонная гидроизоляция</li>
                            <li>- Шумоизоляция</li>
                            <li>- Стекловата</li>
                            <li>- Подразделы</li>
                        </ul>
                    </DropDownPointsAll>

                </ul>
            </div>
        </div>
    )
}

export default CategoryFour;
