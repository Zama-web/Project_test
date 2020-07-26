import React from 'react';
import './Contacts.css';
import FooterContainerAll from '../FooterContainer/FooterContainerAll';

function Contacts() {
    let add_1 = 'г. Москва, Путевой пр-т, д. 131, стр.111';


    return (
        <div>
            <div className='d_2_contact'>
                <div>
                    <h2>Офисы Торговых Отделений</h2>
                    <label>Выберите город</label>
                    <input type="text" placeholder='Москва' />
                    <br /><br />
                    <h4>Каширское ТО</h4>
                    <br />
                    <p> {add_1} </p>
                    <br />
                    <p>пн.-пт.: 9:00 - 18:00</p>
                    <br />
                    <p>сб., вс.: выходной</p>
                    <br />
                    <a href="tel:+09999999999" style={{ color: 'white' }} >+7 999 999 99 99</a>
                    <br /><br />
                    <a href="tel:+09777777777" style={{ color: 'white' }} >+7 977 777 77 77</a>
                    <br /><br />
                    <a href="mailto:baizakoff2017@gmail.com" style={{ color: 'white' }} >baizakoff2017@gmail</a>
                    <br /><br /><br /><br />
                    <hr />

                    <h4>Каширское ТО</h4>
                    <br />
                    <p> {add_1} </p>
                    <br />
                    <p>пн.-пт.: 9:00 - 18:00</p>
                    <br />
                    <p>сб., вс.: выходной</p>
                    <br />
                    <a href="tel:+09999999999" style={{ color: 'white' }} >+7 999 999 99 99</a>
                    <br /><br />
                    <a href="tel:+09777777777" style={{ color: 'white' }} >+7 977 777 77 77</a>
                    <br /><br />
                    <a href="mailto:baizakoff2017@gmail.com" style={{ color: 'white' }} >baizakoff2017@gmail</a>
                    <br /><br /><br /><br />

                </div>

                <div className='d_2_map_img'>
                    <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47948.20821955761!2d37.64334702393516!3d55.75788323991165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1594584720952!5m2!1sru!2sru"></iframe>

                    <img src="./ImagePage1/assorty.jpg" alt="" />

                </div>
            </div>

            <FooterContainerAll/>
        </div>
    )
}

export default Contacts;