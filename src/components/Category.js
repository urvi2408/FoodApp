import React, { useState } from "react";
import Food from "../Food.json";
import "../App.css";
import FoodItem from "./FoodItem";

const Category = () => {
  const [data, setData] = useState(Food);
  console.log("data from category", data);

  const filterItem = (catItem) => {
    const newItem = Food.filter((x) => {
      return x.category === catItem;
    });
    setData(newItem);
  };

  return (
    <>
      <div className="Category">
        <button className="category_btn1" onClick={() => setData(Food)}>
          All
        </button>
        <button
          className="category_btn2"
          onClick={() => filterItem("Vegetables")}
        >
          Vegetables
        </button>
        <button className="category_btn2" onClick={() => filterItem("Drinks")}>
          Drinks
        </button>
        <button
          className="category_btn3"
          onClick={() => filterItem("Dairy Items")}
        >
          Dairy Items
        </button>
        <button className="category_btn4" onClick={() => filterItem("Fruit")}>
          Fruit
        </button>
        <button
          className="category_btn5"
          onClick={() => filterItem("Nuts And Seeds")}
        >
          Nuts & Seeds
        </button>
      </div>

      <FoodItem data={data} />
    </>
  );
};

export default Category;
