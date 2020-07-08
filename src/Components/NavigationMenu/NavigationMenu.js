import React from 'react';
import './NavigationMenu.css';
import ModelContainer from '../Desktop-1/ModelContainer';


function NavigationMenu() {

    return(
        <div className='nav_menu' onClick={()=>console.log('***')} >
            <div>О Нас</div>

            <div>
                <a href="/main">Контакты</a>
            </div>

            <div>Консультанты</div>
            <div>Доставка</div>
            <div>% Акции</div>
            <div>Вакансии</div>

            <ModelContainer>

               Вход / Регистрация

            </ModelContainer>

        </div>
        
    )
}

export default NavigationMenu;