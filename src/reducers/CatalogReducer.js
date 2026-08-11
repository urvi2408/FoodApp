const initialState = { items: [] };

const CatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FOOD_ITEMS":
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default CatalogReducer;