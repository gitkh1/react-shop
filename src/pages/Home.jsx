import React from "react";

import Catigories from "../components/Categories";
import Pagination from "../components/Pargination";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

export default function Home({ searchQuery }) {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [checkedCategory, setCheckedCategory] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedSort, setSelectedSort] = React.useState({
    name: "популярности",
    query: "rating",
    order: "desc",
  });

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
        <Catigories
          checkedCategory={checkedCategory}
          setCheckedCategory={setCheckedCategory}
        />
        <Sort selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, id) => <Skeleton key={id} />)
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
      <Pagination setCurrentPage={setCurrentPage} />
    </div>
  );
}
