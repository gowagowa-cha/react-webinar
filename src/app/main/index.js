import React, { useCallback, useEffect, useState } from "react";
import Item from "../../components/item";
import Layout from "../../components/layout";
import BasketSimple from "../../components/basket-simple";
import List from "../../components/list";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import Pagination from "../../components/pagination";
import ItemPage from "../../components/items-page";
import { Route, Routes } from "react-router";

function Main() {
  const select = useSelector((state) => ({
    items: state.catalog.items,
    amount: state.basket.amount,
    sum: state.basket.sum,
    count: state.basket.count,
  }));

  // Загрузка тестовых данных при первом рендере
  useEffect(async () => {
    await store.catalog.load(curPage);
  }, []);

  const store = useStore();

  const callbacks = {
    addToBasket: useCallback((_id) => store.basket.add(_id), [store]),
    openModal: useCallback(() => store.modals.open("basket"), [store]),
    load: useCallback((offset) => store.catalog.load(offset)),
  };

  const renders = {
    item: useCallback(
      (item) => {
        return <Item item={item} onAdd={callbacks.addToBasket} />;
      },
      [callbacks.addToBasket]
    ),
  };

  const [curPage, setCurPage] = useState(1);

  const updatePage = async (newPage) => {
    await store.catalog.load(newPage);
    setCurPage(newPage);
  };

  console.log(select.count);

  return (
    <Layout head={<h1>Магазин</h1>}>
      <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <List items={select.items} renderItem={renders.item} />

              <Pagination triggerParentUpdate={updatePage} count={select.count} />
            </>
          }
        />
        <Route
          path=":id"
          element={
            <ItemPage
              onAdd={callbacks.addToBasket}
              amount={select.amount}
              sum={select.sum}
            />
          }
        />
      </Routes>
    </Layout>
  );
}

export default React.memo(Main);
