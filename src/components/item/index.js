import React from "react";
import propTypes from "prop-types";
import "./styles.css";

function Item(props) {
  console.log("Item");
  const { item, onAddItem } = props;
  return (
    <div className="item">
      <div className="item__number">{item.code}</div>
      <div className="item__title">{item.title}</div>
      <div className="item__actions">
        <div className="item__price">{item.price} &#8381;</div>
        <button onClick={() => onAddItem(item)}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: propTypes.object.isRequired,
};

export default React.memo(Item);
