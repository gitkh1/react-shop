import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCheckedCategory } from "../redux/slices/categorySlice.js";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export default function Catigories() {
  const checkedCategory = useSelector((state) => state.category.value);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={value}
            onClick={() => dispatch(setCheckedCategory(index))}
            className={checkedCategory === index ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
