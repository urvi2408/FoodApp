import AddToCartReducer from "../reducers/AddToCartReducer";
import { combineReducers } from "redux";
import AddToOrderReducer from "./AddToOrderReducer";
import CatalogReducer from "./CatalogReducer";

const rootReducers = combineReducers({
  FoodReducer: AddToCartReducer,
  OrderReducer: AddToOrderReducer,
  Catalog: CatalogReducer,
});

export default rootReducers;