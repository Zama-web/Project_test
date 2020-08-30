import React from 'react';
import './NavigationMenu.css';
import ModelContainer from '../Desktop-1/ModelContainer';

function NavigationMenu() {

    return (
        <div className='nav_menu' onClick={() => console.log('***')} >
            <div>
                <a href="/home">О Нас</a>
            </div>

            <div>
                <a href="/main">Контакты</a>
            </div>

            <div>
                <a href="/consultants">Консультанты</a>
            </div>

            <div>
                <a href="/delivery">Доставка</a>
            </div>
            <div>
                % Акции
            </div>
            <div>
                
                <a href="/staff">Сотрудники</a>
                
            </div>

            <ModelContainer>

                Вход / Регистрация

            </ModelContainer>
            

        </div>

    )
}

export default NavigationMenu;