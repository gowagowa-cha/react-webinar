import StoreModule from "../module";

class CatalogStore extends StoreModule {
  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
      item: null,
      count: 0,
    };
  }

  /**
   * Загрузка списка товаров
   */
  load = async (curPage) => {
    console.log("curPage", curPage);
    const offset = (curPage - 1) * 10;
    const response = await fetch(`/api/v1/articles?limit=10&skip=${offset}&fields=items(*),count`);
    const json = await response.json();
    this.setState({
      items: json.result.items,
      count: json.result.count,
    });
  };

  loadItem = async (itemId) => {
    console.log("item loading");
    const response = await fetch(
      `/api/v1/articles/${itemId}?fields=*,maidIn(title,code),category(title)`
    );
    const json = await response.json();
    this.setState({
      item: json.result,
    });
  };
}

export default CatalogStore;
