import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import Food from "../Food.json";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { Divider } from "antd";
import "antd/dist/antd.css";
import { AddToCartItem } from "../Actions";

const FoodItemInfo = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);

  const handleClickCart = () => {
    dispatch(AddToCartItem(Food[id]));
  };

  return (
    <>
      <Header />
      <div className="FoodItemInfo">
        <div className="leftimg">
          <img
            style={{ height: "250px", width: "400px" }}
            src={Food[id]?.image}
            alt="#"
          />
        </div>
        <Divider type="vertical" style={{ height: "500px" }} />
        <div className="iteminfo">
          <p>
            <b>{Food[id]?.name}</b>
          </p>
          <p className="category">Category : {Food[id]?.category}</p>
          <p className="description">{Food[id]?.description}</p>
          <p className="description">INR {Food[id]?.price}</p>
          <button className="infobtn" onClick={handleClickCart}>
            Add To Cart
          </button>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default FoodItemInfo;
