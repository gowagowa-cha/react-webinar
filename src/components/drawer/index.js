import React from "react";
import "./style.css";

function Drawer(props) {
  console.log("Drawer");
  const { open, setOpen, basket, totalQty } = props;
  let counter = 1;

  return (
    <div
      className={open ? "drawer active" : "drawer"}
      onClick={() => setOpen(false)}
    >
      <div
        className="drawer__content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="drawer__header">
          <h1 className="drawer__text">Корзина</h1>
          <div className="drawer__close">
            <button onClick={() => setOpen(false)}>закрыть</button>
          </div>
        </div>

        {basket.map((item) => (
          <div key={item.id} className="drawer__item">
            <div className="drawer__number">{counter++}</div>
            <div className="drawer__title">{item.title}</div>
            <div className="drawer__actions">
              <div className="drawer__price">{item.price} &#8381;</div>
              <div className="drawer__count">{item.qty + " шт"}</div>
            </div>
          </div>
        ))}
        <div className="drawer__total-item">
          <div className="drawer__actions">
            <div className="drawer__total-price">
              <b>
                Итого:{" "}
                {basket.reduce((acc, el) => {
                  return acc + el.price * el.qty;
                }, 0)}{" "}
                &#8381; {totalQty} шт
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
