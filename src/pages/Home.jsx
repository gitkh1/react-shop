/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import Catigories from "../components/Categories";
import Pagination from "../components/Pagination";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort, { sortList } from "../components/Sort";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { setCurrentPage, setSelectedSort } from "../redux/slices/sortSlice";
import { setCheckedCategory } from "../redux/slices/categorySlice";

export default function Home() {
  const stateSelector = useSelector((state) => state);
  const searchQuery = stateSelector.search.value;
  const checkedCategory = stateSelector.category.value;
  const selectedSort = stateSelector.sort.value;
  const currentPage = stateSelector.sort.currentPage;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = React.useRef(false);
  const isSearch = React.useRef(false);

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.slice(1));
      dispatch(setCurrentPage(Number(params.currentPage)));
      dispatch(setCheckedCategory(Number(params.checkedCategory)));
      dispatch(
        setSelectedSort(
          sortList.find((item) => item.query === params.selectedSort)
        )
      );
    }
    isMounted.current = true;
    isSearch.current = true;
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    if (isSearch.current) {
      isSearch.current = false;
      return;
    }
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
        console.log(data);
      });
    window.scrollTo(0, 0);
  }, [checkedCategory, selectedSort, searchQuery, currentPage]);

  React.useEffect(() => {
    if (!isMounted.current) {
      return;
    }
    const queryString = qs.stringify({
      checkedCategory,
      selectedSort: selectedSort.query,
      currentPage,
    });
    navigate(`?${queryString}`);
  }, [checkedCategory, selectedSort, currentPage]);

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
