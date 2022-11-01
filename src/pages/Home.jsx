import React from "react";

import Catigories from "../components/Categories";
import Pagination from "../components/Pagination";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";
import { useSelector } from "react-redux";

export default function Home() {
  const stateSelector = useSelector((state) => state);
  const searchQuery = stateSelector.search.value;
  const checkedCategory = stateSelector.category.value;
  const selectedSort = stateSelector.sort.value;
  const currentPage = stateSelector.sort.currentPage;

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    let url = `https://6350b1143e9fa1244e4afe11.mockapi.io/pizzas`;
    url += `?page=${currentPage}&limit=4&sortby=${selectedSort.query}&order=${selectedSort.order}`;
    if (checkedCategory) {
      url += `&category=${checkedCategory}`;
    }
    if (searchQuery !== "") {
      url += `&search=${searchQuery}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [checkedCategory, selectedSort, searchQuery, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Catigories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, id) => <Skeleton key={id} />)
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
      <Pagination />
    </div>
  );
}
