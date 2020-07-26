import React from 'react';
import './Delivery.css';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import InfoBlock from '../Desktop-1/InfoBlock';
import FooterContainerAll from '../FooterContainer/FooterContainerAll';

function Delivery() {


    return (
        <div>
            <NavigationMenu />

            <InfoBlock />


        <div className='d_4_delivery'>
            <h3>Доставка строительных материалов</h3>
            <hr/>
            <h4>Условия доставки</h4>
            <br/>
            <h4>Время доставки</h4>
            <br/>
            <li>Без выходных: с 8:00 до 20:00.</li>
            <li>Заявка на транспорт оформлена с 10:00 до 12:00 – Время доставки после 18:00</li>
            <li>Заявка на транспорт оформлена после 12:00 – индивидуально: доставка после 18:00 / или перенос доставки на следующий день.</li>
            <li>Стоимость доставки зависит от удаленности пункта назначения, веса и объема заказа и дополнительных услуг, если они выбраны.</li>
            <li>Итоговая сумма будет рассчитана автоматически на сайте при оформлении заказа или менеджером при обработке заказа.</li>

        </div>

            <FooterContainerAll />
        </div>
    )
}

export default Delivery;