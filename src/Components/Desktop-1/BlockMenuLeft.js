import React from 'react';
import './BlockMenuLeft.css';
import DropDownPoints from './AllProduct/DropDownPoints';
import BlockMenuLeftList from './BlockMenuLeftList';

function BlockMenuLeft() {

    let arrow = `${String.fromCharCode(9658)}`

    const list_item = [
        {
            id: 1,
            category: 'Сухие строительные смеси',
            completed: false
        },
        {
            id: 2,
            category: 'Лакокрасочные материалы',
            completed: false
        },
        {
            id: 3,
            category: 'Гипсокартонные системы',
            completed: false
        },
        {
            id: 4,
            category: 'Изоляционные материалы',
            completed: false
        },
        {
            id: 5,
            category: 'Подвесной потолок',
            completed: false
        },
        {
            id: 6,
            category: 'Строительная химия',
            completed: false
        },
        {
            id: 7,
            category: 'Напольные покрытия',
            completed: false
        },
        {
            id: 8,
            category: 'Крепеж',
            completed: false
        },
        {
            id: 9,
            category: 'Инструменты',
            completed: false
        },
        {
            id: 10,
            category: 'Пиломатериалы',
            completed: false
        },
        {
            id: 11,
            category: 'Сетки металические',
            completed: false
        },
    ]

    return (
        <div className='home_page_menu_left'>

            <div>
                {list_item.map((item, i) => <BlockMenuLeftList key={i} descr={item} />)}

                <DropDownPoints>
                    <ul className='new_list_left'>
                        <li> {arrow} &#160; Электротовары      </li>
                        <li> {arrow} &#160; Металлопрокат      </li>
                        <li> {arrow} &#160; Сантехника         </li>
                    </ul>
                </DropDownPoints>
            </div>


            <br /><br />

            <div>
                <input type="text" placeholder='Новая категория' />
                <button>Добавить</button>
                <br /><br />
            </div>
        </div>
    )
}

export default BlockMenuLeft;