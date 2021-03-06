import React from 'react';
import './FooterContainerAll.css';



function FooterContainerAll() {


    return (
        <div className='footer'>
            <div className='footer_one'>
                <div>
                    <h4>Подпишись на обновления и получай информацию о всех новинках и акциях!</h4>
                    <p>Нажав кнопку "Отправить", я принимаю
                    <a href="https://www.google.com">условия политики конфиденциальности.</a>
                    </p>
                </div>
                <div>
                    <input type="text" />
                    <button>&#8594;</button>
                </div>
            </div>

            <div className='footer_content'>
                <div className='footer_menu'>
                    <p>
                        <a href="/home">О Компании</a>
                    </p>
                    <p>Реквизиты компании</p>
                    <p>
                        <a href="/main">Контакты</a>
                    </p>
                    <p>Новости</p>
                    <p>
                    <a href="/consultants">Сотрудники</a>
                    </p>
                    <p>Статьи</p>
                    <p>Вакансии</p>
                </div>
                <div className='footer_menu'>
                    <p>Как оформить заказ</p>
                    <p>
                        <a href="/delivery">Доставка</a>
                    </p>
                    <p>Оплата</p>
                    <p>Обмен и возврат</p>
                    <p>Вопрос-ответ</p>
                </div>
                <div className='footer_menu'>
                    <p>
                        <a href="/home">О Компании</a>
                    </p>
                    <p>Реквизиты компании</p>
                    <p>Контакты</p>
                    <p>Новости</p>
                    <p>
                    <a href="/consultants">Сотрудники</a>
                    </p>
                    <p>Статьи</p>
                    <p>Вакансии</p>
                </div>
                <div className='footer_menu'>
                    <p>Как оформить заказ</p>
                    <p>
                        <a href="/delivery">Доставка</a>
                    </p>
                    <p>Оплата</p>
                    <p>Обмен и возврат</p>
                    <p>Вопрос-ответ</p>
                </div>
                <div className='footer_menu'>
                    <p>Звоно по РФ бесплатный</p>
                    <p>+7 565 060-95-95</p>
                    <div className='social'>
                        <a href="https://www.google.com">
                            <img src="./ImagePage1/social_wordpress_55 (1).png" alt="" />
                        </a>
                        <a href="https://www.github.com">
                            <img src="./ImagePage1/social_instagram_3.png" alt="" />
                        </a>
                        <a href="https://www.mail.ru">
                            <img src="./ImagePage1/social_facebook_fb_35.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterContainerAll;

