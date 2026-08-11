import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import FoodItem from "./FoodItem";
import { fetchMealsByCategory, fetchAllMeals, CATEGORIES } from "../api/foodApi";
import { SetFoodItems } from "../Actions";

const Category = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.Catalog?.items) || [];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [active, setActive] = useState("All");

  const abortRef = useRef(null);

  const loadFoods = async (label) => {
    if (loading) return;
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setActive(label);
    setLoading(true);
    setError(null);

    try {
      const items =
        label === "All" ? await fetchAllMeals("a", controller.signal) : await fetchMealsByCategory(label, controller.signal);
      dispatch(SetFoodItems(items));
    } catch (err) {
      if (err.name === "AbortError") return;
      console.error(err);
      setError("Could not load meals. Please try again.");
      setLoading(false);
      return;
    }
    setLoading(false);
  };

  useEffect(() => {
    loadFoods("All");
    return () => abortRef.current?.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="Category">
        <button className={`category_btn1 ${active === "All" ? "active" : ""}`} disabled={loading} onClick={() => loadFoods("All")}>
          All
        </button>
        {CATEGORIES.map((label) => (
          <button
            key={label}
            className={`category_btn2 ${active === label ? "active" : ""}`}
            disabled={loading}
            onClick={() => loadFoods(label)}
          >
            {label}
          </button>
        ))}
      </div>

      {loading && <p className="status-message">Loading foods...</p>}
      {error && <p className="status-message error">{error}</p>}
      {!loading && !error && <FoodItem data={data} />}
    </>
  );
};

export default Category;