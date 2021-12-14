import React, { useEffect } from "react";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import numberFormat from "../../utils/number-format";
import { useParams } from "react-router-dom";
import "./style.css";

function ItemPage({item, onAdd }) {
  let { id } = useParams();

  console.log(id);

  const select = useSelector((state) => ({
    item: state.catalog.item,
  }));

  useEffect(async () => {
    await store.catalog.loadItem(id);
  }, []);

  const store = useStore();

  return (
    <div className="Items__page">
      {select.item ? (
        <div className="Items__description">
          <p className="Items__description-desc">{select.item.description}</p>
          <p className="Items__description-manufacturer">
            Страна производитель: <b>{select.item.maidIn.title}</b>
          </p>
          <p className="Items__description-category">
            Категория: <b>{select.item.category.title}</b>
          </p>
          <p className="Items__description-edition">
            Год выпуска: <b>{select.item.edition}</b>
          </p>
          <p className="Items__description-price">
            <b>Цена: {numberFormat(select.item.price)} ₽</b>
          </p>
          <button onClick={() => onAdd(id)}>Добавить</button>
        </div>
      ) : null}
    </div>
  );
}

export default ItemPage;
