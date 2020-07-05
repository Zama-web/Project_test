import React from 'react';
import './NavigationMenu.css';


function NavigationMenu() {

    

    return(
        <div className='nav_menu' onClick={()=>console.log('***')} >
            <div>О Нас</div>
            <div>Контакты</div>
            <div>Консультанты</div>
            <div>Доставка</div>
            <div>% Акции</div>
            <div>Вакансии</div>
            <span>
                <a href="#" style={{color: 'yellow'}} >Вход /</a>
                <a href="#" style={{color: 'yellow'}} > Регистрация</a>
            </span>
            <div></div>
        </div>
        
    )
}

export default NavigationMenu;