import React from "react";
import propTypes from "prop-types";
import Item from "../item";
import "./styles.css";

function List(props) {
  console.log("List");
  const { items, onAddItem } = props;
  return (
    <div className="List">
      {items.map((item) => (
        <div className="List__item" key={item.id}>
          <Item item={item} onAddItem={onAddItem} />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
};

List.defaultProps = {
  items: [],
  onAddItem: () => {},
};

export default React.memo(List);
