import React from "react";
import Controls from "./components/controls";
import List from "./components/list";
import Layout from "./components/layout";

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({ store }) {
  const [basket, setBasket] = React.useState([]);

  const onAddItem = (item) => {
    const exist = basket.find((el) => el.id === item.id);
    if (exist) {
      setBasket(
        basket.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBasket([
        ...basket,
        {
          id: item.id,
          title: item.title,
          price: item.price,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <Layout head={<h1>Магазин</h1>}>
      <Controls basket={basket} />
      <List items={store.getState().items} onAddItem={onAddItem} />
    </Layout>
  );
}

export default App;
