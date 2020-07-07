import React from 'react';
import './BlockMenuLeft.css';
import DropDownPoints from './AllProduct/DropDownPoints';


function BlockMenuLeft() {

    let arrow = `${String.fromCharCode(9658)}`


    return(
        <div className='home_page_menu_left'>
            <input type="text" placeholder='Новая категория товара' />
            <button>Добавить</button>
            <br/><br/>
            <ul>
                <li> {arrow} &#160; Сухие строительные смеси </li>                       
                <li> {arrow} &#160; Лакокрасочные материалы  </li>                   
                <li> {arrow} &#160; Гипсокартонные системы   </li>                   
                <li> {arrow} &#160; Изоляционные материалы   </li>
                <li> {arrow} &#160; Подвесной потолок        </li>               
                <li> {arrow} &#160; Строительная химия       </li>               
                <li> {arrow} &#160; Напольные покрытия       </li>               
                <li> {arrow} &#160; Крепеж                   </li>   
                <li> {arrow} &#160; Инструменты              </li>       
                <li> {arrow} &#160; Пиломатериалы            </li>           
               

                <DropDownPoints>
                    <ul className='menu_list'>
                        <li> {arrow} &#160; Электротовары      </li>           
                        <li> {arrow} &#160; Металлопрокат      </li>           
                        <li> {arrow} &#160; Сантехника         </li>       
                    </ul>
                </DropDownPoints>
                
            </ul>
        </div>
    )
}

export default BlockMenuLeft;