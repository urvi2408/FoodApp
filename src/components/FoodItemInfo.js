import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { Divider } from "antd";
import "antd/dist/antd.css";
import { AddToCartItem } from "../Actions";
import { fetchMealById } from "../api/foodApi";
import Footer from "./Footer";

const FoodItemInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        setItem(await fetchMealById(id));
      } catch (err) {
        setError("Meal not found.");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleClickCart = () => item && dispatch(AddToCartItem(item));

  if (loading) return (<><Header/><p className="status-message"> Loading...</p></>);
  if (error || !item) return (<><Header /><p>{error || "Meal not found."}</p></>);

  return (
    <>
      <Header />
      <div className="FoodItemInfo">
        <div className="leftimg">
          <img style={{ height: "250px", width: "400px" }} src={item.image} alt="#" />
        </div>
        <Divider type="vertical" style={{ height: "350px" }} />
        <div className="iteminfo">
          <p><b>{item.name}</b></p>
          <p className="category">Category : {item.category}</p>
          <p className="description">{item.description}</p>
          <p className="description">INR {item.price}</p>
          <button className="infobtn" onClick={handleClickCart}>Add To Cart</button>
          <br /><br />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default FoodItemInfo;