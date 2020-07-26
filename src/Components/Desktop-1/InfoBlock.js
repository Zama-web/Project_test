import React from "react";
import "./InfoBlock.css";
import BasketBlock from "../BasketBlock";

function getDate() {
  return new Date().toString()
}


function InfoBlock() {

  return (
    <div className="info_block_all">
      <a href="/home">
        <img src="./ImagePage1/logo__.jpg" alt="Logo" />
      </a>
      <div className='info_block_B'>
        <div>
          <p>Консультации и заказы: с 08:00 до 20:00</p>
          <p>Служба доставки: с 08:00 до 20:00</p>

          <p>  {getDate()}  </p>

        </div>

        <div className="phone">
          <a href="tel:+09999999999">+7 999 999 99 99</a>
          <br />
          <a href="tel:+09777777777">+7 977 777 77 77</a>
          <br />
          <a href="/" style={{ fontSize: '12px' }}>Перезвоните мне</a>
          <br />
          <a href="mailto:baizakoff2017@gmail.com">baizakoff2017@gmail</a>
        </div>
        <div className='search_elem'>
          <input type="text" placeholder='Поиск товара' />
          <p>
            &#8594;
              </p>
        </div>

        <BasketBlock />
      </div>
    </div>
  );
}

export default InfoBlock;
